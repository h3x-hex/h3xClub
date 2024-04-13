import { logo } from '../utils';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width z-10">
        <img src={logo} alt="Apple" width={48} height={48} />
        <div className="flex flex-1 justify-center mr-10">
          <p id="hero" className="hero-title">h</p><p id="hero" className='title-span'>3</p><p id="hero" className="hero-title">x </p>&nbsp; &nbsp;<p id="hero" className='title-line' >|</p> &nbsp;&nbsp;<p id="hero" className="title-span"> Club </p>
        </div>
      </nav>
    </header>
  )
}

export default Navbar