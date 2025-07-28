import React from 'react'
import "./styles.css";
import ContentWrapper from '../content-wrapper/ContentWrapper';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets';
import { ChevronRight, Facebook, Globe, Icon, Instagram, Twitter } from 'lucide-react';

const Footer = () => {

    const LINKS = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Services",
            link: "/services"
        },
        {
            title: "Room",
            link: "/rooms"
        },
    ]

    const ICONS = [
        {
            icon: <Twitter />,
            link: "/"
        },
        {
            icon: <Facebook />,
            link: "/"
        },
        {
            icon: <Instagram />,
            link: "/"
        },
        {
            icon: <Globe />,
            link: "/"
        },
    ]

    const Icon = ({ icon }) => (
        <Link
            className='icon-wrapper'
            to={icon?.link}
        >
            {icon?.icon}
        </Link>
    )

    return (
        <footer>
            <ContentWrapper>
                <div
                    className='footer-wrapper'
                >
                    <div
                        className='top'
                    >
                        <div>
                            <Link
                                to="/"
                            >
                                <img className='logo' src={logo} alt="Logo" />
                            </Link>
                            <div
                                className='para'
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique perspiciatis voluptates soluta, veritatis voluptatibus totam vitae.
                            </div>
                        </div>
                        <div
                            className='links'
                        >
                            <div
                                className="links-wrapper"
                            >
                                <div
                                    className='sub-head'
                                >USEFUL LINKS</div>
                                <ul>
                                    {
                                        LINKS?.map((link, index) => (
                                            <li
                                                key={index}
                                            >
                                                <NavLink
                                                    to={link?.link}
                                                    className={({isActive})=> isActive ? "active" : ""}
                                                >
                                                    {link?.title}
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div
                            className='subscription'
                        >
                            <div
                                className='sub-head'
                            >SUBSCRIBE</div>
                            <div className='para'>Don't miss to subscribe our news, kindly fill the form below</div>
                            <form>
                                <input type="email" placeholder='Your Email Here' required={true} />
                                <button type="submit">
                                    <ChevronRight />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div
                        className='mid'
                    >
                        <div className='line'></div>
                        <div
                            className='icons-container'
                        >
                            {
                                ICONS?.map((icon, index) => (
                                    <Icon key={index} icon={icon} />
                                ))
                            }
                        </div>
                        <div className='line'></div>
                    </div>
                    <div
                        className='bottom'
                    >
                        <div>
                            &copy; 2025 Imperial Grand Hotel. All Rights Reserved.
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-use">Terms of Use</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </footer>
    )
}

export default Footer;