import axios from "axios";
import { UserInfo } from "../components/components";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const User = () => {
  const BASEURL = "https://api.github.com";
  const { login } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [userRepo, setUserRepo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await Promise.all([
          axios.get(`${BASEURL}/users/${login}`),
          axios.get(`${BASEURL}/users/${login}/repos?per_page=1`),
        ]);

        setUserInfo(res[0].data);
        setUserRepo(res[1].data);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo();
  }, []);
  return (
    <>
      <div className="container">
        <UserInfo userInfo={userInfo} userRepo={userRepo} />
      </div>
    </>
  );
};

export default User;
