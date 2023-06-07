const QuoteAuthor = ({ author, color }) => {
  return (
    <div id="author" className="align-self-end d-flex gap-2">
      <div>
        <i className="fa fa-user" style={{ color: color }}>
          {" "}
        </i>
      </div>
      <span>
        <em style={{ color: color }}>{author}</em>
      </span>
    </div>
  );
};

export default QuoteAuthor;
