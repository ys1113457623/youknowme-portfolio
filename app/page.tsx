import Header from "../components/Header"
import { NextPage } from "next"
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home