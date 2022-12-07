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
        <p className="description">To order eggs please fill out the form below.</p>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Phone Number: <input type="phone" name="phone" /></label>
          </p>
          <p>
            <label>Number of eggs: <input type="text" name="eggs" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  )
}
