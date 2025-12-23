
import "./client.css";
import  client_img1 from "../../assets/google.png";
import  client_img2 from "../../assets/slack.png";
import  client_img3 from "../../assets/atlassian.png";
import  client_img4 from "../../assets/dropbox.png";
import  client_img5 from "../../assets/shopify.png";



const Client = () =>{
    return(
    <>
    <div className="client_images">
    <img src={client_img1} alt="google" />
    <img src={client_img2} alt="slack"/>
    <img src={client_img3} alt="atlassian" />
    <img src={client_img4} alt="dropbox"/>
    <img src={client_img5} alt="shopify" />
    

    </div>

    </>
    );


}
export default Client;