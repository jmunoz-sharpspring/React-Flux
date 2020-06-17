import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CollectionsPage from "./CollectionsPage";
import CitationPage from "./CitationPage";
import CitationPage2 from "./CitationPage2";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/collections") return <CollectionsPage />;
    if (route === "/citation") return <CitationPage />;
    if (route === "/citation-2") return <CitationPage2 />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
