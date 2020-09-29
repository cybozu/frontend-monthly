import { withPrefix } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const Component = ({ member: {　name, link }, className }) => {
  return (
    <div className={`${className}`}>
      <img
        src={withPrefix(`/img/${name}.jpg`)}
        className="thumbnail"
        alt={name}
      />
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </div>
  )
}

const StyledComponent = styled(Component)`
  box-sizing: border-box;
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  margin: 15px;
  text-align: center;
  min-width: 105px;

  .thumbnail {
    max-width: 100px;
    height: auto;
    border-radius: 50%;
    margin: 0 auto 5px;
  }
`

export const Member = StyledComponent
