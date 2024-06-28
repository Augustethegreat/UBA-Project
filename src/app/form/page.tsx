

import React from 'react'
import Header from '../components/Header'
import Bodyform from './Bodyform'
import Visuals from './visuals'

export default function page() {
  return (
    <div className='min-h-screen'>
      <div>
        <Header/>
      </div>
      <div>
        <Visuals/>
      </div>
    </div>
  )
}
