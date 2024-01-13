import Footer from '@/components/footer/Footer'

import Workshopbox from '@/components/common/Workshopbox'

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-8">Hello World!</h1>

      <Workshopbox
        title={'FFmpeg Workshop'}
        image={'/r1.png'}
        date={'27 Jan'}
        time={'3hrs'}
        description={
          'Kerala Rustaceans is a group that aims to create a community of Rust enthusiasts who can learn, collaborate and share knowledge on projects related to Rust. The group also aims to promote the use of Rust in the state and to attract more developers to the language. They usually organise events, meetups, and hackathons to discuss and learn about the latest developments in Rust'
        }
        organizer={'CSEA'}
        organizerLogo={'/csea-small.png'}
      />

      <Footer />
    </main>
  )
}
