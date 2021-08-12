import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="relative bg-sky-900 py-20">
        {/* Divider */}
        <svg
          className="absolute -bottom-1 h-3/5 w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
            fill="#075985"
            fillOpacity="1"
          ></path>
        </svg>
        {/* Hero Section */}
        <div className="relative mod-container flex flex-col md:flex-row md:items-center">
          {/* h1 h2 button */}
          <div className="flex-1 md:mr-8">
            <h1 className="font-semibold text-4xl text-gray-100">
              Looking to Grow your Business in Australia and New Zealand?
            </h1>
            <h2 className="lg:text-xl mt-4 text-gray-200">
              Whether you are a startup or a major player in the fields of ICT
              and Cybersecurity.
              <br />
              Let us take you there.
            </h2>
            <button className="bg-red-500 text-white w-36 py-2.5 rounded-lg mt-8 text-lg tracking-wider hover:bg-red-600">
              Vendors
            </button>
            <button className="bg-white text-red-500 w-36 mx-4 py-2.5 rounded-lg mt-8 text-lg tracking-wider hover:bg-gray-200">
              Resellers
            </button>
          </div>

          {/* Image */}
          <div className="hidden lg:block lg:w-[480px] lg:h-[640px]">
            <Image
              src="/images/index/hero.svg"
              alt=""
              height={640}
              width={480}
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
