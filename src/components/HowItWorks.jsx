import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo, hs } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="mb-60 w-full flex flex-nowrap">
            <h1 id="heading" className="section-heading">Sneak peek into h</h1>
            <h1 id="heading" className="section-color">3</h1>
            <h1 id="heading" className="section-heading">xav</h1>
            <h1 id="heading" className="section-color">3</h1>
            <h1 id="heading" className="section-heading">rse</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className='flex flex-nowrap'>
            <h2 className="hiw-title">
              h
            </h2>
            <h2 className="hiw-title text-yellow-600">
              3
            </h2>
            <h2 className="hiw-title">
              xStation
            </h2>
          </div>

          <p className="hiw-subtitle">
            Coming Soon...
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={hs}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
          </div>
          <div className='justify-center flex flex-nowrap'>
            <p className="font-semibold text-center mt-3">
              h
            </p>
            <p className="font-semibold text-center mt-3 text-yellow-600">
              3
            </p>
            <p className="font-semibold text-center mt-3">
              xStation
            </p>
          </div>
          <p className="text-gray font-semibold text-center mt-3"></p>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text">
                    
                    <span className="text-white">
                      
                    </span>
                  </p>

                  <p className="hiw-text">
                   Orbiting around Earth is the central hub of h
                    <span className="text-yellow-600">
                     3
                    </span>
                   xav
                    <span className="text-yellow-600">
                     3
                    </span>
                    rse the h
                    <span className="text-yellow-600">
                     3
                    </span>
                    xStation.
                    <br></br>
                    h
                    <span className="text-yellow-600">
                     3
                    </span>
                    xStation comes equipped with a central hub surrounded by 6 districts for its Marketplace, Events, Games, Communities and Guilds, h
                    <span className="text-yellow-600">
                     3
                    </span>
                    xShop and h
                    <span className="text-yellow-600">
                     3
                    </span>
                    xClub. 
                    <br></br>
                    h
                    <span className="text-yellow-600">
                     3
                    </span>
                    xStation is also equipped with luxurious rooms for its residents and visitors and a docking bay for h
                    <span className="text-yellow-600">
                     3
                    </span>
                    xShips and other spaceships.
                  </p>
                </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks