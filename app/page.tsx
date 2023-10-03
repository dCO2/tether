import Link from '@/node_modules/next/link';
import Auth from './auth/page';

export default function Landing() {
  return (
    <main>
      <div>
        <Auth/>
        <div className='flex items-center justify-center m-10'>
          <Link href="/home">Temp Link to Home</Link>
        </div>
      </div>
    </main>
  )
}
