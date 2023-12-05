import { SearchOutlined } from "@mui/icons-material";
const Search = ({ searched, setSearched, handleSearchedUser }) => {
  return (
    <>
      <div id="search">
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
          />
          <button onClick={handleSearchedUser}>
            <SearchOutlined
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                background: "transparent",
              }}
            />
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
