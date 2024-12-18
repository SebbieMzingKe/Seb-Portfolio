import logo from "../assets/sclogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a
          href="https://www.linkedin.com/in/sebbie-evayo/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
        <FaLinkedin/>
        </a>
        <a
          href="https://github.com/SebbieMzingKe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
        <FaGithub/>
        </a>
        <a
          href="https://x.com/SebbieMzing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
        <FaSquareXTwitter/>
        </a>
        <a
          href="https://www.instagram.com/i.m_sebbie_evayo/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
        <FaInstagram/>
        </a>

      </div>
    </nav>
  )
}

export default Navbar
