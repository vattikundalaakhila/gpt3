import "./Blog.css";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import four from "../../assets/four.png";
import five from "../../assets/five.png";
const blogCards = [
    {
        id: "post-001",
        img: one,
        date: "Sep 26, 2021",
        title:
            "GPT-3 and Open AI is the future. Let us explore how it is?",
        button: "Read More",
    },
    {
        id: "post-002",
        img: two,
        date: "Sep 27, 2021",
        title:
            "GPT-3 and Open AI is the future. Let us explore how it is?",
        button: "Read More",
    },
    {
        id: "post-003",
        img: three,
        date: "Sep 28, 2021",
        title:
            "GPT-3 and Open AI is the future. Let us explore how it is?",
        button: "Read More",
    },
    {
        id: "post-004",
        img: four,
        date: "Sep 29, 2021",
        title:
            "GPT-3 and Open AI is the future. Let us explore how it is?",
        button: "Read More",
    },
    {
        id: "post-005",
        img: five,
        date: "Sep 30, 2021",
        title:
            "GPT-3 and Open AI is the future. Let us explore how it is?",
        button: "Read More",
    },
];

const Blog = () => {
    return (
        <section className="blog_section">
            <header>
                <h2 className="gradient_text">
                    A lot is happening, <br />
                    We are blogging about it.
                </h2>
            </header>
            <div className="blog_section__grid">
                {blogCards.map((item) => (
                    <div
                        key={item.id}
                        className={`blog__grid_card blog_${item.id}`}>
                        <div className="triangle" />
                        <div>
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                width={200}
                                height={300}
                            />
                            <div className="blog_card_content">
                                <p>{item.date}</p>
                                <h4>{item.title}</h4>
                                <a href="#">Read Full Article</a>
                            </div>


                        </div>

                    </div>
                ))}
            </div>
        </section>
    );

}
export default Blog;