/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let init1=init;
    return{
        increment:function(){
            return ++init1;
        },
        decrement:function(){
            return --init1;
        },
        reset: function(){
            return (init1=init);
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
