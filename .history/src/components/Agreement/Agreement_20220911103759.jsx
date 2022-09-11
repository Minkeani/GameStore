import React from "react";
import Title from "../Ui/Title/Title";
import BigTitle from "../Ui/BigTitle/BigTitle";
import P from "../Ui/P/P";
import "./Agreement.css";

const Agreement = () => {
  return (
    <div>
      <BigTitle>Пользовательское соглашение</BigTitle>
      <Title>Термины и определения</Title>
      <P>
        Заказ - запрос Покупателя на получение Товара, оформленный в
        соответствии с требованиями Сайта. Покупатель - физическое лицо, либо
        оформляющее Заказы на сайте, либо использующее приобретенные на сайте
        Товары. Цифровой товар - лицензионный электронный ключ или аккаунт
        программного продукта.
      </P>
    </div>
  );
};

export default Agreement;
