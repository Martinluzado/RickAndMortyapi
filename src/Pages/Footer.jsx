import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import "../Styles/footer.css";

function FooterWeb() {
  return (
    <div className="footer">
      <a href="https://rickandmortyapi.com/">
        {" "}
        <p className="parrafoFooter">
          <BsCodeSlash />
          Get Api
        </p>
      </a>
    </div>
  );
}

export default FooterWeb;
