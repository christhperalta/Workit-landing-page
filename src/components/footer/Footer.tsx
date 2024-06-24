import { Logo } from "..";
import "./Footer.scss";

interface FooterProps {
  img: string;
  name: string;
}

const socialArr: FooterProps[] = [
  { img: "./images/icon-facebook.svg", name: "facebook" },
  { img: "./images/icon-instagram.svg", name: "instagram" },
  { img: "./images/icon-twitter.svg", name: "twitter" },
];

const Footer = (): JSX.Element => {
  return (
    <footer className="Footer">
      <div className="Footer-div">
        <div className="Footer-logo-container">
          <Logo dark />
        </div>
        <ul className="Footer-ul">
          {socialArr.map(({ img, name }) => (
            <li className="Footer-li" key={name}>
              <a className="Footer-a" href="#">
                <img className="Footer-img" src={img} alt={name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
