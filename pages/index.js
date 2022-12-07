import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Caldwell Farm" />
        <p className="description">
          To place an order please call 509-713-2333 or fill out the form below.
        </p>
      </main>

      <Footer />
    </div>
  )
}
