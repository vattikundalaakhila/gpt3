import "./Feature.css";
import feature_img from "../../assets/feature_img.png";

const Feature = () => {
    return (
        <> 
        <section className="feature_section">
            <div className="feature_image">
                <img src={feature_img} alt="feature image" />

            </div>
            <div className="feature_image_content">
                <p className="p_one">Request early access to get started</p>
                <h3 className="gradient_text" >The possibities are beyond your imagination</h3>
                <p className="p_three">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p className="p_four">Request early access to get started</p>

            </div>
            
        </section>
        </>
    )
}
export default Feature; 
