import React from 'react'
import HeaderCards from '../components/header/header-cards/HeaderCards'
import Overview from '../components/overview/Overview'
import Services from '../components/services/Services'
import Therapist from '../components/therapists/Therapist'
import Faq from '../components/FAQ/Faq'
import Footer from '../components/footer/Footer'

export default function Homepage() {
  return (
    <div>
      <HeaderCards/>
      <Services/>
      <Overview/>
      <Therapist/>
      <Faq/>
      <Footer/>
    </div>
  )
}
