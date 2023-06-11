import Hero1 from '@/src/components/hero1'
import Hero3 from '@/src/components/hero3'

async function Home({params: {lang}}: any) {
  return <>
    <Hero1 lang={lang}/>
    <Hero3 />
  </>
}

export default Home