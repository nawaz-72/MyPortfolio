import {Particles} from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, {useCallback} from 'react';

const ParticlesContainer = () => {
  const particleInit = useCallback(
    async(engine) => {
      await loadFull(engine)
    },
    [],
  );

  const particlesLoaded = useCallback(async () => {},[]);
  
  return <Particles 
  className='w-full h-full absolute trasnlate-z-0'
    id='tsparticles' init={particleInit} loaded={particlesLoaded}
    options={{
      fullScreen: {
        enable: true
      },
      background: {
        color: {
          value: ""
        }
      },
      fps_limit: 120,
      interactivity: {
        events:{
          onClick:{
            enable: false,
            mode:'push',
          },
          onHover: {
            enable : true,
            mode : "repulse"
          }, 
          resize : true,
        },
        modes: {
          push: {
            quantity: 60
          },
          repulse: {
            distance: 150,
            duration: 0.3,
          },
        }
      },
      particles: {
        color: {
          value: "#df2935",
        },
        links :{
          color: "#f5d393",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          directions: 'none',
          enable: true,
          outMode: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.4,
        },
        shape:{
          type: 'circle'
        },
        size: {
          value: {min:1, max: 4}
        },
      },
      detectRetina: true,
      

    }}
  />
};

export default ParticlesContainer;
