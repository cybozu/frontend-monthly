import React from "react";
import { css } from "@emotion/css";
import { Frontmatter } from "../types";

export const Attendees = ({ members, guest }: Frontmatter) => {
  return (
    <>
      <h2>メンバー</h2>
      <div className={style}>
        {members.map((member) => (
          // <Member key={member.name} member={member} />
          <div key={member.name}>{member.name}</div>
        ))}
      </div>
      {guest?.length && (
        <>
          <h2>ゲスト</h2>
          <div className={style}>
            {guest.map((guest) => (
              <div key={guest.name}>{guest.name}</div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

const style = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 24px 12px;
  padding: 12px;
`;
