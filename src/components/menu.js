import Heros from "./heros"
import SpecialDishes from "./SpecialDishes"
import FilteredDishes from "./FilteredDishes"
import {Allmenu} from "./Allmenucontext"
import Header from "./Header"
import About from "./About"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import { AppProvider } from "../context/AppProvider"
import Contact from "./Contact"
import Footer from "./Footer"
import Cart from "./Cart"
import LoginPage from "./LoginPage"
import OurOnlinePartners from "./OnlinePartners"
import Review from "./Review"

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
                                <OurOnlinePartners/>   
                                <Review/>                        
                                <Footer/>
                            
                            </Allmenu>}/>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/Checkout" element={<Cart/>} /> 
                            <Route path="/About" element={ <About/> }/>
                            <Route path="/Contact" element={ <Contact/> }/>
                            
                        </Routes>
                    
                </AppProvider>  
            </Router>    
        </div>       
    )
}
export default Menu