import type { NextPage } from 'next'
import Head from 'next/head'
import UnicodeItem from '../../components/common/UnicodeItem'

const Emoji: NextPage = () => {
  const ids = [];
  for(let i = 126976; i <= 130000; i++) {
    ids.push(i);
  }
  return (
    <div className="py-8">
      <Head>
        <title>Emojis</title>
        <meta name="description" content="126976-130000 unicodes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          {
            ids.map(function(id){
              return <li key={id} className="unicode-item">
                <UnicodeItem id={id} />
              </li>
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default Emoji
