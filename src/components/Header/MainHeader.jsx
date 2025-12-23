import {useState} from "react";
import "./MainHeader.css";

const MainHeader = () => {
  let [open, setOpen] = useState(false);
  console.log(open);
  
  return(
    <header className="main_header layout">
      <div className="main_header_logo">
        <h1>Gpt 3</h1>

      </div>
      <nav className="main_header_navlinks"
      style={open? {top: "0%"}:{top : "-200%"}}>

        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">What is Gpt?</a>
          </li>
          <li>
            <a href="">OpenAI</a>
          </li>
          <li>
            <a href="">Library</a>
          </li>
        </ul>

      </nav>
    

      <div className="main_header_button">
        <button  type="button" className="pry_btn">Sign In</button>
        <button  type ="button" className="pry_btn active">Sign Up</button>
         
      </div>
      <button className="hamburger_menu" onClick= { () => setOpen(!open)}>
        {open? "close" : "menu"}
      </button>


    </header>

  )

 
}

export default MainHeader;
