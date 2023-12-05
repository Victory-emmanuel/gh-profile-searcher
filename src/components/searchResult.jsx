import { Link } from "react-router-dom";

const SearchResult = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} id="search-result">
          <img
            src={item.avatar_url}
            style={{
              maxWidth: "13rem",
              borderRadius: "10px",
            }}
            alt=""
          />
          <div className="sr-info">
            <h3>{item.login}</h3>
            <h3>{item.id}</h3>
            <Link to={`/user/${item.login}`}>
              <h4 className="link"> View Profile</h4>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResult;
