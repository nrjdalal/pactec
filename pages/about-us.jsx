/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

const AboutUs = () => {
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
              We act as an extension of your own sales team
            </h1>
            <h2 className="lg:text-xl mt-4 text-gray-200">
              Packet Technologies, was founded in New Zealand over 10 years ago.
              It began with the merger of two well known Specialty Technology
              Companies; Crawford Technologies and Packet Engines in 2008 and
              since has expanded into Australia and the Pacific Islands.
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

      <div className="bg-sky-800 pt-20">
        <div className="mod-container flex flex-col lg:flex-row justify-center items-center">
          <img
            className="lg:w-full lg:mr-5 rounded-3xl"
            src="https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
          <div className="mt-10 lg:mt-0 lg:ml-5 lg:w-full">
            <h1 className="font-semibold text-4xl text-gray-100">
              Our Mission
            </h1>
            <h2 className="mt-4 text-gray-200 text-xl">
              Our mission is to act as an extension of a Vendors own sales,
              technical and operations team to develop a channel for your
              products. We are seasoned sales professionals with extensive
              technical backgrounds backed by a strong Operations team.
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-sky-800 py-20">
        <div className="mod-container flex flex-col lg:flex-row justify-center items-center">
          <div className="mt-10 order-2 lg:order-1 lg:mt-0 lg:mr-5 lg:w-full">
            <h1 className="font-semibold text-4xl text-gray-100">
              How we do it
            </h1>
            <h2 className="mt-4 text-gray-200 text-xl">
              Packet Technologies communicates directly with end-users. Once an
              end-user opportunity has been identified, we will work with the
              nominated Reseller to develop and close the opportunity.
            </h2>
          </div>
          <img
            className="lg:w-full lg:order-2 lg:ml-5 rounded-3xl"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default AboutUs
