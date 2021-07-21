import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../actions";


export const Pagination = () => {
    const allCountrys = useSelector(state => state.allCountrys)

    const [actualPage, setActualPage] = useState(1);
    const [maxPage, setMaxPage] = useState(Math.ceil(allCountrys.length/10))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( setPage(actualPage))
        
    }, [actualPage, dispatch])
    
    useEffect(() => {
        setActualPage(1)
        setMaxPage(Math.ceil(allCountrys.length/10))
    }, [allCountrys])

    const next = () => setActualPage(actualPage+1)
    const back = () => setActualPage(actualPage-1)


    return (
        <div>

            {actualPage !== 1 ? <button onClick={() => setActualPage(1) } >1</button> : null}

            {actualPage > 1 ? <button onClick={back} >{'<'}</button> : null }
            {/* {actualPage < 2 ? null :<button onClick={back} >{actualPage-1}</button>} */}

            <button disabled={true} >{actualPage}</button>

            {/* {actualPage === 1 ? null :<button onClick={next} >{actualPage+1}</button>} */}
            {actualPage < maxPage ? <button onClick={next} >{'>'}</button> : null}
            
            {actualPage !== maxPage ? <button onClick={ ()=> setActualPage(maxPage) } >{maxPage}</button> : null }

        </div>
    )
}
