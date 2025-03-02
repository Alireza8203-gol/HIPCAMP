import appStoreImg from "@/assets/Images/app-store-apple.jpg";
import googlePlayImg from "@/assets/Images/google-play.jpg";

const FooterApps = () => {
  return (
    <div className="footer-app">
      <h3 className="footer__title">Download Our App</h3>
      <a href="" className="footer-app__link">
        <img
          className="footer-app__img"
          src={appStoreImg}
          alt="Download-app-app-store"
        />
      </a>
      <a href="" className="footer-app__link">
        <img
          className="footer-app__img"
          src={googlePlayImg}
          alt="Download-app-google-play-store"
        />
      </a>
    </div>
  );
};

export default FooterApps;
