import React from "react"
import dayjs from "dayjs"
import { TeamMembers } from "./TeamMembers"
import { withPrefix } from "gatsby"

const Component = ({ frontmatter, members }) => {
  const startDate = dayjs(frontmatter.date)
  const format = "HH:mm"
  return (
    <>
      <img
        src={withPrefix(`/img/header.png`)}
        alt={frontmatter.title}
        width="659"
        height="229"
      />
      <h2>イベント概要</h2>
      <p>
        サイボウズフロントエンドウィークリーは、 普段{" "}
        <a
          href={`https://twitter.com/search?q=${encodeURIComponent(
            "#サイボウズフロントエンドウィークリー"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          #サイボウズフロントエンドウィークリー
        </a>{" "}
        のハッシュタグを使ってTwitterで実況している、サイボウズ社内のフロントエンド情報共有会のパブリック版です。
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

      <h3>フロントエンドウィークリーとは</h3>
      <p>
        毎週火曜の 17:00 〜 18:00
        で社内向けに行っているフロントエンドの気になる記事を紹介する会です。2016
        年 3 月 15 日から行われています。
      </p>

      <TeamMembers members={members} guest={frontmatter.guest} />

      <hr />
    </>
  )
}

export const EventSummary = Component
