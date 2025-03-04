import FooterList from "@/components/FooterList.tsx";

const contactUs: string[] = [
  "About Us",
  "Rules & Reservation Policies",
  "Accessibility",
  "Media Center",
  "Site Map",
];
const planing: string[] = [
  "Find Trip Inspiration",
  "Build a Trip",
  "Buy a Pass",
  "Enter a Lottery",
];
const helpYou: string[] = [
  "Your Account",
  "Your Reservations",
  "Contact Us",
  "Help Center",
  "Submit Feedback",
];

const FooterListWrapper = () => {
  return (
    <div className="footer-pages-wrapper">
      <FooterList listTitle={"Get to Know Us"} listDataArray={contactUs} />
      <FooterList listTitle={"Plan with Us"} listDataArray={planing} />
      <FooterList listTitle={"Let Us Help You"} listDataArray={helpYou} />
    </div>
  );
};

export default FooterListWrapper;
