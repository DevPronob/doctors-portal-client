import React from 'react'
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/whitening.png'
import img3 from '../../../assets/images/cavity.png'
const Service = () => {
  const serviceItem =[
    {
      name:"Fluoride Treatment",
      text:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img:img1
    },
    {
      name:"Cavity Filling",
      text:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img:img2
    },
    {
      name:"Teeth Whitening",
      text:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img:img3
    },
  ]
  return (
    <div className='pt-10'>
      <h5 className='text-center text-primary font-bold text-[20px]'>OUR SERVICES</h5>
      <p className='text-center text-[34px]'>Services We Provide</p>
      <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          serviceItem.map(items =>{
            return <div className='flex flex-col items-center '>
               <figure className='mt-10'>
            <img src={items.img} alt="Girl in a jacket"></img>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{items.name}</h2>
                <p>{items.text}</p>
            </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Service
