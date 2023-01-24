function* functionGenerator(){

    yield 'firstName: Pooja',
    yield 'Sam',
    yield 'Poonam'
    
    }
    
    let emp=functionGenerator()
    
    for(let e of emp){
    console.log(e)
    }


    // ==============================++++++++++++++++++++++++++++++++++++++++=======================================

    function* functionright(){

        yield 'fruitName : mango',
        yield 'animalName : elephant',
        yield 'flowerName : rose'
    }

    let obj=functionright()

    for (let o of obj){
        console.log(o);
    }
    