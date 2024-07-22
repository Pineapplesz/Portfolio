import logo from "../assets/DILogo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="">
          <img className="mx-2 w-12" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/daniil-ihnatenko-b28a91255/"
        >
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/Pineapplesz/">
          <FaGithub />
        </a>
        <a target="_blank" href="https://leetcode.com/u/Pineapplesz/">
          <SiLeetcode />
        </a>
        <a target="_blank" href="https://t.me/Kus_Krya_Meow">
          <FaTelegram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
