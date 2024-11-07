import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/dataSlice";
import { nanoid } from "nanoid";

const AddBookForm = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const dataBook = {
            ...data,
            id: nanoid()
        }
        
        dispatch(addBook(dataBook))
        reset()
    };

    
    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-1 mb-7 mt-3">
   <div className="flex flex-col items-center gap-1">
        <label htmlFor="title" className='text-neutral-600'>Title</label>
        <input
          type="text"
          id="title"
          {...register('title', { required: true,             
             minLength: {
            value: 3,
            message: "Title must be at least 3 symbols",
          }
            })}
        className="w-36 p-1 border-none rounded bg-zinc-200"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <label htmlFor="author" className='text-neutral-600'>Author</label>
        <input
          type="text"
          id="author"
          {...register('author', { required: true,
            minLength: {
            value: 3,
            message: "The author name must be more than 3 symbols",
          },
            maxLength: {
            value: 14,
            message: "The author name must be less than 14 symbols",
          }})}
        className="w-36 p-1.5 border-none rounded bg-zinc-200"
        />
    </div>
    <div className="flex flex-col items-center gap-1">
        <label htmlFor="genre" className='text-neutral-600'>Genre</label>
        <input
          type="text"
          id="genre"
          {...register('genre', { required: true,
            minLength: {
            value: 3,
            message: "Genre must be more than 3 symbols",
          },
            maxLength: {
            value: 14,
            message: "Genre must be less than 14 symbols",
          }})}
        className="w-36 p-1.5 border-none rounded bg-zinc-200"
        />
    </div>
    <button
        type="submit"
        className="p-2.5 text-sm font-semibold leading-5 text-white bg-[#04aa6d] rounded-lg border-none cursor-pointer hover:bg-[#13aa52] hover:shadow-xl hover:-translate-y-1"
      >
        Add book
    </button>
    </form>
}

export default AddBookForm;