import React from "react";
function CreateHeader() {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-warning">
      <div className="container">
        <a className="navbar-brand" href=""></a>
        <ul className="nav ">
          <li className="nav-item nav-item-dark">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default CreateHeader;
