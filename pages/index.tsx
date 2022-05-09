import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Unicodes</title>
        <meta name="description" content="unicode" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          <a href="/all">所有字符</a>
        </p>
      </main>
    </div>
  )
}

export default Home
