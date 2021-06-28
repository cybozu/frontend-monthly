import React from "react";
import { css } from "@emotion/css";
import Link from "next/link";
import "github-markdown-css/github-markdown.css";
import Head from "next/head";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${style} markdown-body`}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism.min.css"
        ></link>
      </Head>
      <main className="main">{children}</main>
      <footer className="footer">
        <Link href="/">Cybozu Frontend Monthly</Link>
      </footer>
    </div>
  );
};

const style = css`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  border-top: 4px solid #64bdd4;
  box-sizing: border-box;
  .main {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
    padding: 15px 45px;
    color: #24292e;

    h1 {
      margin-top: 0;
    }

    @media (max-width: 767px) {
      padding: 12px;
      font-size: 14px;
      .markdown-body {
        font-size: 14px;
      }
      h1 {
        font-size: 1.55em;
        margin-bottom: 0.25em;
        margin-top: 0.5em;
      }
      h2 {
        font-size: 1.3em;
        margin-bottom: 0.25em;
        margin-top: 0.5em;
      }
      h3 {
        font-size: 1.1em;
        margin-bottom: 0.25em;
        margin-top: 0.5em;
      }
      hr {
        margin: 12px 0;
      }
    }
  }
  .footer {
    background-color: #31424e;
    text-align: center;
    color: #f8f8ff;
    font-size: 0.75em;
    padding: 5px 0;
    a {
      color: inherit;
    }
  }
`;
