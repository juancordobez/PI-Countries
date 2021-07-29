import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'

export const Footer = () => {
    return (
        <nav className='footer row wrap'>

            <div className='row'>
                Juan Cordobez
            </div>

            <div className='row'>
                <a href='https://www.linkedin.com/in/juan-marcos-cordobez/' className='logo'><FaLinkedinIn/></a>
                <a href='https://github.com/juancordobez' className='logo'><AiOutlineGithub/></a>
            </div>

        </nav>
    )
}