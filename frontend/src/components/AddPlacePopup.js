import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({ name, link });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="card-add"
      title="Добавление карточки"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__form">
        <input
          className="popup__input popup__input_title"
          type="text"
          id="title"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error title-error" id="error-title"></span>
        <input
          className="popup__input popup__input_link"
          type="url"
          id="link"
          name="link"
          placeholder="Ссылка на картинку"
          required
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__error link-error" id="error-link"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;