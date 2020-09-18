import styled from "@emotion/styled"
import React, { useEffect, useRef } from "react"

const slideUrl = "https://speakerdeck.com/cybozuinsideout/frontendexpert-team"
const slideId = "0efec8a9dd224baebfb2aaf30fbe9a28"

const Component = ({ className }) => {
  const ref = useRef()
  useEffect(() => {
    const script = document.createElement("script")
    script.setAttribute("data-id", slideId)
    script.setAttribute("data-ratio", "1.33333333333333")
    script.setAttribute("src", "//speakerdeck.com/assets/embed.js")
    script.setAttribute("class", "speakerdeck-embed")
    ref.current.appendChild(script)
  }, [])

  return (
    <>
      <h2>チームについて</h2>
      <div ref={ref} className={className} />
      <p>
        <a href={slideUrl} target="_blank" rel="nofollow noopener noreferrer">
          {slideUrl}
        </a>
      </p>
    </>
  )
}

const StyledComponent = styled(Component)`
  padding: 20px;
`

export const TeamIntroduceSlide = StyledComponent
