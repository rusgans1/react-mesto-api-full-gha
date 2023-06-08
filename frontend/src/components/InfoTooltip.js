import React from "react";
import successIcon from "../images/success.svg";
import wrongIcon from "../images/wrong.svg";

function InfoTooltip({ onClose, isOpen, isSuccess }) {
  return (
    <section
      className={`popup ${isOpen && "popup_opened"}`}
      aria-label="Информационное окно"
    >
      <div className="popup__container info-tool__container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        >
        </button>
        <img
          className="info-tool__image"
          src={isSuccess ? successIcon : wrongIcon}
          alt={isSuccess ? "Успешно" : "Неправильно"}
        />
        <h2 className="popup__title info-tool__title">
          {isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз."}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;