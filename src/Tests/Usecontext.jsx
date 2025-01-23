import React,{ useState,createContext } from "react";

export const Usercontext = createContext();
function Use() {

    const [user, setuser] = useState("Guest");

    return (
        <Usercontext.Provider value={user}>
        </Usercontext.Provider>
    );
}
export default Use