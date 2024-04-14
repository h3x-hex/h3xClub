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
    <section className="w-full bg-black relative ">
      <div className="h-5/6 w-full screen-max-width flex-center flex">
        <div className="w-full video-container">
          <video autoPlay loop muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero