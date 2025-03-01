import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBoxContainer}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter.name}
        onChange={handleChangeInput}
        className={css.searchBoxInput}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;