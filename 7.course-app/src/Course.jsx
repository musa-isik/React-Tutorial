import React from 'react'

function Course({ course }) {
    const {id,title,description,price,link,image} = course;

  return (
    <div>
        <div className='course'>
            <div>
                <img src={image} width={360} height={200}/>
                <h4 className='course-title'>{title}</h4>
                <h5 className='course-desc'>{description}</h5>
                <h3 className='course-price'>{price} tl</h3>
                <h6 className='course-link' ><a href={link} style={{textDecoration:"none"}}>Satın almak için </a></h6>
            </div>
        </div>
    </div>
  )
}

export default Course
