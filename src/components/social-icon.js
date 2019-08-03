import React from "react"

const SocialIcon = ({ name, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
)

export default SocialIcon