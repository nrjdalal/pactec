import Image from 'next/image'

const Clients = () => {
  return (
    <>
      <div className="bg-sky-800 py-20">
        <div className="mod-container flex flex-col items-center">
          <h1 className="font-medium text-xl mb-6 text-gray-100">
            Join the ranks of clients like:
          </h1>
          <div className="invisible flex flex-wrap justify-center gap-x-8 w-[300px] sm:w-[600px] xl:w-full filter grayscale contrast-0">
            <div className="w-32 h-16">
              <Image
                src="/images/brands/adobe-logo-vector.svg"
                alt=""
                width={160}
                height={80}
                objectFit="contain"
              />
            </div>
            <div className="w-32 h-16">
              <Image
                src="/images/brands/capital-one-logo-vector.svg"
                alt=""
                width={160}
                height={80}
                objectFit="contain"
              />
            </div>
            <div className="w-32 h-16">
              <Image
                src="/images/brands/google-logo-vector.svg"
                alt=""
                width={160}
                height={80}
                objectFit="contain"
              />
            </div>
            <div className="w-32 h-16">
              <Image
                src="/images/brands/netflix-logo-vector.svg"
                alt=""
                width={160}
                height={80}
                objectFit="contain"
              />
            </div>
            <div className="w-32 h-16">
              <Image
                src="/images/brands/pdffiller-logo-vector.svg"
                alt=""
                width={160}
                height={80}
                objectFit="contain"
              />
            </div>
            <div className="w-32 h-16">
              <Image
                src="/images/brands/xfinity-logo-vector.svg"
                alt=""
                width={160}
                height={80}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Clients
