'use client'
import Particles from 'react-tsparticles'
import {particlesConfig} from '@/components/particles-config'

const ParticlesBackground = () => {
    return (
        <Particles params={particlesConfig}></Particles>
      )
}

export default ParticlesBackground