interface Expense {
  id: number;
  description: string;
  amount: number;
  category: { id: number; name: string }; //it should be an obj with 2 properties(id & name)
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseFilter = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((e) => (
          <tr key={e.id}>
            <td>{e.description}</td>
            <td>{e.amount}</td>
            <td>{e.category.name}</td>
            <td>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => onDelete(e.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td colSpan={3}>
            ₹{expenses.reduce((acc, e) => acc + e.amount, 0).toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseFilter;
