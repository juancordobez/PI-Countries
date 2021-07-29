import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../actions";


export const Pagination = () => {
    const viewCountrys = useSelector(state => state.viewCountrys)

    const [actualPage, setActualPage] = useState(1);
    const [maxPage, setMaxPage] = useState(Math.ceil(viewCountrys.length/10))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( setPage(actualPage))
        
    }, [actualPage, dispatch])
    
    useEffect(() => {
        setActualPage(1)
        setMaxPage(Math.ceil(viewCountrys.length/10))
    }, [viewCountrys])

    const next = () => setActualPage(actualPage+1)
    const back = () => setActualPage(actualPage-1)


    return (
        <div className='row pag'>

            {actualPage !== 1 ? <button className='btn' onClick={() => setActualPage(1) } >1</button> : null}

            {actualPage > 1 ? <button className='btn' onClick={back} >{'<'}</button> : null }
            {/* {actualPage < 2 ? null :<button className='btn' onClick={back} >{actualPage-1}</button>} */}

            <button disabled={true} className='btn'>{actualPage}</button>

            {/* {actualPage === 1 ? null :<button className='btn' onClick={next} >{actualPage+1}</button>} */}
            {actualPage < maxPage ? <button className='btn' onClick={next} >{'>'}</button> : null}
            
            {actualPage < maxPage ? <button className='btn' onClick={ ()=> setActualPage(maxPage) } >{maxPage}</button> : null }

        </div>
    )
}
