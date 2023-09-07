'use client'
import React, { useCallback } from 'react'
import {loadFull} from 'tsparticles'
import  Particles  from 'react-tsparticles'
import particlesConfig from './particles-config'

const ParticlesContainer = () => {

    const particlesInit = useCallback(async (engine) => {
         await loadFull(engine);
    }, []);

    const particleLoaded = useCallback(async () => {
    }, [])

  return (
      <Particles
        className='absolute w-full h-full z-0'
        id='tsparticles' 
        init={particlesInit} 
        loaded={particleLoaded}
        options={particlesConfig}
      />
  )
}

export default ParticlesContainer



{/* <Particles
        className='w-full h-full absolute translate-z-0' 
        id='tsparticles' 
        init={particlesInit} 
        loaded={particleLoaded}
        options={{
          fullScreen: {enable:true},
          background: {
            color: {
              value: "",
            },
            fpsLimit: 120,
            interactivity: {
              events:{
                onClick:{
                  enable: false,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 90
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#e68e2e',
              },
              links: {
                color: '#f5d393',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: 'none',
                enable: true,
                outModes: {
                  default: 'bounce'
                },
                random: false,
                speed: 1,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 80
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: {min: 1, max: 5},
              },
            },
            detectRetina: true,
          }
        }}
      /> */}