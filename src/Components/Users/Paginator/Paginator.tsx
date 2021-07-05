import style from "../Users.module.css";
import React from "react";

type PaginatorPropsType = {
    totalCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}
const Paginator = ({totalCount, currentPage, setCurrentPage}: PaginatorPropsType) => {

    const pages = []
    for (let i = 1; i <= totalCount; i++) {
        pages.push(i)
    }

    return <>
        {pages.map((el, index) => <span className={el === currentPage ? style.active : ''}
                                        key={el}
                                        onClick={() => setCurrentPage(el)}>{el}</span>)}
    </>
}

export default Paginator
