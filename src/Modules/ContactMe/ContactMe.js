import "./ContactMe.css";

function ContactMe() {
  return (
    <div className="ContactMe">
      <div className="ContactMeTitle">Send Me a Message!</div>
      <div className="ContactMeSubtitle">
        Have a project in mind or just want to say hi? I'd love to hear form
        you!
      </div>
      <div className="ContactMeLinks">
        <div className="ContactMeResume">
          Resume
          <div className="ContactMeDowloadResume">Dowload Resume</div>
        </div>
        <div className="ContactMeContact">
          Contact
          <div className="ContactMeMethod">
            <div className="ContactIcon"></div>
            <div className="ContactText">
              <a href="mailto:piqulsky@gmail.com">piqulsky@gmail.com</a>
            </div>
          </div>
          <div className="ContactMeMethod">
            <div className="ContactIcon"></div>
            <div className="ContactText">
              <a href="https://www.linkedin.com/in/piqulsky/">/in/piqulsky/</a>
            </div>
          </div>
        </div>
        <div className="ContactMeLocation">
          Location
          <div className="ContactMeMethod">
            <div className="ContactText">
              <a href="https://maps.app.goo.gl/d5DTJiMsaYXnpj7g7">
                Breda, Netherlands
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
