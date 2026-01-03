import "./Banner.css";
import bg_img from "../../assets/image1.png"
import people_img from "../../assets/Ellipse 33.png"
import people_img2 from "../../assets/Ellipse 35.png"
import people_img3 from "../../assets/Ellipse 36.png"
import people_img4 from "../../assets/Ellipse 31.png"
import people_img5 from "../../assets/Ellipse 32.png"
import people_img6 from "../../assets/Ellipse 34.png"



const Banner = () => {
  return (
    <>
    <section className="banner_section layout">
      <div className="banner_section_left">
        <h1 className="gradient_text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence
          unpleasing. Not thoughts all exercise blessing.
          Indulgence way everything joy alteration
          boisterous the attachment. Party we years to order
          allow asked of. </p>
        <div>
          <input type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
          />
          <button className="pry_btn active">Get Started</button>

        </div>

    <div className="banner_section_bottom">
      <img src= {people_img} alt="person"/>
      <img src= {people_img2} alt="person"/>
      <img src= {people_img3} alt="person"/>
      <img src= {people_img4} alt="person"/>
      <img src= {people_img5} alt="person"/>
      <img src= {people_img6} alt="person"/>
      
      <p className="p_img">1.6k</p>
      <p className="p_tag">1,600 people requested access a visit in last 24 hours. </p>
      


    </div>
      </div>
      <div className="banner_section_right">
        <img src={bg_img} alt="bg_img" /></div>
    </section>
    </>
  
  )
}

export default Banner;

