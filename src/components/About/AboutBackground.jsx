import React from 'react'

const AboutBackground = () => {
  return (
    <>
        <div className="absolute w-full h-full bg-neutral-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 z-10"></div>
        {/* circle */}
        <div className="z-0">
          <div className="absolute animate-one w-32 h-32 top-[15%] -right-14 md:size-48 lg:size-60 lg:-right-32  rounded-full bg-orange-500"></div>
          <div className="absolute size-52 lg:size-64 top-2/3 -left-28 rounded-full bg-blue-500"></div>
        </div>
        <div class="absolute inset-0 z-20 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </>
  )
}

export default AboutBackground