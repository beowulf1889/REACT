
import { Inter } from 'next/font/google'

import ThreeScene from '@/components/ThreeScene'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> <div className=''></div>
      <div className='flex ibg-tems-center items justify-center '>
       <input className=' py-8 text-center text-black '></input>
     
        <input className=' py-8 text-center text-black'></input>
      </div>
      
      <ThreeScene></ThreeScene>
      
    

    
    </>
  )
}
