"use client"

import React,{useState} from 'react'
import './themetoggle.css'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme=()=>{
            setIsDarkMode(!isDarkMode);
    }

    return (
        <>
            <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
                <div className='container'>
                    <div>ThemeToggle</div>

                    <div className='toggle-container'>
                        <div className='toggle-button' onClick={toggleTheme}>
                            <div className={`toggle-slider' ${isDarkMode ? 'dark' : 'light'}`}>
                                <div className='toggle-circle'>
                                    {isDarkMode ? '🌙' : '☀️'}
                                </div>
                            </div>
                            <span className='toggle-label'>
                                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                            </span>
                        </div>
                    </div>
                    <p>iebefji weoe fuihweoidh ui hdihqwoiwh dfjisah uidfh uish donhqwuijh fji  sbui fbuisa huifhjuissfi hdsuidh fji  sauhf jih uifh uish fuiswh uif</p>
                </div>
            </div>
        </>
    )
}

export default ThemeToggle

