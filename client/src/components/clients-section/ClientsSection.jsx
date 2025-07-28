import React, { useState, useEffect } from 'react';
import ContentWrapper from '../content-wrapper/ContentWrapper';
import Heading from '../heading/Heading';
import './styles.css';

const ClientCard = ({
    review,
    rating,
    name,
    role
}) => {

    return (
        <div
            className='client-card'
        >
            <div className="banner"></div>
            <div className="review-info">
                <div className="stars">
                    {
                        Array.from(rating).map(() => (
                            <Star
                                className='star'
                            />
                        ))
                    }
                </div>
                <div className="desc">
                    {review}
                </div>
                <div className="name">
                    {name}
                </div>
                <div className="role">
                    {role}
                </div>
            </div>
        </div>
    )
}

const REVIEWS_DATA = [
    {
        name: "Jackson Dean",
        role: "Guest",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        rating: 5,
    },
    {
        name: "John",
        role: "Guest",
        review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        rating: 4,
    },
    {
        name: "Dean",
        role: "Guest",
        review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        rating: 5,
    },
];

const ClientsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % REVIEWS_DATA.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="clients-section">
            <div className="bg">
                <ContentWrapper>
                    <div className="client-section">
                        <Heading
                            title="What Our Client Says"
                            subtitle="OUR CUSTOMER REVIEW"
                            blackBg={true}
                        />
                    </div>
                </ContentWrapper>
            </div>

            <ContentWrapper>
                <div className="reviews-slider-container">
                    <div
                        className="reviews-slider"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {REVIEWS_DATA.map((review, index) => (
                            <div className="slide" key={index}>
                                <ClientCard {...review} />
                            </div>
                        ))}
                    </div>
                    <div className="points">
                        {
                            REVIEWS_DATA?.map((_,index)=>(
                                <div key={index} className={`point ${currentIndex === index ? 'active' : ''}`} />
                            ))
                        }
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default ClientsSection;
