import React, { useContext, useState, useEffect } from 'react';
import Pagination from './pagination';
import CardDishes from './CardDishes';
import { Allmenucontexts } from './Allmenucontext';

function FilteredDishes() {
    const [menucategory, setmenucategory] = useState([]);
    const [singlecategory, setsinglecategorys] = useState([]);
    const allmenus = useContext(Allmenucontexts);
    const [filtermenu, setfiltermenu] = useState([]);
    const [active, setactive] = useState("Beef");
    const [currentpage, setcurrentpage] = useState(1);
    const [itemsperpage, setitemperpage] = useState(4);

    // Get categories
    async function getcategories() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let response = await fetch(API_URL);
        let categorydata = await response.json();
        setmenucategory(categorydata.categories);
    }

    // Get single category
    async function getsinglecategories() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
        let response = await fetch(API_URL);
        let singledata = await response.json();
        setsinglecategorys(singledata.meals);
    }

    useEffect(() => {
        getcategories();
        getsinglecategories();
    }, []);

    let indexoflastdish = currentpage * itemsperpage;
    let indexoffirstdish = indexoflastdish - itemsperpage;
    let showthedishesnow = filtermenu.slice(indexoffirstdish, indexoflastdish);

    // Render single category dishes
    let maxitem = 12;
    let resultsinglecategory = singlecategory.map((item, index) => {
        if (maxitem > index) {
            return (
                <li key={item.idMeal} className=" xl:w-[200px] h-auto lg:w-[180px] md:w-[160px] w-[140px] mx-auto">
                <img 
                    src={item.strMealThumb} 
                    className="w-full h-[100px] object-cover rounded-lg" 
                    alt={item.strMeal} 
                />
                <h5 className="text-center md:text-lg cursor-pointer ">{item.strMeal}</h5>
            </li>
            );
        }
        return null;
    });

    // Show filtered dishes based on category
    function showfilterdDisheshandler(category) {
        setsinglecategorys([]);
        setactive(category);
        let showfiltereddishes = allmenus
            .filter((item) => item.strCategory === category)
            .map((menuitem) => {
                return <CardDishes key={menuitem.idMeal} menuitem={menuitem} />;
            });
        setfiltermenu(showfiltereddishes);
    }

    // Render categories
    let allCategories = menucategory.map((item) => {
        return (
            <li
                key={item.idCategory}
                
                className={`cursor-pointer px-4 py-2 rounded-md ${item.strCategory === active ? 'bg-[#dba607] text-white' : 'hover:bg-gray-200'}`}
                onClick={() => showfilterdDisheshandler(item.strCategory)}
            >
                {item.strCategory}
            </li>
        );
    });

    return (
        <div className="filtered-dishes font-mono h-full pt-8 m-auto max-w-full">
            <div className="container">
                <div className="text-center mb-8">
                    <h2 className="filtered-dishes-content text-3xl pb-4">Choose Your Dishes</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sint id voluptatibus explicabo dignissimos obcaecati!</p>
                </div>
                <div className='w-full h-auto'>
                    <div className=" mt-[60px] mb-8">
                        <ul className="flex flex-wrap justify-center xl:mx-12 md:mx-2 shadow-slate-200 shadow-md  text-lg gap-4">{allCategories}</ul>
                    </div>
                    <div className='h-auto w-full'>
                        <ul className=" w-full flex-wrap text-lg flex justify-center gap-4 ">
                            {resultsinglecategory}
                        </ul>
                    </div>
                    <div className="filtered-dishes-results w-full ">
                        
                        <ul className=" w-full flex-wrap text-lg flex justify-center gap-4 ">
                            
                            {resultsinglecategory !== 0 || filtermenu.length !== 0 ? 
                                showthedishesnow
                             : (
                                <div className="alert text-center">
                                    <h3 className="font-semibold text-xl">Sorry, no items found!</h3>
                                    <h4 className="text-gray-600">Please choose another dish category.</h4>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
                
                <Pagination filteredDishes={filtermenu} itemsperpage={itemsperpage} setcurrentpage={setcurrentpage} />
            </div>
            <hr className='w-full'/>
        </div>
    );
}

export default FilteredDishes;
