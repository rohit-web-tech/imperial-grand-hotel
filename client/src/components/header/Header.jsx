import React, { useEffect, useState } from 'react'
import ContentWrapper from '../content-wrapper/ContentWrapper';
import logo from '../../assets';
import "./styles.css";
import Navbar from './navbar/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isAddBg,setIsAddBg] = useState(false);

    useEffect(()=>{
        document.addEventListener("scroll",handleReadScreenScroll);
    },[]);

    function handleReadScreenScroll(){
        const fromTop = window.scrollY;
        if (fromTop > 100) {
            setIsAddBg(true);
        }else {
            setIsAddBg(false);
        }
    }

    return (
        <header
            id="header"
            className={isAddBg?"bg-show":"bg-hidden"}
        >
            <ContentWrapper>
                <div
                    className='header-wrapper'
                >
                    <div className="logo">
                        <Link
                            to="/"
                        >
                            <img
                                src={logo}
                                alt=""
                            />
                        </Link>
                    </div>
                    <Navbar />
                </div>
            </ContentWrapper>
        </header>
    )
}

export default Header;