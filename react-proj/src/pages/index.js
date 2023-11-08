
import { Inter } from 'next/font/google'

import ThreeScene from '@/components/ThreeScene'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <>    
   
    <div className='h-screen w-screen flex object-contain justify-center static'>
    <input className=' absolute top-96 w-8  text-black z-30 h-3 '></input>
    <img className='text-black  flex z-20  ' src='/PICTURES/_5792cc54-de7d-4350-ac82-6d21b42daad6.png' alt='computer' />
    <div className=' flex z-10 absolute   '>
      <ThreeScene></ThreeScene>
      </div>
      
    </div>

    

   
     
    </>

    
   
  )
}
