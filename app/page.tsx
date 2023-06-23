import {redirect} from 'next/navigation';

async function Home() {
  redirect('/en');
}

export default Home