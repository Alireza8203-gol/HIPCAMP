//  Types
interface Props {
  isMobileMenu: boolean;
}

const linkArray = [
  "Home",
  "Destination",
  "Near me",
  "Events",
  "Blog",
  "Gallery",
  "About",
  "Contact us",
];
const MenuList = ({ isMobileMenu }: Props) => {
  return (
    <>
      {linkArray.map((item: string, index: number) => (
        <li
          key={index}
          className={isMobileMenu ? "mobile-menu__item" : "menu__item"}
        >
          <a
            href="#"
            className={isMobileMenu ? "mobile-menu__link" : "menu__link"}
          >
            {item}
          </a>
        </li>
      ))}
    </>
  );
};

export default MenuList;
