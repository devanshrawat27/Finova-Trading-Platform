import React from "react";
import { Route, Routes } from "react-router-dom";
import { GeneralContextProvider } from './GeneralContext';
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import "./Dashboard.css";

const Dashboard = ({leftOpen, onCloseLeft}) => {
  return (
    <div className="kite">

          {/* Sidebar */}
      <GeneralContextProvider>
        <div className={`kite-left ${leftOpen ? 'open':''}`}>
          <WatchList onClose={onCloseLeft} open={leftOpen} />
        </div>
      </GeneralContextProvider>

      {/* Main */}
      <div className="kite-right">
       

        <main className="kite-content">
          <div className="content-card">
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="/apps" element={<Apps />} />
            </Routes>
          </div>
        </main>
      </div>

    </div>
  );
};

export default Dashboard;
