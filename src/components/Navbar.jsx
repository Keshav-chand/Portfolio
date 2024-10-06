import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="  mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img src={logo} alt="logo" />
    </div>

    <div  className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href='https://github.com/Keshav-chand' target="_blank" rel="noopener noreferrer"><FaGithub  /></a>
      <a href='https://www.linkedin.com/in/keshav-chand-/' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href='https://x.com/Keshav_codes_' target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
        <a href='https://www.instagram.com/Keshav_ch_' target="_blank" rel="noopener noreferrer"><FaInstagram/></a>

    </div>

  </nav>


  );

};

export default Navbar

