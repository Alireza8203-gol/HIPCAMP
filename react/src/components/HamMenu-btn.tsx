type HamMenuBtnProps = {
  isOpen: boolean;
  onClick: () => void;
};
const HamMenuBtn = ({ onClick, isOpen }: HamMenuBtnProps) => {
  return (
    <div className={`nav__btn ${isOpen && "nav__btn--open"}`} onClick={onClick}>
      <span className="nav__btn-line"></span>
    </div>
  );
};

export default HamMenuBtn;
