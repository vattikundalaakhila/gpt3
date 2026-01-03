import "./Access.css";

const items = [
  {
    header: "Improving end distrusts instantly",
    para: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    header: "Become the tended active",
    para: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    header: "Message or am nothing",
    para: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    header: "Really boy law county",
    para: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

const Access = () => {
  return (
    <section className="access_section">
      <header className="access_section__left">
        <h2 className="gradient_text">
          The Future is Now and You Just Need To Realize It.
          Step into Future Today & Make it Happen.
        </h2>
        <a href="#">Request Early Access to get Started</a>
      </header>
      <div className="access_section__cards">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="gradient_line">
              <span />
              {item.header}
            </h3>
            <p>{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Access;