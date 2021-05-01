import { useSelector } from "react-redux";
import { MdCode } from "react-icons/md";

import "./header.scss";
import { userScoreSelector } from "../../redux/user";

function Header() {
  const score = useSelector(userScoreSelector);
  return (
    <header className="header">
      <div className="container header__content">
        <MdCode size="3rem" className="header__logo" />
        <b className="header__score">
          <span data-testid="score">{score} ~ score</span>
        </b>
      </div>
    </header>
  );
}

export default Header;
