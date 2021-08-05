import React from 'react';
import { homeObjOne } from './Data';
import InfoSection from '../components/InfoSection/InfoSection';


function Home() {
  return (
    <>
      <InfoSection className="bgimg" {...homeObjOne} />
     
    </>
  );
}

export default Home;

