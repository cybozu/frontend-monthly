import React from "react"
import styled from "@emotion/styled"

import { Member } from "./Member"

const Component = ({ members, guest, className }) => {
  return (
    <>
      <h2>チーム紹介</h2>
      <div className={`${className} members`}>
        {members.map(member => (
          <Member key={member.name} member={member} />
        ))}
      </div>
      {guest && guest.length && (
        <>
          <h2>ゲスト</h2>
          <div className={`${className} members`}>
            {guest.map(guest => (
              <Member key={guest.name} member={guest} />
            ))}
          </div>
        </>
      )}
    </>
  )
}

const StyledComponent = styled(Component)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 24px 12px;
  padding: 12px;
`

export const TeamMembers = StyledComponent
