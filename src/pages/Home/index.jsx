import React from 'react';
import ComputerIlustration from '../../components/ComputerIlustration';
import HireButton from '../../components/HireButton';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <section className="hero">
        <div className="heroTitle">
          <h1>Quality for Cheap.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    
          <HireButton href="https://github.com/ruymon"/>
        </div>

        <div className="ilustrationWrapper">
          <ComputerIlustration width="500"/>
        </div>
        

        {/* TODO - Down Arrow Position */}
        {/* <svg width="43" height="23" viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.2284 21.599L0.94764 7.45028C-0.31588 6.47235 -0.31588 4.89102 0.94764 3.9235L3.98546 1.57231C5.24898 0.594385 7.29212 0.594385 8.5422 1.57231L21.5 11.6013L34.4578 1.57231C35.7213 0.594385 37.7645 0.594385 39.0145 1.57231L42.0524 3.9235C43.3159 4.90143 43.3159 6.48276 42.0524 7.45028L23.7717 21.599C22.535 22.5769 20.4919 22.5769 19.2284 21.599Z" fill="#F79133"/>
        </svg> */}

      </section>


    </Container>
  );
}

export default Home;