function receivesAFunction(animal, cb) {
    return identifyMe(animal)
}

receivesAFunction("horse", function identifyMe(animal) {return "I am a" + animal})



