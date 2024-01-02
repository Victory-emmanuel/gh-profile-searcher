import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SearchResult = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Box
          sx={{
            width: "100%",
            background: " #53525213",
            borderRadius: "15px",
            padding: "1rem",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            marginTop: " 1.5rem",
            gridGap: "1rem",
          }}
          key={item.id}
          id="search-result"
        >
          <MyImage src={item.avatar_url} alt="" />
          <Box
            sx={{
              display: "grid",
              gridGap: "0.5rem",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="sr-info"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "2.5rem",
                },
              }}
              variant="h5"
              component="h5"
            >
              {item.login}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "2.5rem",
                },
              }}
              variant="h5"
              component="h5"
            >
              {item.id}
            </Typography>
            <Link to={`/user/${item.login}`}>
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  color: " #252525",
                  fontWeight: 300,
                  fontSize: {
                    xs: "1rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.5rem",
                  },
                }}
                className="link"
              >
                View Profile
              </Typography>
            </Link>
          </Box>
        </Box>
      ))}
    </>
  );
};
const MyImage = styled("img")({
  maxWidth: "13rem",
  borderRadius: "10px",
  "@media (max-width: 600px)": {
    maxWidth: "8rem", // Adjust styles for smaller screens (e.g., mobile)
  },
  "@media (min-width: 601px) and (max-width: 1024px)": {
    maxWidth: "10rem", // Adjust styles for medium-sized screens (e.g., tablets)
  },
  "@media (min-width: 1025px)": {
    maxWidth: "13rem", // Adjust styles for larger screens (e.g., desktops)
  },
});

export default SearchResult;
