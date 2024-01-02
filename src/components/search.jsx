import styled from "@emotion/styled";
import { SearchOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
const Search = ({ searched, setSearched, handleSearchedUser }) => {
  return (
    <>
      <Box
        sx={{
          padding: "2rem",
          marginTop: "1rem",
        }}
        id="search"
      >
        <SearchForm>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
          />
          <MyButton onClick={handleSearchedUser}>
            <SearchOutlined
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                background: "transparent",
              }}
            />
          </MyButton>
        </SearchForm>
      </Box>
    </>
  );
};
const SearchForm = styled("form")({
  display: "grid",
  width: "100%",
  alignItems: "center",
  gridTemplateColumns: "90% 10%",
});
const SearchInput = styled("input")({ padding: "1rem", borderRadius: "15px" });
const MyButton = styled("button")({
  background: "none",
  border: "none",
  color: "#fff",
});

export default Search;
