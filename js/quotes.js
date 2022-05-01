const quotes = [
    {
        quote:"THe way to get started is to quit talking and begin doing.",
        author:"Wait Disney",
    }
    {
        quote: "Life is what happens when you're busy making other plans",
        author:"John Lennon",
    }
    {
        quote:"The world is a book and those do not travel read only one page",
        author:"Saint Augustine",
    }
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela",
    }
    {
        quote:"If life were predictable it would cease to be life, and be without flavor. ",
        author:"Eleanor Roosevelt",
    }
    {
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author:"James Cameron",
    }
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[0-9]);
const todayQuote = quotes[MAth.floor(Math.random() * quotes.length)]; //quotes.lenght로 quote이 늘어나더라도 자동계산

// 정수로 바꾸는 3 types
// 1. math.round()
// 2. math.ceil() => 올림, ceil(1.01)=2
// 3. math.floor() => 내림, floor(1.9999) = 1 

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;