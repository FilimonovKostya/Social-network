import style from "../Users.module.css";
import React, {useState} from "react";

type PaginatorPropsType = {
    totalCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}
const Paginator = ({totalCount, currentPage, setCurrentPage}: PaginatorPropsType) => {


    let pagesCount = Math.ceil(totalCount / 10)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / 10)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * 10 + 1
    let rightPortionPageNumber = portionNumber * 10

    return <>
        {
            portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>
        }


        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(el => {
                return <span className={el === currentPage ? style.active : ''}
                             key={el}
                             onClick={() => setCurrentPage(el)}>{el}</span>
            })}
        {
            portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>
        }
    </>
}

export default Paginator
