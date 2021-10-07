import React from "react";

export default function Para(props) {
  return (
    <div>
      <p class={props.class}>{props.title}</p>
    </div>
  );
}
