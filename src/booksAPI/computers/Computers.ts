import { BooksProps, idRandom } from "../Library";
import one from './imgs/one.jpeg';
import two from './imgs/two.jpeg';
import three from './imgs/three.jpeg';

export const computers1: BooksProps = {
    id: idRandom(),
    title: 'HTML и CSS. Разработка и дизайн веб-сайтов', 
    author: 'Джон Дакетт', 
    categories: 'computers', 
    sorting: ['relevance'], 
    text: 'Эта книга - самый простой и интересный способ изучить HTML и CSS. Независимо от стоящей перед вами задачи: спроектировать и разработать веб-сайт с нуля или получить больше контроля над уже существующим сайтом, эта книга поможет вам создать привлекательный, дружелюбный к пользователю веб-контент.',
    img: `${one}`
};
export const computers2: BooksProps = {
    id: idRandom(),
    title: 'Сам себе программист. Как научиться программировать и устроиться в Ebay?', 
    author: 'Кори Альтхофф', 
    categories: 'computers', 
    sorting: ['relevance', 'newest'],  
    text: 'Автор книги всего за год научился программировать, что само по себе немало. Однако Кори Альтхофф пошёл дальше, и научившись программировать, он устроился разработчиком в одну из самых серьёзных современных IT компаний — Ebay. Как ему удалось? Читайте эту книгу, изучайте программирование на языке Python по уникальной авторской методике — вам это тоже по силам!',
    img: `${two}`
};
export const computers3: BooksProps = {
    id: idRandom(),
    title: 'Кодеры за работой. Размышления о ремесле программиста', 
    author: 'Питер Сейбел', 
    categories: 'computers', 
    sorting: ['relevance'],  
    text: 'Программисты — люди не очень публичные, многие работают поодиночке или в небольших группах. Причем самая важная и интересная часть их работы никому не видна, потому что происходит у них в голове. Питер Сейбел, писатель-программист, снимает покров таинственности с этой профессии. Он взял интервью у 15 величайших профессионалов: Кена Томпсона, создателя UNIX, Берни Козелла, участника первой реализации сети ARPANET, Дональда Кнута, Гая Стила, Джейми Завински, Саймона Пейтон-Джонса, Питера Норвига, Дугласа Крокфорда, Джошуа Блоха, Брендана Айка, Джо Армстронга, Брэда Фицпатрика, создателя Живого Журнала, и других.',
    img: `${three}`
};