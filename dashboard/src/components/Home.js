import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [leftOpen, setLeftOpen] = React.useState(false);
  const toggleLeft = () => setLeftOpen(v => !v);

  return (
    <>
      <TopBar onToggleSidebar={toggleLeft} />
      <Dashboard leftOpen={leftOpen} onCloseLeft={() => setLeftOpen(false)} />
    </>
  );
};

export default Home;
