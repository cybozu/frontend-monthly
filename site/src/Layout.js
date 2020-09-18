import React from "react"
import styled from "@emotion/styled"
import { Head } from "./components/Head"

const Component = ({ className, title, children }) => (
  <div className={`${className} markdown-body`}>
    <Head title={title} />
    {children}
  </div>
)

const StyledComponent = styled(Component)`
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 15px 45px;

  @media (max-width: 767px) {
    padding: 15px;
    h1 {
      font-size: 1.6em;
    }
    h2 {
      font-size: 1.3em;
    }
    h3 {
      font-size: 1.1em;
    }
  }
`

export const Layout = StyledComponent
