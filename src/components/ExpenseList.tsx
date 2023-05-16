interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string; //it should be an obj with 2 properties(id & name)
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseFilter = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <div className="table-responsive ">
      <table className="table table-bordered table-hover text-center">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={e.id}>
              <td>{e.description}</td>
              <td>{e.amount}</td>
              <td>{e.category}</td>
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
            <th>Total</th>
            <th>
              ₹{expenses.reduce((acc, e) => acc + e.amount, 0).toFixed(2)}
            </th>
            <th colSpan={2}></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseFilter;
