import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import EggOrderForm from '@components/EggOrderForm'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caldwell Farm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Caldwell Farm" />
        <p className="description">To order eggs please fill out the form below.</p>
        <p>Price is 33&cent; per egg.</p>
        <EggOrderForm />
      </main>

      <Footer />
    </div>
  )
}
