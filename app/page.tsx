import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import HomeContainer from '@/components/home/HomeContainer'
import { client } from '@/sanity/lib/client'
import { Speaker } from '@/sanity/schemas/speaker'
import Navbar from '../components/common/Navbar'

export const revalidate = 3600


export default async function Home() {
  const speakers = await client.fetch<Speaker[]>(`*[_type=="speaker"]`)

  return (
    <div>
      <Navbar />
      <Hero />
      <HomeContainer speakers={speakers} />
      <Footer />
    </div>
  )
}
