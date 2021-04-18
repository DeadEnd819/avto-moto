import Imag1 from './assets/img/avto-1.jpg';
import Imag2 from './assets/img/avto-2.jpg';
import Imag3 from './assets/img/avto-3.jpg';
import ImagWebp1 from './assets/img/avto-1.webp';
import ImagWebp2 from './assets/img/avto-2.webp';
import ImagWebp3 from './assets/img/avto-3.webp';
import ImagSmall1 from './assets/img/avto-1-small.jpg';
import ImagSmall2 from './assets/img/avto-2-small.jpg';
import ImagSmall3 from './assets/img/avto-3-small.jpg';
import ImagSmallWebp1 from './assets/img/avto-1-small.webp';
import ImagSmallWebp2 from './assets/img/avto-2-small.webp';
import ImagSmallWebp3 from './assets/img/avto-3-small.webp';

export const HEADER_NAV_LINKS = [
  `Автомобили`,
  `Контакты`,
  `Услуги`,
  `Вакансии`,
];

export const FOOTER_NAV_LINKS = [
  `Корпоративным клиентам`,
  `Клиентам`,
  `Аренда авто`,
  `Каршеринг`,
  `Как продать авто`,
  `Traid-in`,
  `Test draiv`,
];

export const RATING_STARS = [`1`, `2`, `3`, `4`, `5`];

export const POPUP_INPUTS = [
  {
    id: `name`,
    title: `Имя`,
    required: true
  },
  {
    id: `dignity`,
    title:`Достоинства`,
    required: false
  },
  {
    id: `limitations`,
    title:`Недостатки`,
    required: false
  }
  ];

export const TabNames = {
  FEATURE: `Характеристики`,
  REVIEWS: `Отзывы`,
  CONTACTS: `Контакты`
};

export const IMAGES = [
  {
    big: Imag1,
    bigWebp: ImagWebp1,
    small: ImagSmall1,
    smallWebp: ImagSmallWebp1
  },
  {
    big: Imag2,
    bigWebp: ImagWebp2,
    small: ImagSmall2,
    smallWebp: ImagSmallWebp2
  },
  {
    big: Imag3,
    bigWebp: ImagWebp3,
    small: ImagSmall3,
    smallWebp: ImagSmallWebp3
  },
];

export const DETAILS = [
  {
    name: `fuel`,
    value: `бензин`
  },
  {
    name: `transmission`,
    value: `механика`
  },
  {
    name: `horsepower`,
    value: `100 л.с.`
  },
  {
    name: `volume`,
    value: `1.4 л`
  },
];

export const FEATURES = [
  {
    name: `Трансмиссия`,
    value: `Роботизированная`
  },
  {
    name: `Мощность двигателя, л.с.`,
    value: `249`
  },
  {
    name: `Тип двигателя`,
    value: `Бензиновый`
  },
  {
    name: `Привод`,
    value: `Полный`
  },
  {
    name: `Объем двигателя, л`,
    value: `2.4`
  },
  {
    name: `Макс. крутящий момент`,
    value: `370/4500`
  },
  {
    name: `Количество цилиндров`,
    value: `4`
  },
];

export const CONTACTS = [
  {
    name: `Адрес`,
    value: <>Санкт-Петербург, <br/> набережная реки Карповки, дом 5</>
  },
  {
    name: `Режим работы`,
    value: `Ежедневно, с 10:00 до 21:00`
  },
  {
    name: `Телефон`,
    value: <a className="contacts__link" href="tel:88003335599">8 (800) 333-55-99</a>
  },
  {
    name: `E-mail`,
    value: <a className="contacts__link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
  },
];
