import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"

import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-stars">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex justify-between items-end  flex ">
          <div className=" flex flex-nowrap">
            <h1 id="title" className="section-heading">Explore h</h1>
            <h1 id="title" className="section-color">3</h1>
            <h1 id="title" className="section-heading">x Coll</h1>
            <h1 id="title" className="section-color">3</h1>
            <h1 id="title" className="section-heading">ction</h1>
          </div>
          <div className="flex flex-wrap items-end gap-5">
            <a href="https://opensea.io/collection/g3n3sis-h3x" target="_blank" className="link">
              Explore Collection
              <img src={rightImg} alt="right" className="ml-2"/> 
            </a>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights