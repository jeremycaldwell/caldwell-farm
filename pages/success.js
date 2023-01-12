import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caldwell Farm Egg Order Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header class="header">
          <Header title="Succes!" />
          <div class="description">
            <p>Thank you for your order.</p>
            <p>We will collect and clean the eggs then let you know when they are ready for pickup or delivery.</p>
          </div>
        </header>
      </main>
      <Footer />
    </div>
  )
}
