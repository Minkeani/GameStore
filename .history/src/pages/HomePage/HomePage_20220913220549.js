import React, { useEffect } from "react";
import GameItem from "../../components/GameItem/GameItem";
import "./HomePage.css";
import uniqid from "uniqid";
import Forza from "../../img/forza_5.jpeg";
import btfield from "../../img/battlefield_2042.jpg";
import lis from "../../img/life_is_strange_true_colors.jpeg";
import gta from "../../img/gta_v.jpeg";
import assasin from "../../img/assassins_creed_valhalla.png";
import raindow from "../../img/rainbow_siege.jpeg";
import metro from "../../img/metro.jpg";
import sims from "../../img/sims.jpeg";
import doom from "../../img/doom.jpg";

export default function HomePage() {
  const GAMES = [
    {
      image: Forza,
      title: "Forza Horizon 5",
      genres: ["Гонки", "Симулятор", "Открытый мир"],
      price: 2343,
      video: "https://www.youtube.com/embed/FYH9n37B7Yw",
      id: 1,
      description:
        "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
      image: btfield,
      title: "Battlefield 2042",
      genres: ["Экшен", "Шутер", "Война"],
      video: "https://www.youtube.com/embed/ASzOzrB-a9E",
      price: 2433,
      id: 2,
      description:
        "Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.",
    },
    {
      image: lis,
      title: "Life is Strange True Colors",
      genres: ["Глубокий сюжет", "Протагонистка"],
      video: "https://www.youtube.com/embed/b6CkzwVAr0M",
      price: 3021,
      id: 3,
      description:
        "Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.",
    },
    {
      image: gta,
      title: "Grand Theft Auto V",
      genres: ["Открытый мир", "Экшен"],
      video: "https://www.youtube.com/embed/QkkoHAzjnUs",
      price: 789,
      id: 4,
      description:
        "Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.",
    },
    {
      image: raindow,
      title: "Tom Clancy's Rainbow Six® Siege",
      video: "https://www.youtube.com/embed/6wlvYh0h63k",
      genres: ["Тактика", "Шутер"],
      price: 982,
      id: 5,
      description:
        "Tom Clancy's Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
    },
    {
      image: assasin,
      title: "Assassin’s Creed Valhalla",
      genres: ["Паркур", "РПГ", "Открытый мир"],
      video: "https://www.youtube.com/embed/ssrNcwxALS4",
      price: 2863,
      id: 6,
      description:
        "Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.",
    },
    {
      image: metro,
      title: "Metro 2033",
      genres: ["Шутер ", "От первого лица", "Стелс"],
      video: "https://www.youtube.com/embed/zIgwCgPbBKI",
      price: 2033,
      id: 7,
      description:
        "Компьютерная игра в жанре постапокалиптического шутера от первого лица с элементами survival horror и стелса, разработанная украинской студией 4A Games и изданная американской компанией THQ в марте 2010 года. Игра является интерпретацией одноимённого романа российского писателя Дмитрия Глуховского. По сюжету игры, произошла ядерная война, и оставшиеся в живых люди поселились в туннелях и станциях московского метрополитена. Главным героем является молодой выживший Артём, вынужденный спасать свою родную станцию от различных опасностей, таящихся в метро. ",
    },
    {
      image: sims,
      title: "The Sims",
      genres: ["Симулятор"],
      video: "https://www.youtube.com/embed/-8BU5D8auLw",
      price: 1984,
      id: 8,
      description:
        "Возможности творческого самовыражения, 2) возможностью демонстрировать и делиться созданным в игре контентом с другими фанатами 3) добавления в игру элементов юмора и сатиры. Игры серии The Sims наиболее приближены к жанру песочница, поскольку не имеют каких-либо определённых целей. Игрок создаёт виртуальных людей - «симов», помещает их в дома, следит за их настроением, помогает им удовлетворять потребности и исполнять желания. Игроки могут заселять симов в уже существующие дома или строить свои собственные. Каждые последующие дополнения и игры в серии расширяют возможности игроков, добавляя новые функции, предметы и миры для проживания симов.",
    },
    {
      image: doom,
      title: "Doom 3",
      genres: ["Шутер от первого лица", "Ужасы"],
      video: "https://www.youtube.com/embed/j8NaZZa54cs",
      price: 2004,
      id: 9,
      description:
        "Научно-фантастический шутер от первого лица, разработанный компанией id Software и изданный Activision в 2004 году. В России локализован и издан компанией 1С. Действие игры происходит в 2145 году в научно-исследовательском центре Объединённой аэрокосмической корпорации на Марсе. Doom 3 является первым перезапуском франшизы Doom.",
    },
  ];

  return (
    <div className="home-page">
      <div>
        {GAMES.map((game) => (
          <GameItem game={game} key={uniqid()} />
        ))}
      </div>

      <button>123</button>
    </div>
  );
}
