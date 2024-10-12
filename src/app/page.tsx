'use client'
import Image from "next/image";
export default function Home() {
  
  const images = ['/client-databiz.svg' , '/client-audiophile.svg' , '/client-meet.svg' ,'/client-maker.svg']

  return (
      <div className="containor m-8 grid gap-20 place-items-center">
        
        <div className="body flex justify-evenly items-center w-10/12">
            <div className="flex flex-col items-start gap-14">
              <div className="text-8xl font-bold">
                <p>Make</p>
                <p>remote work</p>
              </div>
              <p className="text-xl font-semibold w-2/3 text-justify">Get your team in sync, no matter your location. Streamline processes,
                 create team rituals, and watch productivity soar.</p>
              <button className="bg-black hover:bg-white border-2 border-black mb-8 py-4 px-6 font-medium rounded-2xl text-2xl hover:text-black text-white">Learn more</button>
              <div className="gap-8 flex items-center">
              {
                
                images.map( (img , index) => (
                  <Image key={index}
                  src={img}
                  width={100}
                  height={100}
                  alt='#'
                  />
                ))
               }
              </div>
            </div>
            <Image src='/image-hero-desktop.png'
            width={500}
            height={800}
            alt="#"
            >
            </Image>
        </div>
      </div>
  );
}
