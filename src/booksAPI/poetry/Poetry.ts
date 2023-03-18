import { BooksProps, idRandom } from "../Library";
import one from './imgs/one.jpeg';
import two from './imgs/two.jpeg';
import three from './imgs/three.jpeg';

export const poetry1: BooksProps = {
    id: idRandom(),
    title: 'Home body', 
    author: 'Рупи Каур', 
    categories: 'poetry', 
    sorting: ['relevance'], 
    text: '«home body» — третий сборник поэзии, в котором Рупи Каур пишет о том, что волнует, но часто не произносится вслух: о любви, женственности, одиночестве, потерях, душевных травмах, исцелении. С каждой страницей вы словно снимаете с себя оковы прошлого, мешающего жить, чтобы обрести внутреннюю свободу и расправить крылья.',
    img: `${one}`
};
export const poetry2: BooksProps = {
    id: idRandom(),
    title: 'Ариэль', 
    author: 'Сильвия Плат', 
    categories: 'poetry', 
    sorting: ['relevance', 'newest'],  
    text: 'Сборник стихотворений «Ариэль» по праву считается одной из лучших работ Сильвии Плат. Он был опубликован в 1965 году, через два года после смерти автора.',
    img: `${two}`
};
export const poetry3: BooksProps = {
    id: idRandom(),
    title: 'Шлюзы', 
    author: 'Ксения Буржская', 
    categories: 'poetry', 
    sorting: ['relevance'],  
    text: 'Любовь, одиночество, свобода (и не свобода, страх перед будущим, неуверенность в прошлом. И поверх всего этого — огромная сила человеческой личности, которая растет и меняется с каждым новым словом, с каждым звуком.',
    img: `${three}`
};