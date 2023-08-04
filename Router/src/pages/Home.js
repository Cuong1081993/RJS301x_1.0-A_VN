import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Homepage() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/products')
  };
  return (
    <>
      <div>My home page</div>
      <p>
        Go to <Link to="products">List of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default Homepage;
