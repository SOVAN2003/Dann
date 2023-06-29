import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { styles } from "../utils/styles";

import { eth } from '../assets';
import {CustomButton } from '../components';
import {useNavigate} from 'react-router-dom';

const Img = styled.img`
  width:1000px;
  height: 700px;
  object-fit: contain;
  position: absolute;
  top:0;
  bottom: 0;
  left : 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate{
    to{
      transform : translateY(25px);
    }
  }
`;


const Section = styled.div`
  height : 100vh; 
  scroll-snap-align: center;
  display: flex;
  flex-direction : column;
  align-items: center;
  justify-content: space-between;

  
  @media only screen and (max-width: 768px) {
    height: 130vh;
  }

`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  width: 1200px;
  display : flex;
  justify-content : space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex:2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    padding: 30px;
  }
`;

const Right = styled.div`
  flex:2;
  position:relative;

  @media only screen and (max-width: 768px) {
    gap: 20px;
    flex: 1;
    width: 60%;
  }
`;

function Model(props) {
  const { scene } = useGLTF("../logo.glb");
  return <primitive object={scene} {...props} />
}

function Welcome() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/home');
  };

  return (
    <Section>
     <Container>
        <Left>
        <div
          className={`absolute inset-0 top-[220px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
          >
            <div className='flex flex-col justify-center items-center mt-5'>
              {/* <div className='w-5 h-5 rounded-full bg-[#915EFF]' /> */}
             
            </div>

           <div className='mx-5'>
             <h1 className={`${styles.heroHeadText} heading `}>
             Welcome to <span className="text-[#14FFEC]"> Dann</span>
              <br/>
              <span className="text-[#14FFEC] text-[25px]">
                 Feel free to explore and help others because, 
              </span>
              </h1>
             <p className={`${styles.heroSubText} mt-0 text-white-100`}> 
                The meaning of life is to find your gift. The purpose of life is to give it away.-Picasso      
              </p>

              <div className='my-8'>
              <CustomButton 
                btnType="button"
                title="Fund Campaign"
                styles="w-60ox bg-[#0D7377]"
                handleClick={navigateHome}
              />
            </div> 

            </div>
        </div>
                                
        </Left>

        <Right>
        <Img src={eth} /> 
        </Right>

     </Container>
     </Section>
    
  );
}

export default Welcome