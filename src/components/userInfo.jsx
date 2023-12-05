import {
  ArrowBack,
  Computer,
  GitHub,
  LocationCity,
  People,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const UserInfo = ({ userInfo, userRepo }) => {
  return (
    <>
      <div id="info">
        <img src={userInfo?.avatar_url} alt="" />
        <div className="text">
          <h2>{userInfo?.login}</h2>
          <p>{userInfo?.bio}</p>
          <div className="icons">
            <p>
              <LocationCity />
              <span>{userInfo?.location}</span>
            </p>
            <p>
              <People />
              <span>
                Followers
                {userInfo?.followers}
              </span>
            </p>
            <Link to={userInfo?.blog}>
              <p>
                <Computer />
                <span> My Site</span>
              </p>
            </Link>
            <Link to={userInfo?.html_url}>
              <p>
                <GitHub />
                <span> Github</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      {userRepo.map((repo) => (
        <div id="repo" key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <p>Written in {repo.language}</p>
        </div>
      ))}
      <Link to={"/"}>
        <button className="user-back-btn">
          <ArrowBack />
        </button>
      </Link>
    </>
  );
};

export default UserInfo;
