/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

const DDM = () => {
  const Cards = (props) => {
    return (
      <>
        <div className="w-full lg:max-w-sm xl:max-w-lg 2xl:max-w-xl bg-gray-50 p-5 rounded-lg shadow-md">
          <div className="h-16 w-16 bg-sky-900 rounded-full overflow-hidden"></div>
          <h1 className="mt-6 text-2xl font-medium">{props.title}</h1>
          <p className="mt-4 mb-2">{props.children}</p>
          <Link href="/">
            <a className="underline">Learn More</a>
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <section className="relative w-full bg-sky-900 overflow-x-hidden py-20">
        {/* Divider */}
        <svg
          className="absolute top-0 h-3/5 w-[200%]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            fill="#075985"
            fillOpacity="1"
          ></path>
        </svg>

        <div className="relative mod-container flex flex-col items-center">
          <h1 className="font-medium text-4xl text-gray-100">
            Our Key Services
          </h1>
          <div className="flex flex-wrap mt-12 w-full justify-center gap-10">
            <Cards title="Business Development">
              Identification of potential partners and channels, customers,
              contacts and other third parties required for business
              development.
            </Cards>
            <Cards title="Market Entry Acceleration">
              We offer in-depth market analysis to devise the best entry plan
              and to facilitate the process of decision making.
            </Cards>
            <Cards title="Sales Channel Optimisation">
              Get payments within 12 working hours & never have a shortfall of
              working capital.
            </Cards>
          </div>
        </div>
      </section>

      <div className="bg-sky-900 py-20">
        <div className="mod-container flex flex-col lg:flex-row justify-center items-center">
          <img
            className="lg:w-full lg:mr-5 rounded-3xl"
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
          <div className="mt-10 lg:mt-0 lg:ml-5 lg:w-full">
            <h1 className="font-semibold text-4xl text-gray-100">About Us</h1>
            <h2 className="mt-4 text-gray-200 text-xl">
              For over 10 years Pactec has provided local feet on the ground,
              bringing over 50+ years combined IT experience, contacts, personal
              relationships, market knowledge and extensive engagements with
              some of the largest companies throughout APAC.
            </h2>
          </div>
        </div>
      </div>

      <div className="border-t-2 bg-sky-900 border-sky-800">
        <div className="mod-container py-10 text-xl text-sky-300">
          If you are an International Vendor struggling with the cost and effort
          of establishing or maintaining an Australia/New Zealand presence, then
          please{' '}
          <span className="border-b-[1px] border-sky-300">contact us</span>.
        </div>
      </div>
    </>
  )
}

export default DDM
