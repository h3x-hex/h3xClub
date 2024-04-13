import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { hexship1, hexship2, hexship3, hexship4 } from '../utils';
import gsap from 'gsap';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

    animateWithGsap('#features_title', { y:0, opacity:1})
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);

  return (
    <section className="h-full common-padding bg-stars relative overflow-hidden">
      <div className="screen-max-wdith">
        
        
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 pl-24 flex flex-nowrap">
            <h2 className="text-5xl lg:text-7xl font-semibold">h</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold text-yellow-600">3</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">xShip.</h2>
          </div>
          <div className="mb-24 pl-24 flex flex-nowrap">
            <h2 className="text-5xl lg:text-7xl font-semibold">Powered by h</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold text-yellow-600">3</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">xCore.</h2>
          </div>
            
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[80vh] w-full flex items-center">
              <div className="overflow-hidden flex-1 h-[80vh]">
                  <img src={hexship1} alt="titanium" className="feature-video g_grow" />
              </div>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={hexship2} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={hexship3} alt="titanium 2" className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="">
                  <p className="feature-text g_text">
                    H
                    <span className="text-yellow-600">
                      3
                    </span>
                    xShip powered by h
                    <span className="text-yellow-600">
                      3
                    </span>
                    xCore is the first of its kind to traverse through the h
                    <span className="text-yellow-600">
                      3
                    </span>
                    xav
                    <span className="text-yellow-600">
                      3
                    </span>
                    rse. 
                    <br></br>
                    Collect and store your h
                    <span className="text-yellow-600">
                      3
                    </span>
                    xArt
                    <span className="text-yellow-600">
                      3
                    </span>
                    facts, Wh
                    <span className="text-yellow-600">
                      33
                    </span>
                    ls and weapons in the garage.
                    <br></br>
                    Personalize your ship with a variety of art and furniture from h
                    <span className="text-yellow-600">
                      3
                    </span>
                    xColl
                    <span className="text-yellow-600">
                      3
                    </span>
                    ction and h
                    <span className="text-yellow-600">
                      3
                    </span>
                    xCatalogu
                    <span className="text-yellow-600">
                      3
                    </span>.
                    <br></br>
                    Claim your own h
                    <span className="text-yellow-600">
                      3
                    </span>
                    xShip with h
                    <span className="text-yellow-600">
                      3
                    </span>
                    xK
                    <span className="text-yellow-600">
                      3
                    </span>
                    y. 
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features