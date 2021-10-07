import React from 'react'

export default function Headings(props) {
  return (
    <div>
        <h3 class="heading text-center mb-3 mb-sm-5" className={props.className}>{props.title}</h3>
    </div>
  )
}
