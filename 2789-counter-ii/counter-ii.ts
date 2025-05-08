type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let currentValue = init;
    return {
        increment:()=>{
           return ++currentValue;
        },
        decrement:()=>{
           return --currentValue;
        },
        reset:()=>{
            currentValue = init;
           return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */