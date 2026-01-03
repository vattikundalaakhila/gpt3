import "./About.css"

const About = ()=>{
    // listing and key
    let data = [
        {
            id: "card_1",
            title: "Chatbots",
            p: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "

        },
        {
            id: "card_2",
            title: "Knowledgebase",
              p: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b "
        }
        ,
        {
      id: "card_3",
      title: "Education",
      p: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b ",
    },
    ];
    return(
        
    <section className="about_section">
      <div className="top_circle" />
      <header>
        <h2 className="gradient_line">
          <span />
          What is Gpt?
        </h2>
        <p>
          We so opinion friends me message as delight. Whole
          front do of plate heard oh ought. His defective
          nor convinced residence own. Connection has put
          impossible own apartments boisterous. At jointure
          ladyship an insisted so humanity he. Friendly
          bachelor entrance to on by.
        </p>
      </header>
      <div className="about_section__center">
        <h3 className="gradient_text">
          The possibilities are beyond <br /> your
          imagination
        </h3>
        <a href="#">Explore the Library</a>
      </div>
      <div className="about_section__cards">
        {data.map((items) => (
          <div>
            <h4 className="gradient_line">
              <span />
              {items.title}
            </h4>
            <p>{items.p}</p>
          </div>
        ))}
      </div>
      <div className="bottom_circle" />
    </section>
  );
};

export default About;