import { useDispatch, useSelector } from 'react-redux';
import { filtered } from 'redux/reducer';
import { slectFilter } from 'redux/selectors';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(slectFilter);
  const hendleChange = event => {
    dispatch(filtered(event.target.value));
  };
  return (
    <>
      <h2>Contacts</h2>
      <form className={css.formContact}>
        <label className={css.labelInputs}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={hendleChange}
            required
            placeholder="Search"
          />
        </label>
      </form>
    </>
  );
}

export default Filter;
