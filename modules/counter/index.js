let instance = null;
let counter = 0;

export default class Counter {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    getCounter() {
        return counter;
    }

    increase() {
        counter++;
    }
}
