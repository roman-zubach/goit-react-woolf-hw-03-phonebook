import './assets/inddex.css';

export const Filter = ({ onChange }) => {
  return <div className='filter-group'>
    <label htmlFor='filter'>Find contacts by name</label>
      <input
        onChange={onChange}
        type="text"
        name="filter"
      />
    </div>;
};
