type Topic = {
  title: string
  overview: string
  url?: string
  date: string
  isNotable?: boolean
}

type TopicByMonth = {
  month: string
  topics: Topic[]
  notableTopics: Topic[]
}

// scripts/transform-topics/index.ts で生成した topics.json を温かみのある手作業でコピペ
export const topics: TopicByMonth[] = [
  {
    month: "01",
    notableTopics: [
      {
        title: "リンクなし注目トピック",
        overview:
          "注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容",
        date: "2023-01-10",
        isNotable: true,
      },
      {
        title: "注目トピック",
        overview:
          "注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容注目トピックの内容",
        url: "https://blog.cybozu.io/entry/2023/11/10/131530",
        date: "2023-01-12",
        isNotable: true,
      },
    ],
    topics: [
      {
        title: "The Turbopack vision",
        overview:
          "Next.js 13 へアルファ版が同梱された Turbopack についての記事。Webpack が抱えていた課題と、Turbopack が何を解決するのか、今後の展望などについて述べられています",
        url: "https://vercel.com/blog/the-turbopack-vision",
        date: "2023-01-11",
      },
      {
        title: "Interop 2022: end of year update",
        overview: "ブラウザ相互互換性に関する各ブラウザのアップデートまとめ",
        url: "https://web.dev/blog/interop-2022-wrapup",
        date: "2023-01-11",
      },
      {
        title: "Astro 2.0",
        overview:
          "Content Collections API 追加や Vite4.0 対応等、メジャーリリースに相応しい大きなアップデートになっています",
        url: "https://astro.build/blog/astro-2/",
        date: "2023-01-24",
      },
      {
        title: "Announcing TypeScript 5.0 Beta",
        overview: "TypeScript 5.0 の beta がリリース",
        url: "https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/",
        date: "2023-01-26",
      },
    ],
  },
  {
    month: "02",
    notableTopics: [],
    topics: [
      {
        title: "Firefox 110.0, See All New Features, Updates and Fixes",
        overview:
          "Firefox が Container Queries を実装したことで、主要ブラウザ全てで Container Queries が利用できるように",
        url: "https://www.mozilla.org/en-US/firefox/110.0/releasenotes/",
        date: "2023-02-14",
      },
      {
        title: "Interop 2023: continuing to improve the web for developers",
        overview:
          "主要なブラウザベンダーや関係企業で、ブラウザの相互運用性を向上するために取り組んでいるInterop 2023が公開",
        url: "https://web.dev/interop-2023/",
        date: "2023-02-14",
      },
      {
        title: "Vercel Meetup #0 with CEO",
        overview:
          "Vercel CEO の Guillermo Rauch 氏が来日・参加する Vercel User Community によるオフライン meetup が開催",
        url: "https://vercel.connpass.com/event/274772/",
        date: "2023-02-19",
      },
      {
        title: "Deno 1.31: package.json support",
        overview: "Deno 1.31のリリースでpackage.jsonがサポートされた",
        url: "https://deno.com/blog/v1.31",
        date: "2023-02-24",
      },
      {
        title: "Getting Started with Style Queries",
        overview:
          "コンテナ要素のスタイルに合わせて、子要素のスタイルを指定できる Style Queries が Chrome 111 から試せるように",
        url: "https://developer.chrome.com/blog/style-queries/",
        date: "2023-02-24",
      },
      {
        title: "Bun has docs now",
        overview: "Bun のドキュメントサイトが公開された",
        url: "https://twitter.com/colinhacks/status/1629310598004772865",
        date: "2023-02-25",
      },
    ],
  },
  {
    month: "03",
    notableTopics: [],
    topics: [
      {
        title: "SPA view transitions land in Chrome 111",
        overview: "View Transiton API が Chrome 111 にて実装された",
        url: "https://developer.chrome.com/blog/spa-view-transitions-land/",
        date: "2023-03-09",
      },
      {
        title: "The future of Chakra UI",
        overview: "Chakra UIの今後の開発計画について",
        url: "https://www.adebayosegun.com/blog/the-future-of-chakra-ui",
        date: "2023-03-27",
      },
      {
        title: "storybookjs/storybook v7.0.0 Prerelease",
        overview: "Stroybook の v7 がプレリリースされました",
        url: "https://github.com/storybookjs/storybook/releases/tag/v7.0.0",
        date: "2023-03-31",
      },
    ],
  },
  {
    month: "04",
    notableTopics: [],
    topics: [
      {
        title: "Announcing Vite 4.3",
        overview:
          "Vite 4.3 がリリースされ、パフォーマンスが大きく改善された。https://sun0day.github.io/blog/vite/why-vite4_3-is-faster.html",
        url: "https://vitejs.dev/blog/announcing-vite4-3.html",
        date: "2023-04-20",
      },
    ],
  },
  {
    month: "05",
    notableTopics: [],
    topics: [
      {
        title: "Announcing Deno KV",
        overview:
          "Deno v1.33 のリリースの一つとして Deno KV の beta が発表された",
        url: "https://deno.com/blog/kv",
        date: "2023-05-01",
      },
      {
        title: "Qwik Reaches v1.0",
        overview: "Qwik の stable 版である v1 がリリース",
        url: "https://www.builder.io/blog/qwik-v1",
        date: "2023-05-02",
      },
      {
        title: "Next.js 13.4",
        overview:
          "Next.js 13.4がリリースされApp RouterがStableにServer Actionsのalpha版が実装された",
        url: "https://nextjs.org/blog/next-13-4",
        date: "2023-05-04",
      },
      {
        title: "Announcing connect()",
        overview:
          "Cloudflare Workersでconnect()というTCPソケットを作成するためのAPIを発表した",
        url: "https://blog.cloudflare.com/workers-tcp-socket-api-connect-databases/",
        date: "2023-05-16",
      },
      {
        title: "The Bun Bundler",
        overview: "Bun Bundler のベータ版がリリース",
        url: "https://bun.sh/blog/bun-bundler",
        date: "2023-05-16",
      },
      {
        title: "Introducing the popover API",
        overview:
          "ポップオーバーを JavaScript を使わずに実装できる Popover API が Chrome114 で実装された",
        url: "https://developer.chrome.com/blog/introducing-popover-api/",
        date: "2023-05-23",
      },
      {
        title: "RedwoodJS’ Next Epoch: All In on React Server Components",
        overview:
          "RedwoodJS が近い将来に React Server Components を利用した SSR 機能を実装すると発表",
        url: "https://tom.preston-werner.com/2023/05/30/redwoods-next-epoch-all-in-on-rsc.html",
        date: "2023-05-30",
      },
    ],
  },
  {
    month: "07",
    notableTopics: [],
    topics: [
      {
        title: "Panda CSS",
        overview:
          "Chakra UI から、CSS-in-JS ライブラリである Panda CSS がリリース",
        url: "https://panda-css.com/",
        date: "2023-07-01",
      },
      {
        title: "Kuma UI",
        overview:
          "Zero-runtime CSS-in-JS と Runtime CSS-in-JS の Hybrid approach を掲げる UI コンポーネントライブラリ",
        url: "https://www.kuma-ui.com/",
        date: "2023-07-01",
      },
      {
        title: "Prettier 3.0: Hello, ECMAScript Modules!",
        overview: "Prettier の 3.0 がリリース",
        url: "https://prettier.io/blog/2023/07/05/3.0.0.html",
        date: "2023-07-05",
      },
      {
        title: "A case study on scroll-driven animations performance",
        overview:
          "Chrome115 で新しく登場した、スクロール駆動のアニメーションを実現するための CSS プロパティ animation-timeline と JavaScript クラス ScrollTimeline の紹介",
        url: "https://developer.chrome.com/blog/scroll-animation-performance-case-study/",
        date: "2023-07-12",
      },
      {
        title: "Chrome Supports SolidJS in Building a Performant Web",
        overview:
          "Solid.js が Aurora プロジェクト を通じて Chrome チームから 30,000 ドルの資金援助を受けた",
        url: "https://www.solidjs.com/blog/chrome-supports-solidjs",
        date: "2023-07-13",
      },
      {
        title: "How React 18 Improves Application Performance",
        overview:
          "React18 でどのようなパフォーマンス改善がなされたのかをVercelが解説",
        url: "https://vercel.com/blog/how-react-18-improves-application-performance",
        date: "2023-07-19",
      },
      {
        title: "Astro 2.9: View Transitions (experimental)",
        overview:
          "Astro v2.9 のリリース記事。View Transitions が experimental として追加",
        url: "https://astro.build/blog/astro-290/",
        date: "2023-07-20",
      },
      {
        title: "Arc 1.0 is now available",
        overview: "Chromium ベース新ブラウザ「Arc」の v1 がリリース",
        url: "https://twitter.com/arcinternet/status/1683841503544897538?s=20",
        date: "2023-07-25",
      },
      {
        title:
          "dnt — the easiest way to publish a hybrid npm module for ESM and CommonJS",
        overview:
          "CJS と ESM に対応した npm パッケージをDenoで簡単に作成できる dnt の紹介記事",
        url: "https://deno.com/blog/publish-esm-cjs-module-dnt",
        date: "2023-07-31",
      },
    ],
  },
  {
    month: "06",
    notableTopics: [],
    topics: [
      {
        title:
          "Next.js 13 の SSR Streaming を AWS Lambda Response Streaming で実装する方法",
        overview:
          "Next.js 13 の SSR Streaming を AWS Lambda Response Streaming で実装する方法",
        url: "https://aws.amazon.com/jp/blogs/news/implementing-ssr-streaming-on-nextjs-with-aws-lambda-response-streaming/",
        date: "2023-06-16",
      },
      {
        title: "Announcing Svelte 4",
        overview: "Svelte 4 がリリース",
        url: "https://svelte.dev/blog/svelte-4",
        date: "2023-06-22",
      },
      {
        title: "Nuxt 3.6",
        overview: "Nuxt 3.6 がリリース",
        url: "https://nuxt.com/blog/v3-6",
        date: "2023-06-23",
      },
      {
        title: "Ecma International approves new standards - Ecma International",
        overview:
          "Ecma International 125 で採択された ES2023 の新要素 について",
        url: "https://ecma-international.org/news/ecma-international-approves-new-standards-at-the-125th-general-assembly-27-june-2023/",
        date: "2023-06-27",
      },
    ],
  },
  {
    month: "09",
    notableTopics: [],
    topics: [
      {
        title: "CSS View Transitions Module Level 1 publication history",
        overview:
          "View Transitions APIがWorking DraftからCandidate Recommendation Snapshotに移行しました",
        url: "https://www.w3.org/standards/history/css-view-transitions-1/",
        date: "2023-09-05",
      },
      {
        title: "Bun 1.0",
        overview: "Bun v1 が 9/8 にリリース",
        url: "https://bun.sh/blog/bun-v1.0",
        date: "2023-09-08",
      },
      {
        title: "Node.js v16 EOL",
        overview: "Node.js v16 が 9/11 に EOL します",
        url: "https://endoflife.date/nodejs",
        date: "2023-09-11",
      },
      {
        title: "Remix v2",
        overview: "Remix の v2 が公開",
        url: "https://remix.run/blog/remix-v2",
        date: "2023-09-15",
      },
      {
        title: "WebKit Features in Safari 17.0",
        overview: "Safari 17.0でpopover APIが実装された",
        url: "https://webkit.org/blog/14445/webkit-features-in-safari-17-0/",
        date: "2023-09-18",
      },
      {
        title: "Cloudflare Fonts",
        overview:
          "Cloudflareがプライバシーやパフォーマンス面が特徴のWebフォント配信サービスを開始",
        url: "https://blog.cloudflare.com/cloudflare-fonts-enhancing-website-privacy-speed/",
        date: "2023-09-25",
      },
      {
        title: "<selectlist> のプロトタイプ実装",
        overview:
          "OpenUI で仕様策定中の <selectlist> 要素がChrome Canaryで試せるように",
        url: "https://twitter.com/Una/status/1706777335762997283?s=20",
        date: "2023-09-27",
      },
      {
        title: "D1: open beta is here",
        overview:
          "Cloudflare が提供するエッジで動作する DB サービスの D1 がオープンベータとなり、誰でも利用可能に",
        url: "https://blog.cloudflare.com/d1-open-beta-is-here/",
        date: "2023-09-28",
      },
    ],
  },
  {
    month: "08",
    notableTopics: [],
    topics: [
      {
        title: "Caching in Next.js",
        overview: "Next.js のドキュメントに cache の説明が追加",
        url: "https://nextjs.org/docs/app/building-your-application/caching",
        date: "2023-08-01",
      },
      {
        title: "Joy UI is now in Beta!",
        overview: "Joy UI が Beta リリース",
        url: "https://twitter.com/MUI_hq/status/1686406501525491712?s=20",
        date: "2023-08-02",
      },
      {
        title: "shadcn join Vercel",
        overview:
          "Radix UI と Tailwind CSS で作られたスニペット集の shadcn/ui の作者が Vercel に join",
        url: "https://twitter.com/shadcn/status/1688945578439499776?s=20",
        date: "2023-08-09",
      },
      {
        title: "Announcing Biome",
        overview:
          "Rome のコアチームが Rome をフォークした Biome として開発を続けていくことを発表",
        url: "https://biomejs.dev/blog/annoucing-biome",
        date: "2023-08-29",
      },
      {
        title: "Astro 3.0",
        overview: "Astro v3がリリース。View Trantisonsがstableに",
        url: "https://astro.build/blog/astro-3/",
        date: "2023-08-30",
      },
    ],
  },
  {
    month: "10",
    notableTopics: [],
    topics: [
      {
        title: "Photoshop is now on the web!",
        overview:
          "近年実装された新しい WebAPI を利用することで、ブラウザでも Photoshop の機能が実装できるように",
        url: "https://medium.com/@addyosmani/photoshop-is-now-on-the-web-38d70954365a",
        date: "2023-10-01",
      },
      {
        title: "Release: Yarn 4.0",
        overview: "Yarn 4.0 がリリース",
        url: "https://yarnpkg.com/blog/release/4.0",
        date: "2023-10-23",
      },
      {
        title: "Next.js 14",
        overview: "Next.js 14 がリリース。Server Actions が stable になるなど",
        url: "https://nextjs.org/blog/next-14",
        date: "2023-10-26",
      },
      {
        title: "Vue Fes Japan 2023 にスポンサーとして参加",
        overview: "Vue Fes Japan 2023 にスポンサーとして参加",
        url: "https://cybozu.github.io/frontend-expert/posts/sponsored-vuefes2023",
        date: "2023-10-30",
      },
    ],
  },
  {
    month: "11",
    notableTopics: [],
    topics: [
      {
        title:
          "フロントエンドリアーキテクトをテーマに「BARフロントえんどう #1」を開催しました！",
        overview:
          "フロントエンドリアーキテクトをテーマに「BARフロントえんどう #1」を開催しました！",
        url: "https://blog.cybozu.io/entry/2023/11/10/131530",
        date: "2023-11-10",
      },
    ],
  },
]
