import Image from 'next/image'
import Link from 'next/link'

const DDM = () => {
  const Cards = (props) => {
    return (
      <>
        <div className="w-full max-w-xs bg-gray-50 p-5 rounded-lg shadow-md">
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
      <section className="relative w-full bg-sky-200 overflow-x-hidden py-20">
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
            fill="#E0F2FE"
            fillOpacity="1"
          ></path>
        </svg>

        <div className="relative mod-container flex flex-col items-center">
          <h1 className="font-medium text-xl text-sky-600">What we do?</h1>
          <div className="flex flex-wrap mt-12 w-full justify-center gap-8">
            <Cards title="Designing">
              Accept Payments using Payment Gateway, Payment Pages, Payment
              Links and much more.
            </Cards>
            <Cards title="Development">
              Simplify, accelerate, and automate every aspect of your banking
              operations.
            </Cards>
            <Cards title="Marketing">
              Get payments within 12 working hours & never have a shortfall of
              working capital.
            </Cards>
          </div>
        </div>
      </section>
    </>
  )
}

export default DDM
