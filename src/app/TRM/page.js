import React from 'react'
import Schedule from '../Components/Schedule'
import Mode from '@/../public/Model.jpg'
import Image from 'next/image'
import Link from 'next/link'
export default function page() {
  return (
    <>
    {/* <Schedule/> */}
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
      {/* <!-- image - start --> */}
      <div class="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
        <Image src={Mode} loading="lazy" alt="Photo by Andras Vas" class="h-full w-full object-cover object-center" />
      </div>
      {/* <!-- image - end --> */}

      {/* <!-- content - start --> */}
      <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
        <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">TRM Model</h2>

        <p class="mb-8 max-w-md text-gray-600">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

        <div class="mt-auto">
          <Link  href='/TRM/Sched' class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Start</Link>
        </div>
      </div>
      {/* <!-- content - end --> */}
    </div>
  </div>
</div>
     {/* FAQ */}
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">What is TRM</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    {/* <!-- text - end --> */}

    <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
      {/* <!-- question - start --> */}
      <div>
        <h3 class="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">How does the product work?</h3>
        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
      </div>
      {/* <!-- question - end --> */}

      {/* <!-- question - start --> */}
      <div>
        <h3 class="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">What are the features?</h3>
        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
      </div>
      {/* <!-- question - end --> */}

      {/* <!-- question - start --> */}
      <div>
        <h3 class="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">What about integrations?</h3>
        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
      </div>
      {/* <!-- question - end --> */}

      {/* <!-- question - start --> */}
      <div>
        <h3 class="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">Is support available?</h3>
        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
      </div>
      {/* <!-- question - end --> */}

      {/* <!-- question - start --> */}
      <div>
        <h3 class="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">How does one upgrage a plan?</h3>
        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
      </div>
      {/* <!-- question - end --> */}

      {/* <!-- question - start --> */}
      <div>
        <h3 class="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">Which payment methods are available?</h3>
        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
      </div>
      {/* <!-- question - end --> */}
    </div>
  </div>
</div>
</>
  )
}
