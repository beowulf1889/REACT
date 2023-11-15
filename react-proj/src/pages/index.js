
import { Inter } from 'next/font/google'

import ThreeScene from '@/components/ThreeScene'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <>    
   
    
    
    <div className='h-screen w-screen flex object-contain justify-center static'>
    
    
    
  
    <div className=' flex z-40 absolute   '>
      <ThreeScene></ThreeScene>
      </div>
        
    </div>

    

   
     
    </>

    
   
  )
}
