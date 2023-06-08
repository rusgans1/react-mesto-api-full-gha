import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner !== currentUser._id;
  const cardTrashBtnClass = `element__button-trash ${
    isOwn && "element__button-trash_inactive"
  }`;

  const isLiked = card.likes.some((i) => i === currentUser._id);
  const likeDeleteBtnClass = `element__button-like ${
    isLiked && "element__button-like_active"
  }`;

  return (
    <article className="element">
      <img
        className="element__pic"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <button 
        className={cardTrashBtnClass} 
        type="button" 
        aria-label="Удалить"
        onClick={handleDeleteClick}
      >
      </button>
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button
            className={likeDeleteBtnClass}
            type="button"
            aria-label="Поставить лайк"
            onClick={handleLikeClick}
          >
          </button>
          <p className="element__counter-likes">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;