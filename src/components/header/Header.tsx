import { GreenButton, Logo } from "..";
import "./Header.scss";

const Header = (): JSX.Element => {
  return (
    <header className="Header">
      <section className="Header-section">
        <div className="Header-div">
          <Logo />
          <p className="Header-p">Apply for access</p>
        </div>
        <article className="Header-article">
          <h1 className="Header-h1">
            Data <span className="Header-article-span">tailored</span> to you
            needs.
          </h1>
          <GreenButton>Learn More</GreenButton>
        </article>

        <figure className="Header-figure">
          <img
            className="Header-hero"
            src="images/image-hero.webp"
            alt="Phone Image"
          />
        </figure>
      </section>
    </header>
  );
};

export default Header;
