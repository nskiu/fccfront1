import { useEffect, useState } from "react";
import "./App.scss";
import Buttons from "./Buttons";
import QuoteAuthor from "./QuoteAuthor";
import QuoteText from "./QuoteText";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [clicked, setClick] = useState([false, "black"]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    };
    fetchData();
  }, [clicked]);

  const handleClick = () => {
    setClick((clicked) => {
      return [
        !clicked[0],
        "#" + Math.floor(Math.random() * 16777215).toString(16),
      ];
    });
    document.getElementById("quote").style.opacity = 0;

    setTimeout(() => {
      document.getElementById("quote").style.opacity = 100;
    }, 500);
  };

  return (
    <div id="quote-box" className="d-flex flex-column rounded">
      <script>{(document.body.style.background = clicked[1])}</script>
      <QuoteText quote={quote} color={clicked[1]} />
      <QuoteAuthor author={author} color={clicked[1]} />
      <Buttons
        onClick={handleClick}
        color={clicked[1]}
        quote={quote}
        author={author}
      />
    </div>
  );
}

export default App;
