import React from 'react'

function CardDishes(props) {
    
  return (

    <li className='xl:w-[180px] h-auto lg:w-[160px] md:w-[140px] w-[100px] mt-2 transition-transform duration-300 hover:scale-105' >
        <div className='w-full h-full cursor-pointer' onClick={() => props.showpoupfn(props.menuitem.strMeal)}>
            <img  src={props.menuitem.strMealThumb}   alt={props.menuitem.strMeal} className='h-auto rounded-lg xl:w-[200px] lg:w-[180px] md:w-[160px] w-[140px] cursor-pointer '></img>
            <h5 className='text-center md:text-lg cursor-pointer '>{props.menuitem.strMeal}</h5>
        </div>
    </li> 

  )
}

export default CardDishes
