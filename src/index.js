import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRatting from "./StarRatting";
// import { useState } from "react";
// function Test() {
//   const [movieRatting, setMovieRatting] = useState(0);
//   return (
//     <div>
//       <StarRatting color="blue" maxRating={10} onSetRating={setMovieRatting} />
//       <p>this movie rating is {movieRatting}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
