import React from 'react'
import HeroBanner from '../components/hero-banner/HeroBanner';
import Rooms from '../components/rooms/Rooms';
import Aminities from '../components/aminities/Aminities';
import ClientsSection from '../components/clients-section/ClientsSection';
import TeamSection from '../components/team-section/TeamSection';

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <Rooms/>
      <Aminities/>
      <ClientsSection/>
      <TeamSection/>
    </>
  )
}

export default Home;