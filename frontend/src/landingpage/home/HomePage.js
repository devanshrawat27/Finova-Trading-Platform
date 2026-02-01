import React from 'react';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './States';

import OpenAcount from '../OpenAccount';


function HomePage() {
    return ( 
          <>
         
           <Hero/>
           <Awards/>
           <Stats/>
           <Pricing/>
           <Education/>
            <OpenAcount/>
            
          </>
     );
}


export default HomePage;