import React from 'react';
import BigTitle from '../Ui/BigTitle/BigTitle';
import Title from '../Ui/Title/Title';
import P from '../Ui/P/P';
import './Support.css'

const Support = () => {
    return (
        <div>
            <BigTitle>Поддержка</BigTitle>
            <Title>Поддержка: <a target='blank' href='https://t.me/minkeani'>https://t.me/minkeani</a> </Title>
            <P>
            Время ответа до 24ч.
            <br/>
Среднее время ответа - 4ч.
            </P>
            <P>
            Пример обращения:
Купил "Название товара" Дата: число\месяц. Проблема состоит в "описание проблемы". Прикрепите скриншот личного кабинета (JULIKSTORE.RU/USER) с видимым ID и скрин вашей проблемы.
            </P>
        </div>
    );
}

export default Support;
