import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

function Error() {
  const error = useRouteError();

  let title = "An error occurred ! ";
  let message = "Someting went wrong ...";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "NOT FOUND";
    message = "Could not find resource of page";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title} />
      <p style={{textAlign:'center'}}>{message}</p>
      <PageContent />
    </>
  );
}

export default Error;
