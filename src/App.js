import {useMemo,useRef,useCallback,useEffect,useState,useContext,useReducer} from "react"
import * as React from "react"
const initialValue = {user:{name:"Devesh"},other:{name:"singh"}}

const UserContext = React.createContext(initialValue.user)

const OtherContext = React.createContext(initialValue.other)

const reducer = (state,action) => {
    switch(action){
        case "inc": return {...state,count:state?.count + 1}
        case "dec" : return {...state,count:state?.count -1}
        default : return {...state}
    }
}

const a = ""

const useToast = () => {
    const [value,setValue] = useState(a.value)

    useEffect(() => {
        const s = a.subscribe((v) =>setValue(v));
        return () => s.unsubscribe()
    })

    return [value]
}


const App = React.memo(() => {
    const [count,setCount] = useState()
    const [value,dispatch] = useReducer(reducer,initialValue)
    const nameRef = useRef(null)
    const avalue = useMemo((value) => {return value/2},[count])
    const aCom = useCallback(() => {},[])
    const [a] = useToast();
    useEffect(() => {
        dispatch("inc")
        const foo = async() => {
            await fetch("").then(e => e.json()).then(e => console.log(e)).catch(e => console.error(e))
        }
        foo()
        let s = window.addEventListener('mousemove',() => {})

        return () => {window.removeEventListener("mousemove",() => {})}
    },[])

    return <>
        <div>React Boiler Plate with script :- .</div>
        <UserContext.Provider value={initialValue.user} >
            <OtherContext.Provider value={initialValue.other}>
                <Child />
            </OtherContext.Provider>
        </UserContext.Provider>
    </>
})
const Child = () => {
    const user = useContext(UserContext)
    const ot = useContext(OtherContext)
    return <div>
      {user?.name} + {ot?.name}
    </div>
}
export default App