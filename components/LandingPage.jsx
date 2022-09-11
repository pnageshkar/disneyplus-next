import Image from 'next/image'
import React from 'react'

function LandingPage() {
  return (
    <section className="landing-page">
        <div className="relative min-h-[calc(100vh-72px)]">
            <Image
            src="/images/landing-backimage.jpg"
            layout="fill"
            objectFit="cover"
            />
      </div>
    </section>
  )
}

export default LandingPage