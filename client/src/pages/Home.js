import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import InfoSection from '../components/InfoSection/InfoSection';


function Home() {
  return (
    <>
      <InfoSection className="bgimg" {...homeObjOne} />
     
    </>
  );
}

export default Home;

