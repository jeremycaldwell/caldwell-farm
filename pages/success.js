import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caldwell Farm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Caldwell Farm" />
        <p className="description">Succes!</p>
        <p>Your request has been submitted.</p>
      </main>

      <Footer />
    </div>
  )
}
