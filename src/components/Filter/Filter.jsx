import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <p>Find contact by name:</p>
      <input
        value={value}
        onChange={onChange}
        type="text"
        name="keyword"
        placeholder="Ivan..."
      />
    </div>
  );
};
