import React from "react";
import { Home } from "./Home";

function greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    <accueil />;
  }
  return <log />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// Essayez de changer ça vers isLoggedIn={true} :
root.render(<Greeting isLoggedIn={false} />);
