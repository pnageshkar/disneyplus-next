import Image from 'next/image'
import React from 'react'

function LandingPage() {
  return (
    <section className="landing-page">
        <div className="relative min-h-[calc(100vh-4.5rem)]">
            <Image
            src="/images/landing-backimage.jpg"
            layout="fill"
            objectFit="cover"
            />
        </div>
        <div className="flex justify-center items-center">
          <div className='absolute flex flex-col justify-center items-center space-y-4 top-40 w-full max-w-screen-sm p-8 '>
            <Image src="/images/cta-logo-one.svg"
              width="600"
              height="150"
              objectFit="contain"
            />
            <button className='bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-blue-500'>
              Get All There
            </button>
            <p className="text-xs text-center pb-4">
              Get Premier Access to Raya and the Last Dragon for an additional fee
              with a Disney+ subscription. As of 03/26/21, the price of Disney+
              and The Disney Bundle will increase by $
            </p>
            <Image
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
            objectFit="contain"
          />
          </div>
         

        </div>
    </section>
  )
}

export default LandingPage