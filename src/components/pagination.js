import React from 'react'

function Pagination(props) {
    let numberofpages = []
    for (let i=1;i<=Math.ceil( props.filteredDishes.length/props.itemsperpage);i++){
        numberofpages.push(i)
    }

    function shownextdishhandler(event){
        let curentpages=event.target.id
        props.setcurrentpage(curentpages)
    }

    
    let pages=numberofpages.map((pagenumber)=>{
        const isActive = props.currentpage === pagenumber;
        return (
            <li className={` hover:scale-105 cursor-pointer px-4 py-2 mx-1 border rounded-lg transition-colors duration-200 
                ${isActive ? 'transition-transform duration-300 hover:scale-105 bg-[#ffb902] text-white border-blue-600' : 'bg-white text-black border-gray-300'}
                hover:bg-[#eba902] hover:text-white`} id={pagenumber} onClick={shownextdishhandler}>{pagenumber}</li>
        )
    })

  return (
    <section className='w-full h-auto mt-4'>
      <ul className='flex justify-center space-x-2'>
        {pages}
      </ul>
    </section>
    
  )
}

export default Pagination
