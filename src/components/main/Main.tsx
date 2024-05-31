import { GreenButton } from "..";
import "./Main.scss";

interface Products {
  number: number;
  title: string;
  text: string;
}

const ListProducts: Products[] = [
  {
    number: 1,
    title: "Actionable insights",
    text: `Optimize your products, improve customer satisfaction and stay
    ahead of the competition with our product data analytics.`,
  },

  {
    number: 2,
    title: "Data-driven decision",
    text: `Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.`,
  },

  {
    number: 3,
    title: "Always affordable",
    text: `Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.`,
  },
];

const Main = (): JSX.Element => {
  return (
    <main className="Main">
      <section className="Main-seccion1">
        <div className="Main-div">
          <ul className="Main-ul">
            {ListProducts?.map(({ number, title, text }) => (
              <li className="Main-li" key={number}>
                <article className="Main-ul-article">
                  <div className="Main-ul-article-circle">
                    <p className="Main-ul-article-number">{number}</p>
                  </div>
                  <h2 className="Main-ul-article-h2">{title}</h2>
                  <p className="Main-ul-article-p">{text}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="Main-seccion2">
        <figure className="Main-seccion2-figure">
          <img
            className="Main-seccion2-img"
            src="images/image-founder.webp"
            alt="image of the founder"
          />
        </figure>
        <article className="Main-seccion2-article">
          <h3 className="Main-seccion2-h3">Be the first to test</h3>
          <p className="Main-seccion2-p">
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </p>
          <GreenButton> Apply for access </GreenButton>
        </article>
      </section>
    </main>
  );
};

export default Main;
