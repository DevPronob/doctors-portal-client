import React from 'react'
import hero from '../../../assets/images/chair.png'
import PrimaryButton from '../../../components/PrimaryButton'
const Banner = () => {
  return (
    <div>
      <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={hero}className="md:w-1/2 w-full rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
