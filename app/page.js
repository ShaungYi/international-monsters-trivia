'use client'
import store from "@/store/store";
import { Provider } from "react-redux";
import Home from "./Home";


export default function Page(){
    return(
        <Provider store={store}>
            <Home/>
        </Provider>
    )
}