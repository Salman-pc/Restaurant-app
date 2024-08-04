import { useEffect,useState } from "react"
import React from "react"
import Iphone from "../asetes/Iphone-spinner-2.gif"



export const Allmenucontexts = React.createContext()

export const Allmenu = (props)=>{
    //state
    let [menu,setmenu]=useState([])
    let [loading,setloading]=useState(false)
    
    //Api
    async function  getmenu(){
        setloading(true)

        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response=await fetch(API_URL)
        let data=await response.json()
        setmenu(data.meals) 

        setloading(false)
       }

       useEffect(()=>{ 
        getmenu()   
     } ,[])  

    return(
        <Allmenucontexts.Provider value={menu}>
            {!loading ? props.children : (<div className="loader z-20"> <img src={Iphone} className="loader-img"/>
              <h2 className="font-serif text-2xl">Loading...</h2>
            </div>)}
            
        </Allmenucontexts.Provider>
    )
}
