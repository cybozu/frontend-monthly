import React from "react";
import { css } from "@emotion/css";

export const StreamView = ({ streamUrl }: { streamUrl: string }) => {
  const isYouTube = /youtube\.com/.test(streamUrl);
  const embedUrl = isYouTube ? streamUrl.replace("watch?v=", "embed/") : "";
  return (
    <p className={style}>
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
  );
};

const style = css`
  .embed {
    display: block;
    max-width: 100%;
    max-height: 280px;
  }
`;
