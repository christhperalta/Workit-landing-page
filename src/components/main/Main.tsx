import React, { useEffect, useRef } from "react";
import { GreenButton } from "..";
import "./Main.scss";

interface Products {
  number: number;
  title: string;
  text: string;
}

interface ProductsListPrpos {
  listProducts: Products[];
}

const ProductData: Products[] = [
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
  const elementsRef = useRef<NodeListOf<Element> | null>(null);

  const handleCallback = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove("Main-el-hidden");
  };

  useEffect(() => {
    elementsRef.current = document.querySelectorAll(".Main-el-hidden");

    const observer = new IntersectionObserver(handleCallback, {
      root: null,
      threshold: 0.1,
    });

    elementsRef.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      if (elementsRef.current) {
        elementsRef.current.forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  return (
    <main className="Main">
      <section className="Main-seccion1">
        <ListProducts listProducts={ProductData} />
      </section>
      <Card />
    </main>
  );
};

const ListProducts: React.FC<ProductsListPrpos> = ({ listProducts }) => {
  return (
    <ul className="Main-ul Main-el-hidden">
      {listProducts?.map(({ number, title, text }) => (
        <ProductItem key={number} number={number} title={title} text={text} />
      ))}
    </ul>
  );
};

const ProductItem: React.FC<Products> = ({ number, title, text }) => {
  return (
    <li className="Main-li  ">
      <div className="Main-ul-article-circle">
        <p className="Main-ul-article-number">{number}</p>
      </div>
      <article className="Main-ul-article">
        <h2 className="Main-ul-article-h2">{title}</h2>
        <p className="Main-ul-article-p">{text}</p>
      </article>
    </li>
  );
};

const Card = (): JSX.Element => {
  return (
    <section className="Main-seccion2 Main-el-hidden">
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
        <GreenButton>Apply for access</GreenButton>
      </article>
      <img
        className="Main-pattern3"
        src="images/bg-pattern-3.svg"
        alt="pattern-3"
      />
    </section>
  );
};

export default Main;
