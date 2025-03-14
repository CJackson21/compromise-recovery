import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Placeholder Components
// The pages are in /src/components and need to be stubbed out
const Home = () => <h1 className="text-3xl font-bold">Home Page</h1>;
const Social = () => <h1 className="text-3xl font-bold">Social Page</h1>;
const Family = () => <h1 className="text-3xl font-bold">Family Page</h1>;
const Devices = () => <h1 className="text-3xl font-bold">Devices Page</h1>;
const Physical = () => <h1 className="text-3xl font-bold">Physical Page</h1>;
const NotFound = () => <h1 className="text-3xl font-bold">404 - Not Found</h1>;

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/family" element={<Family />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/physical" element={<Physical />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
