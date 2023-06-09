
import styles from './Card.module.scss';
import React from 'react';

function Card(props) {
  const [isAdded, setIsAdded] = React.useState();

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  React.useEffect(() => {
    console.log("Переменная изменяется")
  }, [isAdded]);

  console.log(props);
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/unliked.svg" alt="unliked" onClick={props.onFavorite}/>
      </div>

      <img
        width={133}
        height={112}
        src={props.imageUrl}
        alt="sneakers"
      />
      <h5>  {props.title } </h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/checked.svg": "/img/btn-plus.svg"} 
        alt="Plus"></img>
      </div>
    </div>
  );
}

export default Card;
