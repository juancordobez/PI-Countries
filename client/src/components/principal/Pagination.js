import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../actions";


export const Pagination = () => {
    const allCountrys = useSelector(state => state.allCountrys)

    const [numPage, setNumPage] = useState({
        actual: 1,
        max: allCountrys.length
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( setPage(numPage))
        
    }, [numPage, dispatch])
    
    useEffect(() => {
        setNumPage({
            actual: 1,
            max: allCountrys.length
        })
        
    }, [allCountrys])

    const next = () => setNumPage(numPage+1)
    const back = () => setNumPage(numPage-1)


    return (
        <div>
            {numPage.actual < 2 ? null : <button onClick={back} >back</button> }
            {numPage.actual = 1 ? null :<button onClick={(e)=> console.log(e.target.value)} >1</button>}
            <button onClick={(e)=> console.log(e.target.value)} >{numPage}</button>
            {numPage.actual = numPage.max ? null :<button onClick={(e)=> console.log(e.target.value)} >{numPage.max}</button>}

            {numPage.actual >= numPage.max ? null : <button onClick={next} >next</button> }
        </div>
    )
}
