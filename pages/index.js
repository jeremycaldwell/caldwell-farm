import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caldwell Farm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Caldwell Farm" />
        <h2>10914 East Richard Lane<br/>
        Spokane Valley, WA 99206</h2>
        <p className="description">
          To place an order please call 509-713-2333 or fill out the form below.
        </p>
      </main>
    </div>
  )
}
