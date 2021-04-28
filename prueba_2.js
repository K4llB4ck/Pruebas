// 1 al n 
//cada que halla un numero divisible por 3  fizz
// cada que halla un numero divisible por 5  => fuzz
// cada que halla un numero divisible por 3 && 5 => fizzfuzz


class FizzFuzz {
    constructor(max = 10) {
        this.max = max;
        this.result = [];
    }

    message(message) {
        this.result.push(message);
    }

    get() {
        for (let i = 1; i <= this.max; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                this.message("FIZZFUZZ");
            } else if (i % 3 == 0) {
                this.message("FIZZ");
            } else if (i % 5 == 0) {
                this.message("FUZZ");
            } else {
                this.message(i);
            }

        }
        return this.result;
    }
}

const Instance = new FizzFuzz(100);
Instance.get();