import { SearchResult, Search } from "../components/components";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div id="home">
      <div className="container">
        <h1 style={{ marginTop: "2rem" }}>Github Profile Finder</h1>
        <Search
          searched={searched}
          setSearched={setSearched}
          handleSearchedUser={handleSearchedUser}
        />
        <div className="page-items">
          <label htmlFor="itemsPerPage">
            Items per Page:
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
        <SearchResult data={data} />
        <div className="pagination">
          <button
            className="prev-btn"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <p>{currentPage}</p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="next-btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
