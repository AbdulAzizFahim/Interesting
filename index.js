import randomFacts from './randomFacts.json' with { type: 'json' };
let lastRandom = 0;
const displayRandomFacts = ()=> {
    const getRandomNumber = (max)=> {
        while(true){
            const random =  Math.floor(Math.random() * (max + 1));
            if(random !== lastRandom){
                lastRandom = random;
                return random;
            }
        }
    }
    const facts = randomFacts.facts;
    const randomNumber = getRandomNumber(facts.length - 1);
    const fact = facts[randomNumber];
    console.log(`Category: ${fact.category}\nFact: ${fact.fact}`);
}

export default displayRandomFacts;