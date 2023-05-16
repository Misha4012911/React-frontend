import React from 'react';
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

const arr =[{ name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: "img/products/Nike Blazer Mid Suede Green.jpg"}, 
{ name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, img: "img/products/Nike Air Max 270.jpg"}, 
{ name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, img: "img/products/Nike Blazer Mid Suede White.jpg"},
{ name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999 , img: "img/products/Puma X Aka Boku Future Rider.jpg"}];


function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      
      {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все товары</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Поиск..."></input> 
          </div> 
        </div> 

        <div className="products d-flex">
          {arr.map((obj) => (
            <Card 
            title = {obj.name} 
            price = {obj.price} 
            imageUrl = {obj.img} 
            onFavorite={() => console.log('добавили в избранное')}
            onPlus={() => console.log(obj)}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
