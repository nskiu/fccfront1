const Buttons = ({ onClick, color, quote, author }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <a
        href={
          'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="' +
          quote +
          '" ' +
          author
        }
        id="tweet-quote"
        target="_blank"
        className="btn"
        style={{ color: color }}
      >
        <i className="fa fa-twitter-square" id="tweet-icon"></i>
      </a>
      <button
        className="btn"
        id="new-quote"
        onClick={onClick}
        style={{ background: color, color: "whitesmoke" }}
      >
        New quote
      </button>
    </div>
  );
};

export default Buttons;
