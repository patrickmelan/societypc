'use client'

import React from 'react'
import SquareHeader from '@/components/SquareHeader'
import Footer from '@/components/Footer'

function BookingPage() {
  return (
    <div>
        <SquareHeader />
        <iframe
            src="https://app.squareup.com/appointments/buyer/widget/moy26y6z0r5ivq/L2CY36EZBEZ5Y"
            allow="payment app.squareup.com"
            className='min-h-[500px] w-full p-2 border-t-blue-700 border-2'
        />
  <Footer />
    </div>
  )
}

export default BookingPage















//style={{min-height:"500px",width:"100%",height:"100%",border-top-width:"initial",border-right-width:"initial", ...}}