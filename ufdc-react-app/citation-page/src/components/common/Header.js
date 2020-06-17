import React from "react";

function Header() {
  return (
    <nav
      className="navbar navbar-light"
      style={{
        backgroundColor: "#e3f2fd",
        padding: 30,
      }}
    >
      <form className="form-inline">
        <a
          className="btn btn-outline-success"
          type="button"
          href="/"
          style={{
            margin: 10,
          }}
        >
          Home
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/collections"
          style={{
            margin: 10,
          }}
        >
          Collections
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/citation"
          style={{
            margin: 10,
          }}
        >
          Citation
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/citation-2"
          style={{
            margin: 10,
          }}
        >
          Citation 2
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/about"
          style={{
            margin: 10,
          }}
        >
          About
        </a>
      </form>
    </nav>
  );
}

export default Header;
