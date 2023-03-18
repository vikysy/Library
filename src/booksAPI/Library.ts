import { v4 as uuidv4 } from 'uuid';
import { art1, art2, art3 } from "./art/Art";
import { biography1, biography2, biography3 } from "./biography/Biography";
import { computers1, computers2, computers3 } from "./computers/Computers";
import { history1, history2, history3 } from "./history/History";
import { medical1, medical2, medical3 } from "./medical/Medical";
import { poetry1, poetry2, poetry3 } from "./poetry/Poetry";

export interface BooksProps{
    id: string,
    title: string, 
    author: string, 
    categories: string, 
    sorting: string[], 
    text: string,
    img?: string,
}

export function idRandom() {
    return uuidv4();
}

export const library = [art1, art2, art3, biography1, biography2, biography3, computers1, computers2, computers3, history1, history2, history3, medical1, medical2, medical3, poetry1, poetry2, poetry3];