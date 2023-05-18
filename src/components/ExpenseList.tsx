import { useEffect, useState } from "react";

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
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const hanldleResize = (): void => {
      setIsSmallMobile(window.innerWidth <= 420);
    };

    window.addEventListener("resize", hanldleResize);

    hanldleResize();

    return () => {
      window.removeEventListener("resize", hanldleResize);
    };
  }, []);

  if (expenses.length === 0)
    return (
      <p className=" text-start">Add an expense to see the expense list</p>
    );

  return (
    <>
      {isSmallMobile && (
        <p className=" text-start fw-light lh-1">
          Table below is horizontally scrollable on very small devices.
        </p>
      )}
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
    </>
  );
};

export default ExpenseFilter;
