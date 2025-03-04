import FooterApps from "@/components/FooterApps.tsx";
import FooterCaption from "@/components/FooterCaption.tsx";
import ScrollToTopBtn from "@/components/ScrollToTopBtn.tsx";
import FooterListWrapper from "@/components/FooterListWrapper.tsx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ScrollToTopBtn />
        <div className="footer__wrapper">
          <FooterCaption />
          <FooterListWrapper />
          <FooterApps />
        </div>
        <p className="footer__copy-right">© 2020. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
