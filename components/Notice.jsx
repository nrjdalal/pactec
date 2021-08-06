import Link from 'next/link'

const Notice = () => {
  return (
    <>
      <div className="bg-red-500 border-b-2 border-gray-900 border-opacity-5">
        <div className="mod-container py-1.5 flex justify-between">
          <div className="flex text-white items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hidden sm:block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="hidden sm:block">&nbsp;</span>
            <p>
              <span className="font-semibold">We&apos;re hiring!</span>&nbsp;
              <Link href="/careers">
                <a className="underline">Browse Careers</a>
              </Link>
              &nbsp;at Pactec.
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default Notice
