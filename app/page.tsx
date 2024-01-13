// import ViewAllBtn from '@/components/common/ViewAllBtn'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center p-24">
        <h1 className="text-4xl font-bold mb-8">Hello World!</h1>
        {/* <ViewAllBtn title={'View all Workshops'} link={'/'} /> */}
      </div>
      <Footer />
    </main>
  )
}
