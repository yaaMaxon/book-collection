import { InView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataSelector } from "../../store/selectors";
import { filterSelector } from "../../store/selectors";
import BookItem from "../BookItem/BookItem";

const BookList = () => {
    const data = useSelector(getDataSelector);
    const filter = useSelector(filterSelector);
    const [viewsInfo, setViewsInfo] = useState([]);
    
    const initViews = () => {
        const initialViews = data.map(({ title }) => ({
            title,
            views: 0,
        }));
        localStorage.setItem("views", JSON.stringify(initialViews));
        setViewsInfo(initialViews);
    };

    useEffect(() => {
        const storedViews = JSON.parse(localStorage.getItem("views"));
        if (storedViews) {
            setViewsInfo(storedViews);
            return
        } 
        
        initViews();
    }, []);

    const handleViewUpdate = (title) => {
        const updatedViews = viewsInfo.map((book) => 
            book.title === title ? { ...book, views: book.views + 1 } : book
        );
        setViewsInfo(updatedViews);
        localStorage.setItem("views", JSON.stringify(updatedViews));
    };

    const visibleBooks = data.filter((dataBook) => {
        const bookTitle = dataBook.title.toLowerCase();
        const searchTitle = filter.toLowerCase();
        return bookTitle.includes(searchTitle);
    });

    return (
        <ul className="flex flex-col items-center justify-center gap-2.5">
            {visibleBooks.map((dataBook) => {
                const bookViews = viewsInfo.find(({ title }) => title === dataBook.title)?.views || 0;

                return (
                    <InView
                        key={dataBook.id}
                        as="li"
                        onChange={(inView) => {
                            if (inView) {
                                handleViewUpdate(dataBook.title);
                            }
                        }}
                    >
                        <BookItem dataBook={dataBook} views={bookViews} />
                    </InView>
                );
            })}
        </ul>
    );
};

export default BookList;
