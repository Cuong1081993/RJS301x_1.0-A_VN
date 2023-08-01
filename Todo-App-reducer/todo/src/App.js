import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";

// init state

const initState = {
  job: "",
  jobs: [],
};
// actions

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload: payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload: payload,
  };
};

// reducer

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        job: "",
        jobs: [...state.jobs, action.payload],
      };
    default:
      throw new Error("Invalid action ! ");
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addJob(job));
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo App</h3>
      <form onSubmit={submitHandler}>
        <input
          value={job}
          placeholder="Enter character ...."
          onChange={(e) => {
            dispatch(setJob(e.target.value));
          }}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
