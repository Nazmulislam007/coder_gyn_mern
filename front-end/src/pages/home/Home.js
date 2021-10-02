import React from "react";
import "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../Components/Shared/Card/Card";
import Button from "../../Components/Shared/Button/Button";

const Home = () => {
  const history = useHistory();

  const redirectPage = () => {
    history.push("/register");
  };

  return (
    <>
      <Card title="Welcome to Nazmul's house">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit
          repudiandae dolorem, eum quidem recusandae laborum quaerat. Iste
          doloribus molestias sunt sequi, ad nostrum? Porro.
        </p>
        <Button onClick={redirectPage}>Get your username</Button>
        <div>
          <span>Have an invite text?</span>
          <Link to="/login">Sign In</Link>
        </div>
      </Card>
    </>
  );
};

export default Home;
