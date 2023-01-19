import s from "./Header.module.scss";

function Header() {
  return <div className={s.header}>
    <div className={s.container}>
      <div className={s.logoWrapper}>
        Keeper
      </div>
    </div>
  </div>;
}

export default Header;
