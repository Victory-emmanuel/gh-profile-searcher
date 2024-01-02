import { SearchResult, Search } from "../components/components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Home = () => {
  const BASEURL = "https://api.github.com";
  const [searched, setSearched] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default value is 10

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/search/users?q=${searched}&per_page=${itemsPerPage}&page=${currentPage}`
        );
        setData(response.data.items);
        setTotalPages(Math.ceil(response.data.total_count / itemsPerPage));
      } catch (error) {
        console.error(error);
      }
    };

    if (searched) {
      fetchUserData();
    }
  }, [searched, currentPage, itemsPerPage]);

  const handleSearchedUser = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <Box
      mt={2}
      sx={{
        paddingBottom: "2rem",
        width: { xs: "20rem", sm: "30rem", md: "40rem", lg: "50rem" },
      }}
      id="home"
    >
      <Box sx={{ width: "100%" }} className="container">
        <Typography
          sx={{
            marginTop: "2rem",
            fontWeight: "600",
            fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
          }}
        >
          Github Profile Finder
        </Typography>
        <Search
          searched={searched}
          setSearched={setSearched}
          handleSearchedUser={handleSearchedUser}
        />
        <Box
          sx={{
            display: "grid",
            justifyContent: { xs: "center", sm: "center", md: "left" },
            marginTop: "1rem",
          }}
          className="page-items"
        >
          <MyLabel sx={{}} htmlFor="itemsPerPage">
            Items per Page:
            <MySelect
              sx={{}}
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <MyOption className="options" value="5">
                5
              </MyOption>
              <MyOption className="options" value="10">
                10
              </MyOption>
              <MyOption className="options" value="20">
                20
              </MyOption>
              {/* Add more options as needed */}
            </MySelect>
          </MyLabel>
        </Box>
        <SearchResult data={data} />
        <Box
          sx={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="pagination"
        >
          <MyButton
            className="prev-btn"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </MyButton>
          <Typography variant="p" component="p">
            {currentPage}
          </Typography>
          <MyButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="next-btn"
          >
            Next
          </MyButton>
        </Box>
      </Box>
    </Box>
  );
};
const MyLabel = styled("label")({
  backgroundColor: "#2e2d2d1e",
  padding: "1rem",
  borderRadius: "10px",
  display: " inline-block",
});
const MySelect = styled("select")({
  marginLeft: "10px",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
});
const MyOption = styled("option")({
  opacity: 0.8,
});
const MyButton = styled("button")({
  background: " #252525",
  color: " #fff",
  padding: " 1rem 1rem",
  borderRadius: "10px",
});
export default Home;
