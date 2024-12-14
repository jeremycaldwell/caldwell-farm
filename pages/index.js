import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import EggOrderForm from '@components/EggOrderForm'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caldwell Farm Egg Order Form</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <header className="header">
          <Header title="Caldwell Farm Egg Order Form" />
          <p className="description">To order eggs please fill out the form below and we will get back to you and schedule a pickup or delivery time.</p>
        </header>
        <EggOrderForm />
      </main>

      <Footer />
    </div>
  )
}
