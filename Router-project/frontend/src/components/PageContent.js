import classes from "./PageContent.module.css";

import React from "react";

function PageContent({title, chidren}) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {chidren}
    </div>
  );
}

export default PageContent;
