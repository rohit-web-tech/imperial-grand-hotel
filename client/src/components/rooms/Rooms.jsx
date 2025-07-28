import React from 'react'
import "./styles.css";
import Heading from '../heading/Heading';
import ContentWrapper from '../content-wrapper/ContentWrapper';
import SecondaryBtn from '../button/SecondaryBtn';
import { Bath, Tv, Wifi } from 'lucide-react';

const RoomCard = ({ title, price, icons }) => (
  <div className={`room-card`}>
    <div className="room-content">
      <div className="room-title">{title}</div>
      <div className="room-price">{price}</div>
      <div className="highlight-info">
        <div className="book-btn">
          <SecondaryBtn
            title="Book Now"
            className='gold'
          />
        </div>
        <div className="icons">
          {icons?.map((icon, i) => (
            <span key={i}>{icon}</span>
          ))}
        </div>
      </div>
      <div className="underline" />
    </div>
  </div>
);

const Rooms = () => {

  const rooms = [
    {
      title: "Superior Suite",
      price: "$300/Night",
      icons: [<Wifi/>,<Bath/>,<Tv/>]
    },
    {
      title: "Junior Suite",
      price: "$270/Night",
      icons: [<Wifi/>,<Bath/>,<Tv/>]
    },
    {
      title: "Deluxe Room",
      price: "$210/Night",
      icons: [<Wifi/>,<Bath/>,<Tv/>]
    },
    {
      title: "Double Room",
      price: "$180/Night",
      icons: [<Wifi/>,<Bath/>,<Tv/>]
    },
    {
      title: "Family Room",
      price: "$150/Night",
      icons: [<Wifi/>,<Bath/>,<Tv/>]
    }
  ];

  return (
    <div
      id='rooms'
    >
      <ContentWrapper>
        <Heading
          title="Luxury Rooms & Suites"
          subtitle="OUR ROOM CHOICES"
        />
        <div className="room-wrapper">
          <div className="room-row">
            {rooms.slice(0, 2).map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>

          <div className="room-row">
            {rooms.slice(2).map((room, index) => (
              <RoomCard key={index + 2} {...room} />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
};

export default Rooms