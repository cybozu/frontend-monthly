/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Frontmatter } from "../types";

export const Attendees = ({
  members,
  guest,
  membersPhotoUrl,
}: Frontmatter & { membersPhotoUrl: { [name: string]: string } }) => {
  return (
    <>
      <h2>メンバー</h2>
      <div css={style}>
        {members.map(({ name, link }) => (
          <div key={name} className="member">
            <img
              className="thumbnail"
              src={membersPhotoUrl[name]}
              width={100}
              height={100}
              alt=""
            />
            <a href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </div>
        ))}
      </div>
      {guest?.length && (
        <>
          <h2>ゲスト</h2>
          <div css={style}>
            {guest.map(({ name, link }) => (
              <div key={name} className="member">
                <img
                  className="thumbnail"
                  src={membersPhotoUrl[name]}
                  width={100}
                  height={100}
                  alt=""
                />
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </div>
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
  .member {
    text-align: center;
  }
  .thumbnail {
    border-radius: 50%;
    margin: 0 auto 5px;
  }
`;
