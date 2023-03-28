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
          <Header title="Success!" />
          <div class="description">
            <p>Thank you for your order.</p>
            <p>We will collect and clean the eggs then let you know when they are ready for pickup or delivery.</p>
            <p><b>Online payment methods</b></p>
            <p>
              <a href="https://cash.app/$jeremymcaldwell" class="icon-with-link">
                <img src="/icon-square-cash.svg" alt="Cash App icon" width="30px" />
                Cash App
              </a>
              <a href="https://account.venmo.com/u/eternalistic" class="icon-with-link">
                <img src="/venmo-logo.svg" alt="Venmo App icon" width="30px" />
                Venmo
              </a>
            </p>
            <p><em>Payment can also be made at time of delivery.</em></p>
          </div>
        </header>
      </main>
      <Footer />
    </div>
  )
}
