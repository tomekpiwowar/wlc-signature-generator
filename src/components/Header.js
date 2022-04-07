import { ReactComponent as Logo } from "../images/wlc-logo.svg";

function Header() {
  return (
    <div className="header">
      <Logo className="header__logo" />
      <h1 className="header__title">Signature Generator</h1>
    </div>
  );
}

export default Header;
