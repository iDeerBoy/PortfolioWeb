import React, { useState } from "react";
import { createContext } from "react";

export const ContextApp = createContext([])
export const ContextAppProvider = (props) => {
    const [darkState, setDarkState] = useState(true)
    const switchDark = () => setDarkState(!darkState)

    return <ContextApp.Provider value={{ darkState, switchDark}}> {props.children} </ContextApp.Provider>
}