import Counter from './modules/counter/index.js';

document.addEventListener('DOMContentLoaded', evt => {
    let counter1 = new Counter();
    let counter2 = new Counter();
    let counter3 = new Counter();

    counter1.increase();
    counter2.increase();
    counter3.increase();
    
    console.log(counter3.getCounter());
    console.log(counter1 === counter3);
})
