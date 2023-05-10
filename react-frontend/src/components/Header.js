function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/mainlogo.png" />
        <div>
          <h3 className="text-uppercase">Barhat Market</h3>
          <p className="opacity-5">Лучший магазин одежды и обуви</p>
        </div>
      </div>

      <ul className="d-flex align-center P-40">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.png" alt="Cart" />
          <span>1205 руб.</span>
        </li>

        <li>
          <img width={20} height={20} src="/img/user.png" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
