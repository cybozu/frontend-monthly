import React from "react"
import dayjs from "dayjs"
import { TeamMembers } from "./TeamMembers"
import { withPrefix } from "gatsby"
import styled from "@emotion/styled"
import { StreamView } from "./StreamView"

const Component = ({ frontmatter, members, className }) => {
  const startDate = dayjs(frontmatter.date)
  const format = "HH:mm"
  return (
    <>
      <img
        src={withPrefix(`/img/header.png`)}
        alt=""
        width="659"
        height="229"
        style={{
          height: "auto",
          maxWidth: "100%",
        }}
      />
      <h2>イベント概要</h2>
      <p>
        <strong>サイボウズフロントエンドマンスリー</strong>
        は、サイボウズ社内で行っているフロントエンド情報共有会「フロントエンドウィークリー」の公開版です。
      </p>
      <p>
        その月に気になったフロントエンドの情報を、サイボウズのフロントエンドエキスパートチームのメンバーが共有していきます。
      </p>
      <p>
        <strong>
          このイベントのハッシュタグは{" "}
          <a
            href={`https://twitter.com/search?q=${encodeURIComponent(
              "#サイボウズフロントエンドマンスリー"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            #サイボウズフロントエンドマンスリー
          </a>{" "}
          です。
        </strong>
      </p>

      <pre className={`${className} note`}>
        <h3>※フロントエンドウィークリーとは</h3>
        <p>
          毎週火曜の 17:00 〜 18:00
          で社内向けに行っているフロントエンドの気になる記事を紹介する会です。2016年3月15日から行われています。
          <br />
          ハッシュタグ{" "}
          <a
            href={`https://twitter.com/search?q=${encodeURIComponent(
              "#サイボウズフロントエンドウィークリー"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            #サイボウズフロントエンドウィークリー
          </a>{" "}
          で実況しています。
        </p>
      </pre>

      <h3>開催日</h3>
      <p>{dayjs(frontmatter.date).format("YYYY年MM月DD日")}</p>

      <h3>イベントページ</h3>
      <p>
        <a
          href={frontmatter.connpass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {frontmatter.connpass}
        </a>
      </p>

      {frontmatter.streamUrl && (
        <>
          <h3>配信URL</h3>
          <StreamView streamUrl={frontmatter.streamUrl} />
        </>
      )}

      <h3>タイムテーブル</h3>
      <table>
        <tbody>
          <tr>
            <td>{`${startDate
              .subtract(10, "m")
              .format(format)} - ${startDate.format(format)}`}</td>
            <td>配信開始</td>
          </tr>
          <tr>
            <td>
              {`${startDate.format(format)} - ${startDate
                .add(5, "m")
                .format(format)}`}
            </td>
            <td>オープニング</td>
          </tr>
          <tr>
            <td>
              {`${startDate.add(5, "m").format(format)} - ${startDate
                .add(55, "m")
                .format(format)}`}
            </td>
            <td>本編</td>
          </tr>
          <tr>
            <td>
              {`${startDate.add(55, "m").format(format)} - ${startDate
                .add(60, "m")
                .format(format)}`}
            </td>
            <td>クロージング</td>
          </tr>
        </tbody>
      </table>

      <TeamMembers members={members} guest={frontmatter.guest} />

      <hr />
    </>
  )
}

const StyledComponent = styled(Component)`
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
  &.note {
    h3 {
      margin-top: 0;
    }
    p {
      margin-bottom: 0;
      white-space: pre-line;
    }
  }
`

export const EventSummary = StyledComponent
