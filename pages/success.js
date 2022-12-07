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
        <Header title="Succes!" />
        <p>Thank you for your order.</p>
        <p>We will collect and clean the eggs then let you know when they are ready for pickup or delivery.</p>
      </main>

      <Footer />
    </div>
  )
}
