import { useContext } from "react"
import { themerout } from "./AuthApp"
// import { Button } from "antd"

const Navbar =({setTheme,onthemeclick}) => {
const theme=useContext(themerout)
    return (<div className={`navbar ${theme==="dark"?"dark":""}`}>
        <button className="material-icons btn" onClick={onthemeclick}>
        dark_mode
        </button>

        
    </div>)
}

export default Navbar;