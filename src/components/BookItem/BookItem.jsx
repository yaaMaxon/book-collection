import { useDispatch } from "react-redux";
import { removeBook } from "../../store/dataSlice";
import { FaEye } from "react-icons/fa";

const BookItem = ({ dataBook, views }) => {
    const { title, author, genre, id } = dataBook;
    const dispatch = useDispatch();

    const handleRemoveBook = () => {
        dispatch(removeBook(id))
    }

    return <div className='w-[250px] bg-slate-50 shadow-xl duration-300 rounded hover:shadow-2xl'>
      <div className="flex flex-col justify-center items-center gap-2.5 px-[10px] py-[16px]">
       <h2 className="text-lg text-center font-semibold text-gray-950">{title}</h2>
       <h3 className="text-base text-neutral-500 hover:text-neutral-700">Author: {author}</h3>
       <h3 className="text-base text-neutral-500 hover:text-neutral-700">Genre: {genre}</h3>
       <span className="flex items-center gap-[5px]"><FaEye/> {views}</span>
       <button type="button" onClick={handleRemoveBook} className="p-2 text-sm font-semibold leading-5 text-white bg-[#04aa6d] rounded-lg border-none cursor-pointer hover:bg-[#13aa52] hover:shadow-xl hover:-translate-y-1">Delete</button>
    </div>
    </div>
}

export default BookItem;