import { withPrefix } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const Component = ({ members, guest, className }) => {
  return (
    <>
      <h2>チーム紹介</h2>
      <div className={`${className} members`}>
        {members.map(({ name, link }) => (
          <div key={name} className="member">
            <img
              src={withPrefix(`/img/${name}.jpg`)}
              className="thumbnail"
              alt={name}
            />
            <a href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </div>
        ))}
      </div>
      {guest && guest.length && (
        <>
          <h2>ゲスト</h2>
          <ul>
            {guest.map(({ name, link, comment }) => (
              <li key={name}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;

  .member {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    max-width: 25%;
    margin: 15px;
    text-align: center;
  }
  .thumbnail {
    max-width: 100px;
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin: 0 auto 5px;
  }
`

export const TeamMembers = StyledComponent
