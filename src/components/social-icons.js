import React from "react"
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import ExternalLink from "./external-link"

const SocialIcons = () => (
  <ul className="social-icons">
    <li className="social-icon">
      <ExternalLink url="https://www.twitter.com/kyrelldixon">
        <FaTwitter />
      </ExternalLink>
    </li>
    <li className="social-icon">
      <ExternalLink url="https://www.instagram.com/kyrell.dixon">
        <FaInstagram />
      </ExternalLink>
    </li>
    <li className="social-icon">
      <ExternalLink url="https://www.github.com/kyrelldixon/designer-recruitment">
        <FaGithub />
      </ExternalLink>
    </li>
    <li className="social-icon">
      <ExternalLink url="mailto:kyrell@kyrelldixon.com">
        <IoIosMail />
      </ExternalLink>
    </li>
  </ul>
)

export default SocialIcons;