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
        <option selected>All Category</option>
        <option value="1">Util</option>
        <option value="2">Entertainment</option>
        <option value="3">Food</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
