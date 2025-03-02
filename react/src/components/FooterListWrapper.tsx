import FooterList from "@/components/FooterList.tsx";

const contactUs: string[] = [
  "About Us",
  "Site Map",
  "Media Center",
  "Accessibility",
  "Rules & Reservation Policies",
];
const planing: string[] = [
  "Buy a Pass",
  "Build a Trip",
  "Enter a Lottery",
  "Find Trip Inspiration",
  "Rules & Reservation Policies",
];
const helpYou: string[] = [
  "Contact Us",
  "Help Center",
  "Your Account",
  "Submit Feedback",
  "Your Reservations",
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
