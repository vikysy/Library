import {makeAutoObservable} from 'mobx';

class selectCategories {
    valueCategories = '';
    valueSotringBy = '';
    valueInput = '';

    constructor() {
        makeAutoObservable(this);
    }

    changeValueCategories(value: string) {
        this.valueCategories = value;
    }

    changeValueSotringBy(value: string) {
        this.valueSotringBy = value;
    }

    changeValueInput(value: string) {
        this.valueInput = value;
    }
}


export default new selectCategories();