import style from "../Users.module.css";
import React, {useState} from "react";

type PaginatorPropsType = {
    totalCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}
const Paginator = ({totalCount, currentPage, setCurrentPage}: PaginatorPropsType) => {


    const [portionNumber, setPortionNumber] = useState(Number(localStorage.getItem('portionNumber')) || 1)
    const leftPortionPageNumber = (portionNumber - 1) * 10 + 1
    const rightPortionPageNumber = portionNumber * 10
    const pagesCount = Math.ceil(totalCount / 10)
    const portionCount = Math.ceil(pagesCount / 10)

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    console.log('curerent page --->', currentPage)

    console.log('pages', pages)
    console.log('pagesCount', pagesCount)
    console.log('portionCount', portionCount)
    console.log('portionNumber', portionNumber)

    const savePlusPortionNumber = () => {
        const portion = portionNumber + 1
        setPortionNumber(portion)
        localStorage.setItem('portionNumber', portion.toString())
    }

    const saveMinusPortionNumber = () => {
        const portion = portionNumber - 1
        setPortionNumber(portion)
        localStorage.setItem('portionNumber', portion.toString())
    }

    const saveCurrentPage = (page: number) => {
        setCurrentPage(page)
        localStorage.setItem('currentPage', page.toString())
    }

    return <>

        {
            portionNumber > 1 && <button onClick={saveMinusPortionNumber}>PREV</button>
        }


        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(el => {
                return <span className={el === currentPage ? style.active : ''}
                             key={el}
                             onClick={() => saveCurrentPage(el)}>{el}</span>
            })}
        {
            portionCount > portionNumber && <button onClick={savePlusPortionNumber}>NEXT</button>
        }
    </>
}

export default Paginator
