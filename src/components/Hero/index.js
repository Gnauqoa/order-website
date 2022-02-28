import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Xin chào</HeroH1>
          <HeroP>Gọi món, xem hàng chờ Online</HeroP>
          <a href = "#menu"><HeroBtn >Đặt món</HeroBtn></a>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
