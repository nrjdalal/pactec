/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import { ContentOnRight } from 'components/Universal'

const Clients = () => {
  return (
    <>
      <div className="bg-sky-800 pt-20">
        <div className="mod-container flex flex-col lg:flex-row justify-center items-center">
          <img
            className="lg:w-full lg:mr-5 rounded-3xl"
            src="https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
          <div className="mt-10 lg:mt-0 lg:ml-5 lg:w-full">
            <h1 className="font-semibold text-4xl text-gray-100">Who We Are</h1>
            <h2 className="mt-4 text-gray-200 text-xl">
              Packet technologies is a technology sales company. We take
              products to the market, train Resellers, create brand recognition,
              generate demand, and talk directly to the decision makers. We
              &quot;Act as the Vendor&quot;.
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-sky-800 py-20">
        <div className="mod-container flex flex-col lg:flex-row justify-center items-center">
          <div className="mt-10 order-2 lg:order-1 lg:mt-0 lg:mr-5 lg:w-full">
            <h1 className="font-semibold text-4xl text-gray-100">What We Do</h1>
            <h2 className="mt-4 text-gray-200 text-xl">
              Our goal is to act as an extension of a Vendors own sales,
              technical and operations team to develop a channel for your
              products. We are seasoned sales professionals with extensive
              technical backgrounds backed by a strong Operations team.
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

export default Clients
