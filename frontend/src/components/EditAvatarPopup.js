import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar-change"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__form">
        <input
          className="popup__input popup__input_link"
          type="url"
          id="avatar-link"
          name="avatar"
          placeholder="Ссылка на картинку"
          ref={avatarRef}
          required
        />
        <span className="popup__error avatar-link-error" id="error-avatar-link"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;