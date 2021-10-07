import React from "react";

export default function Images(props) {
  return (
    <div>
      <a href={props.href}>
        <img src={props.src} alt="aegis" class="img-fluid mt-4" />
      </a>
    </div>
  );
}
