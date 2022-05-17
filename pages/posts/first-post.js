import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>
        First Post  | Qiwen Wang portfolio</title>
        <meta
        name="description"
        coontent="Excerpt of my blog post goes"/>
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}