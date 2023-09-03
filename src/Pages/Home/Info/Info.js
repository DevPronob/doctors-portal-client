import React from 'react'
import img1 from '../../../assets/icons/clock.svg'
import img2 from '../../../assets/icons/marker.svg'
import img3 from '../../../assets/icons/phone.svg'
const Info = () => {
    const infoData =[
        {
            titile:'Opening Hours',
            text:"Lorem Ipsum is simply dummy text of the pri",
            img:img1,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            titile:'Visit our location',
            text:"Brooklyn, NY 10036, United States",
            img:img2,
            bgClass: 'bg-accent'
        },
        {
            titile:'Contact us now',
            text:"+000 123 456789",
            img:img3,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
  return (
    <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
     {
        infoData.map(items =>{
            return <div className={`card text-white p-6 md:card-side shadow-xl ${items.bgClass}`}>
                <figure>
            <img src={items.img} alt="Girl in a jacket"></img>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{items.titile}</h2>
                <p>{items.description}</p>
            </div>
            </div>
        })
     }
    </div>
  )
}

export default Info
