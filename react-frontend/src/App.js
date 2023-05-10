function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/mainlogo.png" />
          <div>
            <h3 className="text-uppercase">Barhat Sneakers</h3>
            <p className="opacity-5">Магазин одежды и обуви</p>
          </div>
        </div>

        <ul className="d-flex align-center P-40">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.png" />
            <span>1205 руб.</span>
          </li>

          <li>
            <img width={20} height={20} src="/img/user.png" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все товары</h1>
        <div className="products d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/products/Nike Blazer Mid Suede Green.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/products/Nike Blazer Mid Suede Green.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/products/Nike Blazer Mid Suede Green.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/products/Nike Blazer Mid Suede Green.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
