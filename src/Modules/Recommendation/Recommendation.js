import "./Recommendation.css";

function Recommendation({ text, imageSrc, author, link }) {
  return (
    <div className="Recommendation">
      <div className="RecommendationText">"{text}"</div>
      <img
        className="RecommendationImage"
        src={process.env.PUBLIC_URL + imageSrc}
      />
      <div className="RecommendationAuthor">{author}</div>
      <div className="RecommendationLink">
        {link ? <a href={link[1]}>{link[0]}</a> : <a></a>}
      </div>
    </div>
  );
}

export default Recommendation;
