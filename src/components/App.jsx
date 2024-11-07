import AddBookForm from "./AddBookForm/AddBookForm";
import BookList from "./BookList/BookList";
import FilterComponent from "./FilterComponent/FilterComponent";

const App = () => {
  return (
    <>
     <FilterComponent/>
     <AddBookForm/>  
     <BookList/>
    </>
  )
}

export default App;
