import Head from "next/head"
import Header from "@components/Header"
import { getNavItems } from "lib/api"

export default function Home({ navItems }) {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Next.js Headless WP</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header navItems={navItems} />

      <main>
        <section></section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
    const data = await getNavItems()
    return {
      props: {
          navItems: data
      },
    }
  }