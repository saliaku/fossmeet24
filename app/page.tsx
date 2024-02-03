import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import HomeContainer from '@/components/home/HomeContainer'
import { client } from '@/sanity/lib/client'
import { Speaker } from '@/sanity/schemas/speaker'
import Navbar from '../components/common/Navbar'

export const revalidate = 3600


export default async function Home() {
  const speakers: Speaker[] = await client.fetch(`*[_type=="speaker"]`)

  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <HomeContainer speakers={speakers} />

        <Footer />
      </main>
    </div>
  )
}
