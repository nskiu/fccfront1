import { useEffect, useState } from "react";
import "./App.scss";
import Buttons from "./Buttons";
import QuoteAuthor from "./QuoteAuthor";
import QuoteText from "./QuoteText";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [change, setChange] = useState({ clicked: false, color: "#2c3142" });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    };
    fetchData();
  }, [change.clicked]);

  const handleClick = () => {
    const random = (max) => Math.floor(Math.random() * max + 1);
    const hue = random(360);
    const saturation = random(100);
    const brightness = random(60);
    setChange(() => {
      return {
        clicked: !change.clicked,
        color: `hsl(${hue}, ${saturation}%, ${brightness}%)`,
      };
    });
    document.getElementById("quote").style.opacity = 0;

    setTimeout(() => {
      document.getElementById("quote").style.opacity = 100;
    }, 500);
  };

  return (
    <div id="quote-box" className="d-flex flex-column rounded">
      <script>{(document.body.style.background = change.color)}</script>
      <QuoteText quote={quote} color={change.color} />
      <QuoteAuthor author={author} color={change.color} />
      <Buttons
        onClick={handleClick}
        color={change.color}
        quote={quote}
        author={author}
      />
    </div>
  );
}

export default App;
