import { ApplyButton, GreenButton, Logo } from "..";
import "./Header.scss";

const Header = (): JSX.Element => {
  return (
    <header className="Header">
      <img
        className="Header-pattern"
        src="images/bg-pattern-1.svg"
        alt="pattern-1"
      />
      <img
        className="Header-pattern2"
        src="images/bg-pattern-2.svg"
        alt="pattern-2"
      />
      <section className="Header-section">
        <div className="Header-div">
          <Logo />
          <ApplyButton>Apply for access</ApplyButton>
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
