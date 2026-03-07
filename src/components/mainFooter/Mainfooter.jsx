import "./MainFooter.css";

const MainFooter = () => {
  return (
    <>
      <footer className="footer_section">

        <div className="footer_left">
          <h1>GPT-3</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="footer_middle">
          <p className="footer_title">Links</p>
          <ul>
            <li><a href="#">Overons</a></li>
            <li><a href="#">Social Media</a></li>
            <li><a href="#">Counters</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer_right">
          <p className="footer_title">Company</p>
          <ul>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer_contact">
          <p className="footer_title">Get In Touch</p>
          <ul>
            <li><a href="#">Crechterwoord K12 182 DK Alknjkcb</a></li>
            <li><a href="#">085-132567</a></li>
            <li><a href="#">info@payme.net</a></li>
          </ul>
        </div>

      </footer>

      <div className="footer_bottom">
        <p>2025 GPT-3. All rights reserved.</p>
      </div>
    </>
  );
};

export default MainFooter;