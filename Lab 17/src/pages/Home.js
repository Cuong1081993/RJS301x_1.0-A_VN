import React from "react";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <div>My home page</div>
      <p>
        Go to <Link to="/products">List of products</Link>
      </p>
    </>
  );
}

export default Homepage;
