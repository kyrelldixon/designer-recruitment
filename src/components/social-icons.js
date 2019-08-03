import React from "react"
import SocialIcon from "./social-icon"

const SocialIcons = () => (
  <ul className="social-icons">
    <li><SocialIcon name="Twitter" url="https://www.twitter.com/kyrelldixon" /></li>
    <li><SocialIcon name="Instagram" url="https://www.instagram.com/kyrell.dixon" /></li>
    <li><SocialIcon name="GitHub" url="https://www.github.com/kyrelldixon/designer-recruitment" /></li>
    <li><SocialIcon name="Mail" url="mailto:kyrell@kyrelldixon.com" /></li>
  </ul>
)

export default SocialIcons;