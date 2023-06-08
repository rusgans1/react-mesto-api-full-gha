import React, { useContext } from "react";
import Card from "./Card";
import editBtnIcon from "../images/edit-button.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onChangeAvatar,
  onAddCard,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile" aria-label="Профиль">
        <div className="profile__content">
          <div className="profile__avatar-block">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Аватар"
            />
            <div className="profile__avatar-overlay" onClick={onChangeAvatar}>
              <img
                className="profile__overlay-icon"
                src={editBtnIcon}
                alt="Редактировать Аватар"
              />
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__button-edit"
                type="button"
                aria-label="Редактировать профиль"
                onClick={onEditProfile}
              >
              </button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Добавить карточку"
          onClick={onAddCard}
        >
        </button>
      </section>

      <section className="elements" aria-label="Галерея">
        {cards.map((item) => {
          return (
            <Card
              key={item._id}
              card={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;