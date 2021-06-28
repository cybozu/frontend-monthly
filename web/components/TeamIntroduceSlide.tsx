import React, { useEffect, useRef } from "react";
import { css } from "@emotion/css";

const slideUrl = "https://speakerdeck.com/cybozuinsideout/frontendexpert-team";
const slideId = "0efec8a9dd224baebfb2aaf30fbe9a28";

export const TeamIntroduceSlide = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const script = document.createElement("script");
      script.setAttribute("data-id", slideId);
      script.setAttribute("data-ratio", "1.33333333333333");
      script.setAttribute("src", "//speakerdeck.com/assets/embed.js");
      script.setAttribute("class", "speakerdeck-embed");
      ref.current.appendChild(script);
    }
  }, []);

  return (
    <>
      <h2>フロントエンドエキスパートチームについて</h2>
      <div ref={ref} className={style} />
      <p style={{ marginBottom: 0 }}>
        <a href={slideUrl} target="_blank" rel="nofollow noopener noreferrer">
          {slideUrl}
        </a>
      </p>
    </>
  );
};

const style = css`
  padding: 20px;
`;
