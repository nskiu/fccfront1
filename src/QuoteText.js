const QuoteText = ({ quote, color }) => {
  return (
    <div id="text" className="d-flex flex-column" style={{ color: color }}>
      <i className="fa fa-quote-left"></i>
      <br />
      <span id="quote" className="align-self-center text-center">
        {quote}
      </span>
      <br />
      <i className="fa fa-quote-right align-self-end"></i>
    </div>
  );
};

export default QuoteText;
