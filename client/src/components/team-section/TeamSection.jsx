import React from 'react';
import './styles.css';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContentWrapper from '../content-wrapper/ContentWrapper';
import Heading from '../heading/Heading';

const TeamCard = ({ name, role, image }) => {
    return (
        <div className="team-card">
            <div className="image-wrapper">
                <div src={image} alt={name} className="team-img" />
                <div className="overlay">
                    <div
                        className='icons-container'
                    >
                        <Link
                            className='icon-wrapper'
                            to={"/"}
                        >
                            <Twitter />
                        </Link>
                        <Link
                            className='icon-wrapper'
                            to={"/"}
                        >
                            <Facebook />
                        </Link>
                        <Link
                            className='icon-wrapper'
                            to={"/"}
                        >
                            <Instagram />
                        </Link>

                    </div>
                </div>
            </div>
            <div className="team-info">
                <h4>{name}</h4>
                <p>{role}</p>
            </div>
        </div>
    );
};

const teamData = [
    {
        name: "Laurent Wayne",
        role: "Hotel Manager",
        image: "https://via.placeholder.com/200x250",
    },
    {
        name: "Josh Mullins",
        role: "Kitchen Manager",
        image: "https://via.placeholder.com/200x250",
    },
    {
        name: "Andrea Hugh",
        role: "Recepcionista",
        image: "https://via.placeholder.com/200x250",
    },
    {
        name: "James Norman",
        role: "Room Service",
        image: "https://via.placeholder.com/200x250",
    },
];

const TeamSection = () => {
    return (
        <div id="team-section">
            <ContentWrapper>
                <Heading
                    title="Expert Team Persons"
                    subtitle="MEET OUR TEAM"
                />
                <div className="team-section">
                    {teamData.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>
            </ContentWrapper>
        </div>
    );
};

export default TeamSection;
