import React from 'react'

const TestCard = ({artist, testimonial}) => {
  return (
    <div className='space-y-4'>
        <div>
            <p className='text-white text-[2.2rem] font- tracking-wide'>{artist}-</p>
        </div>
        <div className='md:w-3/4'>
            <p className='text-white text-[1.2rem] tracking-wider leading-8 test-paragraph'>&quot;{testimonial}&quot;</p>
        </div>
    </div>
  )
}

export default TestCard