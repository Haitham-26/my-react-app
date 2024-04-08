import "../css/footer.css";
export default function Footer() {
  return (
    <footer>
      <section>
        <div className="footer-logo">
          <img
            src={require("../img/kira.jpg")}
            alt="kira"
            className="footer-logo-100"
          />
        </div>
      </section>
      <section className="lnks-sec">
        <div className="lnks">
          <div className="social">
            <h2>Links</h2>
            <span>
              <a href="#">Instagram</a>
            </span>
            <span>
              <a href="#">Instagram</a>
            </span>
            <span>
              <a href="#">Instagram</a>
            </span>
          </div>
          <div className="contact">
            <h2>Addresses</h2>
            <span className="light">Turkey- Istanbul</span>
          </div>
        </div>
      </section>
    </footer>
  );
}
