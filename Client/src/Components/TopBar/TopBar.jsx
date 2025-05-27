import React from 'react'
import './TopBar.css';
const TopBar = () => {
    return (
        <div className='top-bar'>
            <div className='right-section'>
                <img src='/general/search.svg' alt='home' />
                <input placeholder='Search' type='text'></input>
            </div>
            {/* <div className='left-section'>
                <a href='' >
                    <img src='/general/noAvatar.png' alt='home' style={{ width: 24, height: 24 }} />
                </a>
            </div> */}
        </div>

    )
}

export default TopBar