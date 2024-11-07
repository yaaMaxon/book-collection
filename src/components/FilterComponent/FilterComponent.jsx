import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "../../store/selectors";
import { changeFilter } from "../../store/filterSlice";

const FilterComponent = () => {
    const dispatch = useDispatch()
    const filter = useSelector(filterSelector) 

    const handleInput = (e) => {
      dispatch(changeFilter(e.target.value))
    }

    return (
       <div className="flex flex-col items-center gap-1 mt-5">
        <label htmlFor="filter" className='text-neutral-600'>Filter your books</label>
        <input
          type="text"
          id="filter"
          value={filter}
          placeholder="Filter books..."
          className="w-36 p-1 border-none rounded bg-zinc-200"
          onInput={handleInput}
        />
      </div>
    )
}

export default FilterComponent;