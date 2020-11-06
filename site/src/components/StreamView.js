import React from "react"
import styled from "@emotion/styled"

const Component = ({ streamUrl, className }) => {
  const isYouTube = /youtube\.com/.test(streamUrl)
  const embedUrl = isYouTube ? streamUrl.replace("watch?v=", "embed/") : ""
  return (
    <p className={className}>
      {embedUrl && (
        <iframe
          title={embedUrl}
          width="560"
          height="315"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="embed"
        />
      )}

      <a href={streamUrl} target="_blank" rel="noreferrer noopner">
        {streamUrl}
      </a>
    </p>
  )
}

const StyledComponent = styled(Component)`
  .embed {
    display: block;
    max-width: 100%;
    max-height: 280px;
  }
`
export const StreamView = StyledComponent
