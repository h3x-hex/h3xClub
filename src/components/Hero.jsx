import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(heroVideo)

  const handleVideoSrcSet = () => {
    
    setVideoSrc(heroVideo)
    
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="max-w-screen-xl bg-black relative ">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="md:w-full w-full">
          <video className="pointer-events-none" autoPlay loop muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero