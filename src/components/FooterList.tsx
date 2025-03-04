// Types
interface Props {
  listTitle: string;
  listDataArray: string[];
}

const FooterList = ({ listDataArray, listTitle }: Props) => {
  return (
    <div className="footer-list">
      <h3 className="footer__title">{listTitle}</h3>
      <ul className="footer-pages">
        {listDataArray.map((item: string, i: number) => (
          <li className="footer-pages__item" key={i}>
            <a href={`/${item}`} className="footer-pages__link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
