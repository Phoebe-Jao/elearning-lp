import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-4">
      <div className="flex justify-center items-center gap-2 pt-5 pb-3 max-sm:py-2">
        <a href="https://github.com/Phoebe-Jao" className="hover:opacity-50 transition-opacity duration-500">
          <FontAwesomeIcon icon={faGithub} className="text-white text-[1.8rem] max-sm:text-[1.2rem]" />
        </a>
        <a href="https://www.linkedin.com/in/phoebe-jao-2b1548195" className="hover:opacity-50 transition-opacity duration-500">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-[1.8rem] max-sm:text-[1.2rem]" />
        </a>
      </div>
      <p className="text-[0.8rem] text-center text-white">&copy; Enlite Academy 2025</p>
    </footer>
  )
}

export default Footer;