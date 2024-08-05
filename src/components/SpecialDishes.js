import { useContext, useState } from "react";
import CardDishes from "./CardDishes";
import Popup from "./Popup";
import { Allmenucontexts } from "./Allmenucontext";
import Addtocart from "./Addtocart";

function SpecialDishes(props){

    let allmenu = useContext (Allmenucontexts)

    let [curentdishname,setcurentdishname]=useState('')
    let [showpoup,setshowpoup]=useState(false)
    let [addtocartitem,setaddtocartitem]=useState([])

      //show the popup
    function showpouphandler(dishname){
        setshowpoup(true)
        setcurentdishname(dishname)  
       } 
    
    //close popup
    function closepouphandular(){
        setshowpoup(false)
      }
      //pegenation
    let maxspecialDishes=24;
    let specialMenus = allmenu.map((menuitem,index)=>
    {
        if(index<maxspecialDishes){
            return(  
                  <CardDishes menuitem={menuitem} showpoupfn={showpouphandler} />
            )
        }    
    })

    //addto cart-> popup
    function addtocarthandular(addtocartimg,addtocarttitle){
        setaddtocartitem([
            ...addtocartitem,
            {
            "img":addtocartimg,
            "title":addtocarttitle
        }])   
    }
    
    return(
        <section className=" w-full h-auto">
            {showpoup && <Popup 
            closepopup={closepouphandular} 
            curentdishname={curentdishname}
            addtocarthandular={addtocarthandular}
            /> }
            <div className=" w-full h-auto items-center justify-center">
                {/* <Addtocart
                addtocartitem={addtocartitem}
                /> */}
                <div className=" text-center">
                    <h2 className="text-3xl pb-5">Our Special Dishes</h2>
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum itaque, qui recusandae tempore vel sit ullam tempora, voluptatibus perferendis dignissimos incidunt excepturi praesentium, consequuntur odio.</p>
                </div >

                <div className="w-full h-auto mt-10 ">
                    <ul className="flex flex-wrap justify-center w-full h-auto xl:gap-9 lg:gap-6 md:gap-4 gap-3  "> 
                       {specialMenus}
                    </ul>
                </div>
            </div>   
        </section>
    )
}
export default SpecialDishes