import styled from "@emotion/styled";
import {
  ArrowBack,
  Computer,
  GitHub,
  LocationCity,
  People,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const UserInfo = ({ userInfo, userRepo }) => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "35% 63%",
            lg: "35% 63%",
          },
          width: " 100%",
          background: " #2423231e",
          borderRadius: { xs: 0, sm: 0, md: "15px", lg: "15px" },
          color: " #252525",
          gridGap: "1.5%",
          padding: "1rem",
          alignItems: "center",
          margin: { xs: 0, sm: 0, md: "1rem", lg: "1rem" },
        }}
        id="info "
      >
        <MyImage src={userInfo?.avatar_url} alt="" />
        <Box
          sx={{
            padding: { xs: "0.5rem", sm: "0.5rem", md: "1rem", lg: "1rem" },
            display: "grid",
            textAlign: "left",
          }}
          className="text"
        >
          <Typography
            sx={{ display: "grid", justifySelf: "center" }}
            variant="h4"
            component="h4"
          >
            {userInfo?.login}
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            }}
            variant="p"
            component="p"
          >
            {userInfo?.bio}
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridGap: "0.5rem",
              borderRadius: "10px",
              justifyContent: "left",
              marginTop: "1rem",
              gridTemplateColumns: {
                xs: "1fr ",
                sm: "1fr ",
                md: "1fr 1fr",
                lg: "1fr 1fr",
              },
            }}
            className="icons"
          >
            <MyTypography variant="p" component="p">
              <LocationCity />
              <Typography
                sx={{ paddingLeft: "1rem" }}
                variant="span"
                component="span"
              >
                {userInfo?.location}
              </Typography>
            </MyTypography>
            <MyTypography variant="p" component="p">
              <People />
              <Typography
                sx={{ paddingLeft: "1rem" }}
                variant="span"
                component="span"
              >
                Followers:
                <Typography
                  sx={{ paddingLeft: "0.3rem" }}
                  variant="span"
                  component="span"
                >
                  {userInfo?.followers}
                </Typography>
              </Typography>
            </MyTypography>
            <Link style={{ color: "#252525" }} to={userInfo?.blog}>
              <MyTypography variant="p" component="p">
                <Computer />
                <Typography
                  sx={{ paddingLeft: "1rem" }}
                  variant="span"
                  component="span"
                >
                  My Site
                </Typography>
              </MyTypography>
            </Link>
            <Link style={{ color: "#252525" }} to={userInfo?.html_url}>
              <MyTypography variant="p" component="p">
                <GitHub />
                <Typography
                  sx={{ paddingLeft: "1rem" }}
                  variant="span"
                  component="span"
                >
                  Github
                </Typography>
              </MyTypography>
            </Link>
          </Box>
        </Box>
      </Box>
      {userRepo.map((repo) => (
        <Box sx={{ margin: "1rem" }} id="repo" key={repo.id}>
          <h3>{repo.name}</h3>
          <MyTypography variant="p" component="p">
            {repo.description}
          </MyTypography>
          <MyTypography variant="p" component="p">
            Written in {repo.language}
          </MyTypography>
        </Box>
      ))}
      <Link to={"/"}>
        <button style={{ margin: "0 0 1rem 1rem" }} className="user-back-btn">
          <ArrowBack />
        </button>
      </Link>
    </>
  );
};
const MyImage = styled("img")({
  width: "15rem",
  borderRadius: "10px",
  display: "grid",
  "@media (max-width: 600px)": {
    maxWidth: "13rem", // Adjust styles for smaller screens (e.g., mobile)
    justifySelf: "center",
    alignSelf: "center",
  },
  "@media (min-width: 601px) and (max-width: 1024px)": {
    maxWidth: "13rem", // Adjust styles for medium-sized screens (e.g., tablets)
  },
  "@media (min-width: 1025px)": {
    maxWidth: "15rem", // Adjust styles for larger screens (e.g., desktops)
  },
});
const MyTypography = styled("Typography")({
  display: "flex",
});

export default UserInfo;
