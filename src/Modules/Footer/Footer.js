import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="BackToTop">
        <img
          className="BackToTopImage"
          src={process.env.PUBLIC_URL + "/arrowup.png"}
        ></img>
        <div className="BackToTopText">
          <a href="#top">Back To Top</a>
        </div>
      </div>
      <div className="FooterContent">
        <div className="CopyrightName">© Michał Pikulski</div>
        <div className="CopyrightLaws">
          All content and trademarks property of their respective owners. /
          Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </div>
  );
}

export default Footer;
