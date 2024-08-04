import React from 'react'

function CardDishes(props) {
    
  return (

    <li className='xl:w-[200px] h-auto lg:w-[180px] md:w-[160px] w-[140px] mt-2' >
        <a className='w-full h-full' href='javaScript:;' onClick={()=>props.showpoupfn(props.menuitem.strMeal)}>
            <img  src={props.menuitem.strMealThumb} className='h-auto rounded-lg xl:w-[200px] lg:w-[180px] md:w-[160px] w-[140px] cursor-pointer '></img>
            <h5 className='text-center md:text-lg cursor-pointer '>{props.menuitem.strMeal}</h5>
        </a>
    </li> 

  )
}

export default CardDishes
