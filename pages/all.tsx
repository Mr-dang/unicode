import type { NextPage } from 'next'
import Head from 'next/head'
import UnicodeItem from '../components/common/UnicodeItem'

const All: NextPage = () => {
  return (
    <div  className="py-8">
      <Head>
        <title>All unicodes</title>
        <meta name="description" content="1-200 unicodes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          {
            (new Array(200)).fill(undefined).map(function(i, index){
              return <li key={index} className="unicode-item">
                <UnicodeItem id={index + 1} />
              </li>
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default All
