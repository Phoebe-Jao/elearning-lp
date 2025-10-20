import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-full max-h-21 bg-blue-900 flex items-center overflow-hidden z-10">
      <div className="w-full max-w-4/5 mx-auto flex justify-between max-sm:max-w-full max-sm:px-[0.5rem]">
        <div className="flex items-center gap-2 max-sm:gap-0.5">
          <img src={logo} alt="" className="w-full max-w-16" />
          <div className="pt-4">
            <h1 className="font-logo text-accent leading-3 text-shadow-2xs text-shadow-orange-500 max-sm:text-[1rem] max-sm:pb-1">ENLITE ACADEMY</h1>
            <p className="font-display text-[0.7rem] text-blue-500 font-medium text-shadow-2xs text-shadow-blue-700 max-sm:text-[0.6rem] max-sm:max-w-4/5 max-sm:leading-2.5">Grow your skills, Anywhere.</p>
          </div>
        </div>
        <div className="bg-accent px-2 py-1.5 max-sm:py-0 max-sm:max-h-[4rem] max-sm:flex max-sm:flex-col max-sm:justify-center rounded-[6px] shadow-sm shadow-orange-300/70 text-right">
          <h2 className="font-heading text-4xl max-sm:text-2xl text-blue-700 leading-[0.8] pb-1">
            <FontAwesomeIcon icon={faPhone} className="text-[1.8rem] max-sm:text-[1.2rem]" />
            <span className="pl-1">012-345-6789</span>
          </h2>
          <p className="font-display text-[1rem] max-sm:text-[0.9rem] text-blue-700 font-medium leading-[0.9]">9:00AM - 6:00PM <span className="text-[0.85rem] max-sm:text-[0.8rem]">(Weekdays)</span></p>
        </div>
      </div>
    </header>
  )
}

export default Header;