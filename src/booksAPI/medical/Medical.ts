import { BooksProps, idRandom } from "../Library";
import one from './imgs/one.jpeg';
import two from './imgs/two.jpeg';
import three from './imgs/three.jpeg';

export const medical1: BooksProps = {
    id: idRandom(),
    title: 'Когда смерть становится жизнью', 
    author: 'Джошуа Мезрич', 
    categories: 'medical', 
    sorting: ['relevance'], 
    text: 'Еще пару веков назад о пересадке органов от человека к человеку можно было только мечтать. Стремительное развитие медицины превратило мечту в реальность: люди, которых раньше ожидала бы смерть, теперь продолжают жить с новой печенью, почками, легкими или даже сердцем.',
    img: `${one}`
};
export const medical2: BooksProps = {
    id: idRandom(),
    title: 'Безумная медицина', 
    author: 'Томас Моррис', 
    categories: 'medical', 
    sorting: ['relevance', 'newest'],  
    text: 'В своей новой книге Томас Моррис собрал самые отвратительные, страшные, нелепые и безумно смешные случаи из истории медицины. Взрывающиеся зубы, человек-игольница, мальчик-амфибия и солдат, самостоятельно удаливший себе камень из мочевого пузыря, — порой небылицы просто невозможно отличить от реальных фактов из практики врачей XVII-XX веков.',
    img: `${two}`
};
export const medical3: BooksProps = {
    id: idRandom(),
    title: 'Как болел бы врач', 
    author: 'Ольга Кашубина', 
    categories: 'medical', 
    sorting: ['relevance'],  
    text: 'Правила грамотного общения с отечественной медициной от бывшего врача с красным дипломом, а ныне журналиста, блогера и популяризатора науки Ольги Кашубиной пригодятся каждому, кто хотя бы раз был на приеме в поликлинике. Просто и подробно Ольга рассказывает о том, чем именно частные учреждения отличаются от государственных, как правильно вызывать скорую, экономить на лекарствах и общаться с врачами и что делать, если даже они не знают, как вам помочь',
    img: `${three}`
};