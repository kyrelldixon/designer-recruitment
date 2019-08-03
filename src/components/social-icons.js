import React from "react"
import ExternalLink from "./external-link"

const SocialIcons = () => (
  <ul className="social-icons">
    <li className="social-icon">
      <ExternalLink url="https://www.twitter.com/kyrelldixon">
        Twitter
      </ExternalLink>
    </li>
    <li className="social-icon">
      <ExternalLink url="https://www.instagram.com/kyrell.dixon">
        Instagram
      </ExternalLink>
    </li>
    <li className="social-icon">
      <ExternalLink url="https://www.github.com/kyrelldixon/designer-recruitment">
        GitHub
      </ExternalLink>
    </li>
    <li className="social-icon">
      <ExternalLink url="mailto:kyrell@kyrelldixon.com">
        Mail
      </ExternalLink>
    </li>
  </ul>
)

export default SocialIcons;