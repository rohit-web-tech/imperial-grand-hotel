import React from 'react'
import "./styles.css";
import ContentWrapper from '../content-wrapper/ContentWrapper';
import Heading from '../heading/Heading';
import { BookImageIcon, Dumbbell, Coffee, CoffeeIcon } from 'lucide-react';
import SecondaryBtn from '../button/SecondaryBtn';
import MainBtn from '../button/MainBtn';

const AmenityCard = (props) => {
    return (
        <div className={`amenity-card ${props?.even ? "left" : "right"}`}>
            <div className="icon">{props?.icon}</div>
            <h3 className="title">{props?.title}</h3>
            <p className="desc">{props?.description}</p>
            <div className={`discover-btn ${props?.even ? "right" : "left"}`}>
                <MainBtn
                    title="Discover Now"
                    className='gold'
                />
            </div>
        </div>
    );
};

const Aminities = () => {

    const AMINITIES_DATA = [
        {
            icon: <Dumbbell/>,
            title: "Workout & Yoga Resorts",
            description:
                "Enjoy yoga and fitness zones in a relaxing atmosphere with sea view or open-air studio setups."
        },
        {
            icon: <BookImageIcon/>,
            title: "Spa, Massage & Sauna",
            description:
                "Rejuvenate your body and mind with a variety of wellness treatments offered by trained professionals."
        },
        {
            icon: <Coffee/>,
            title: "Multiple Cuisines & Beverages",
            description:
                "Savor a mix of local and international delicacies prepared by our expert chefs."
        },
        {
            icon: <CoffeeIcon/>,
            title: "Premium Lounge Bar",
            description:
                "Unwind with exclusive wines, signature cocktails, and live music at our stylish lounge."
        }
    ];

    return (
        <div
            id='aminities'
        >
            <ContentWrapper>
                <div className="aminities">
                    <div className="aminities-heading-wrapper">
                        <Heading
                            title="Aminities That You Can Enjoy"
                            subtitle="INTRODUCING OUR SERVICES"
                            className='left'
                        />
                        <div className="para">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="amenities-grid">
                        {AMINITIES_DATA?.map((amenity, index) => (
                            <React.Fragment key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <div className="placeholder" />
                                        <AmenityCard {...amenity} even={true} />
                                    </>
                                ) : (
                                    <>
                                        <AmenityCard {...amenity} even={false} />
                                        <div className="placeholder" />
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Aminities;