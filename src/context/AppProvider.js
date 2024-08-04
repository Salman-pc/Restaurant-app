import { createContext, useReducer } from "react"

const Dispatchcontext = createContext()
const Statecontext= createContext()

const AppProvider = ({children})=>{

    const intialstate={
        cartitem :[]
    }

    const reduce =(state,action)=>{
        console.log("action",action)
        switch(action.type){
            case "addtocart":
            return {...state,cartitem:[...state.cartitem,action.payload]}
            default :
           return state
        }
    }

    const[state,dispatch]=useReducer(reduce,intialstate)

    return(
        <Dispatchcontext.Provider value={dispatch}>
            <Statecontext.Provider value={state}>
                {children}
            </Statecontext.Provider>
        </Dispatchcontext.Provider>
    )
}
export {AppProvider,Dispatchcontext,Statecontext}