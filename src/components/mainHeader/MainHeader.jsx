import {useState} from "react";
import "./MainHeader.css";


const MainHeader = () => {
    let [open, setOpen] = useState(false);
    console.log(open);
    return (
        <header className="main_header">
            <div className="main_header_logo">
                <h1> Gpt 3 </h1>
            </div>

            <nav className="main_header_navlinks"
                style = {open ? {top: "0%"} : {top : "-200%"}}>
                <ul>
                    <li>
                        <a href=""></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>

                </ul>

            </nav>
            <div className="main_header_button">

            </div>

        </header>
    )
}
export default MainHeader;