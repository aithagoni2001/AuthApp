import { createContext, useContext, useRef, useState } from "react";
import Signup from "./signup.js"
import Auth from "./Auth.js";
import Login from "./Login.js"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar.js"
import Notfound from "./notfound.js"
export const themerout = createContext("abc")

const AuthApp = () => {

    const Authref = useRef(new Auth());
    const [theme, setTheme] = useState("light")
 const onthemeclick =()=>{
        setTheme((theme)=>{ return theme==="light"?"dark":"light"})
    }
    return <>

        {/* {showlogin? <Login auth={Authref.current} setLogin={setLogin} /> : <Signup auth={Authref.current} setLogin={setLogin} />} */}

        <themerout.Provider value={theme}>
            <Navbar setTheme={setTheme} onthemeclick={onthemeclick} />
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login auth={Authref.current}  />} />
                    <Route path="signup" element={<Signup auth={Authref.current} />} />
                    <Route path="*" Component={Notfound}/>
                </Routes>
            </BrowserRouter>
        </themerout.Provider>
    </>
}
export default AuthApp;




  




