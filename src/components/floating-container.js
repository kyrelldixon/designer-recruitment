import React from "react"
import Title from "./title"
import Subtitle from "./subtitle"
import SocialIcon from "./social-icon"

const FloatingContainer = () => (
  <div>
    <Title />
    <Subtitle />
    <SocialIcon name="Twitter" url="https://www.twitter.com/kyrelldixon" />
    <SocialIcon name="Instagram" url="https://www.instagram.com/kyrell.dixon" />
    <SocialIcon name="GitHub" url="https://www.github.com/kyrelldixon/designer-recruitment" />
    <SocialIcon name="Mail" url="mailto:kyrell@kyrelldixon.com" />
  </div>
)

export default FloatingContainer