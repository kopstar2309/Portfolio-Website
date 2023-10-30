import React from "react";
import "./navbar.css";

export default function NavbarContent(props) {
  return (
    <a className="navbarContent" href={props.href}>
      <props.Icon size={props.Size} />
      <div style={{ marginLeft: "10px" }}>{props.Title}</div>
    </a>
  );
}
