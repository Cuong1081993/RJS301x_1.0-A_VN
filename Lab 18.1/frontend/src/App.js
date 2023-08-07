import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventsRootLayout from "./pages/EventRoot";
import EventsPage, { loader as eventsLoader } from "./pages/Event";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEvent";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEvent,
} from "./pages/EventDetail";
import { action as manipulateEventAction } from "./components/EventForm";
import Error from "./pages/Error";
import NewsletterPage,{action as newsletterAction} from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEvent,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path:'newsletter',
        element:<NewsletterPage/>,
        action: newsletterAction
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
