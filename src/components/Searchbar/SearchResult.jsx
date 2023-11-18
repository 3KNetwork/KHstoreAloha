import { Link } from "react-router-dom";
import "./SearchResult.css";
export const SearchResult = ({ result, setInput }) => {
  const handleClick = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  return (
    <div>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/${result}`}
        className="search-result"
        onClick={handleClick}
      >
        {result}
      </Link>
    </div>
  );
};
