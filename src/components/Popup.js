import React, { useContext } from 'react';
import { Allmenucontexts } from './Allmenucontext';
import { Dispatchcontext } from '../context/AppProvider';
import { AiOutlineClose } from 'react-icons/ai';

function Popup({ closepopup, curentdishname }) {
  const allmenus = useContext(Allmenucontexts);
  const dispatch = useContext(Dispatchcontext);

  let dishdetails = allmenus.filter((menuitem) => menuitem.strMeal === curentdishname)
    .map((item) => {
      return (
        <div className='popup-content-data relative' key={item.idMeal}>
          <div className='popup-header flex items-center mb-8 relative'>
            <div>
              <img
                className='w-[240px] md:w-[400px] rounded-lg h-auto'
                src={item.strMealThumb}
                alt={item.strMeal}
              />
              <h5 className='absolute top-1 left-1 bg-white text-black sm:p-2 p-[8px] rounded-md transition-transform duration-300 hover:scale-105'>
                {item.strCategory}
              </h5>
              <div>
                <button
                  className='bg-[#ffb902] text-black font-bold rounded-md px-6 py-2 mt-6 hover:bg-[#a86e10] transition-all ease-in-out duration-300  hover:scale-105'
                  onClick={() => {
                    dispatch({
                      type: 'addtocart',
                      payload: { title: item.strMeal, img: item.strMealThumb },
                    });
                  }}>
                  AddCart
                </button>
              </div>
            </div>
            <div className='pl-10 text-white mb-4'>
              <h3 className='pb-5 text-xl font-bold'>Ingredients</h3>
              <ul className='dish-ingredients list-disc md:mb-[22px] md:flex md:flex-wrap'>
                {item.strIngredient1 && <li key="ingredient1" className='md:bg-white md:rounded-[32px] md:mb-3 md:text-[14px] md:py-2 md:px-3 md:mr-[12px] md:text-[#000]'>{item.strIngredient1}</li>}
                {item.strIngredient2 && <li key="ingredient2" className='md:bg-white md:rounded-[32px] md:mb-3 md:text-[14px] md:py-2 md:px-3 md:mr-[12px] md:text-[#000]'>{item.strIngredient2}</li>}
                {item.strIngredient3 && <li key="ingredient3" className='md:bg-white md:rounded-[32px] md:mb-3 md:text-[14px] md:py-2 md:px-3 md:mr-[12px] md:text-[#000]'>{item.strIngredient3}</li>}
                {item.strIngredient4 && <li key="ingredient4" className='md:bg-white md:rounded-[32px] md:mb-3 md:text-[14px] md:py-2 md:px-3 md:mr-[12px] md:text-[#000]'>{item.strIngredient4}</li>}
                {item.strIngredient5 && <li key="ingredient5" className='md:bg-white md:rounded-[32px] md:mb-3 md:text-[14px] md:py-2 md:px-3 md:mr-[12px] md:text-[#000]'>{item.strIngredient5}</li>}
                {item.strIngredient6 && <li key="ingredient6" className='md:bg-white md:rounded-[32px] md:mb-3 md:text-[14px] md:py-2 md:px-3 md:mr-[12px] md:text-[#000]'>{item.strIngredient6}</li>}
                {item.strIngredient7 && <li key="ingredient7" className='md:bg-white md:rounded-[32px] md:mb-3 md:text-[14px] md:py-2 md:px-3 md:mr-[12px] md:text-[#000]'>{item.strIngredient7}</li>}
                {item.strIngredient8 && <li key="ingredient8" className='md:bg-white md:rounded-[32px] md:mb-3 md:text-[14px] md:py-2 md:px-3 md:mr-[12px] md:text-[#000]'>{item.strIngredient8}</li>}
                {item.strIngredient9 && <li key="ingredient9" className='md:bg-white md:rounded-[32px] md:mb-3 md:text-[14px] md:py-2 md:px-3 md:mr-[12px] md:text-[#000]'>{item.strIngredient9}</li>}
                {item.strIngredient10 && <li key="ingredient10" className='md:bg-white md:rounded-[32px] md:mb-3 md:text-[14px] md:py-2 md:px-3 md:mr-[12px] md:text-[#000]'>{item.strIngredient10}</li>}
              </ul>
            </div>
          </div>

          <h2 className='text-white text-xl font-bold mb-4'>{item.strMeal}</h2>
          <p className='text-white text-sm mb-6 h-48 overflow-y-scroll p-5'>
            {item.strInstructions}
          </p>

          <button className='bg-[#ffb902] hover:scale-105 text-black font-bold rounded-md px-6 py-3 mt-6 hover:bg-[#238e0a] transition-all ease-in-out duration-300'>
            Order Now
          </button>

          <div className='transition-all ease-in-out duration-300 absolute top-0 right-0 cursor-pointer hover:bg-[#de1717] rounded-md w-6 h-6 items-center flex justify-center'
            onClick={closepopup}>
            <AiOutlineClose className='text-white' size={20} />
          </div>
        </div>
      );
    });

  return (
    <div className='popup fixed inset-0 z-50 bg-[rgba(0,0,0,0.8)] shadow-xl flex items-center justify-center'>
      <div className='popup-content bg-[#111111] w-[800px] h-auto rounded-md p-5'>
        {dishdetails}
      </div>
    </div>
  );
}

export default Popup;
