import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-full max-h-21 bg-blue-900 flex items-center overflow-hidden z-10">
      <div className="w-full max-w-4/5 mx-auto flex justify-between max-sm:max-w-full">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-full max-w-16" />
          <div className="pt-4">
            <h1 className="font-logo text-primary leading-3 text-shadow-2xs text-shadow-orange-500">ENLITE ACADEMY</h1>
            <p className="font-display text-[0.7rem] text-blue-500 font-medium text-shadow-2xs text-shadow-blue-700">Grow your skills, Anywhere.</p>
          </div>
        </div>
        <div className="bg-primary px-2 py-1.5 rounded-[6px] shadow-sm shadow-orange-300/70 text-right">
          <h2 className="font-heading text-4xl text-blue-700 leading-[0.8] pb-1">
            <FontAwesomeIcon icon={faPhone} className="text-[1.8rem]" />
            <span className="pl-1">012-345-6789</span>
          </h2>
          <p className="font-display text-[1rem] text-blue-700 font-medium leading-[0.9]">9:00AM - 6:00PM <span className="text-[0.85rem]">(Weekdays)</span></p>
        </div>
      </div>
    </header>
  )
}

export default Header;