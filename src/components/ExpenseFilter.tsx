import { categories } from "~/pages";

interface Props {
  onSelectCategory: (categoryId: number) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="input-group mb-3">
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(parseInt(event.target.value))}
      >
        <option defaultValue={""}>All Category</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
