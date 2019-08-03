import React from "react"

const ExternalLink = ({ children, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">{children}</a>
)

export default ExternalLink