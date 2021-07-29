import React from 'react'
import { useSelector } from 'react-redux'

export const Spin = () => {
    const loading = useSelector(state => state.loading)
    return (
        <>
        {
            loading ?
            <div className='spin'>
            </div> 
            :
            null
        }
        </>
    )
}
