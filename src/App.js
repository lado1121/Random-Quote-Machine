import React , {useState} from "react"
import './App.scss';
import COLORS from './colors'


function App() {
  const [quote, setQuote] = useState("Strive not to be a success, but rather to be of value.")
  const [author, setAuthor] = useState("Albert Einstein")
  const [accentColor, setAccentColor] = useState("black")

  const changeQuoteAndAuthor = () => {
    generateRandomNumber();
  }

  const [randomNumber, setRandomNumber] = useState(0)

  const generateRandomNumber = () => {
    let randomInteger = (Math.floor(quotesArray.length*Math.random()));
    setRandomNumber(randomInteger);
    setAccentColor(COLORS[randomInteger]);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author)
    
  }


  const quotesArray = [{quote : "Strive not to be a success, but rather to be of value." , author : "Albert Einstein"} , {quote : "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you." , author : "Ayn Rand"} , {quote : "The best revenge is massive success." , author : "Frank Sinatra"} , {quote : "The most common way people give up their power is by thinking they don’t have any." , author : "Alice Walker"} , {quote : "Teach thy tongue to say, “I do not know,” and thous shalt progress." , author : "Maimonides"} , {quote : "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." , author : "Maya Angelou"} , {quote : "Either write something worth reading or do something worth writing." , author : "Benjamin Franklin"} , {quote : "Your time is limited, so don’t waste it living someone else’s life." , author : " Steve Jobs"} , {quote : "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it." , author : "Johann Wolfgang von Goethe"} , {
    quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",author:"Amelia Earhart"},
{
    quote:"Every strike brings me closer to the next home run.",author:"Babe Ruth"},
{
    "quote":"Definiteness of purpose is the starting point of all achievement.","author":"W. Clement Stone"},
{
    quote:"We must balance conspicuous consumption with conscious capitalism.",author:"Kevin Kruse"},
{
    quote:"Life is what happens to you while you’re busy making other plans.","author":"John Lennon"},
{
    quote:"We become what we think about.",author:"Earl Nightingale"}]
  
  return(
    
    <div className='App' style={{backgroundColor : accentColor , minHeight : "100vh" , maxWidth : "100vw" , width : "100vw" , minWidth : "100vh" , color: accentColor}}>
      <header className='App-header' style={{backgroundColor : accentColor}} >
        <div id="quote-box" style={{color : accentColor}}>
        <p id="text" className="quote-text"><i className="fa fa-quote-left"></i> {quote} </p>
        <p id="author" className="quote-author">-{author}</p>
        <button id="new-quote" className="button" style={{backgroundColor : accentColor}} onClick={() => changeQuoteAndAuthor()} 
        >New Quote</button>
        <div className="buttons" style={{backgroundColor : accentColor}}>
        <a id="tweet-quote" href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} - ${author}`)} target ="_blank"><i className="fa-brands fa-twitter" style={{color : "white"}}></i></a>
        </div>
      </div>
      </header>
    </div>
    
    
  )
}

export default App;
