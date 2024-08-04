import Heros from "./heros"
import SpecialDishes from "./SpecialDishes"
import FilteredDishes from "./FilteredDishes"
import {Allmenu} from "./Allmenucontext"
import Header from "./Header"
import Checkoout from "./Checkout"
import About from "./About"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import { AppProvider } from "../context/AppProvider"
import Contact from "./Contact"
import Footer from "./Footer"


function Menu(){
   
    return(
        <div className="font-mono">    
            <Router>
                <AppProvider>
                    <Header/>        
                        <Routes>
                            <Route path="/" element={ <Allmenu>
                                <Heros/>  
                                <SpecialDishes />            
                                <FilteredDishes />
                                <About/>
                                <Contact/>
                                <Footer/>
                            
                            </Allmenu>}/>
                            <Route path="/Checkout" element={<Checkoout/>} /> 
                        </Routes>
                    
                </AppProvider>  
            </Router>    
        </div>       
    )
}
export default Menu