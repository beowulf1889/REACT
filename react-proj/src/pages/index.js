
import { Inter } from 'next/font/google'

import ThreeScene from '@/components/ThreeScene'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   
    <>    
   
   <ThreeScene></ThreeScene>

    
    <div className='h-screen w-screen flex object-contain justify-center static'>
    
    <ThreeScene></ThreeScene>
    
      {function render() {
    const delta = clock.getDelta();
    controls.update(delta);
    renderer.render(scene, camera);
  }}
    
      

      </div>
    
        
    

    

   
    </>

    
   
  )
}
