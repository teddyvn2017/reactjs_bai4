// import * as React from "react";
import React, { useEffect } from 'react'
import {useRef} from 'react';
import gsap from "gsap";
import {useGSAP} from '@gsap/react';
export default function Humburger(props) {
  
  const menu = useRef();
  const tl = useRef();
  const toggle = props.toggle;

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    })
    tl.current.to(menu.current, {
      visibility: 'visible'
    })
  },[])

  useEffect(() => {
    toggle ? tl.current.play() : tl.current.reverse();
  },[toggle])
  return (
      <svg
        viewBox="0 0 12 10"
        className="md:hidden cursor-pointer"
        height="32px"
        width="32px"
        id="btn-humburger"
  
  >
    <path
      d="M10,2 L2,2"
      className="upper"
      style={{
        fill: "none",
        stroke: "#fbfbfb",
        strokeLinecap: "round",
      }}
    />
    <path
      d="M2,5 L10,5"
      className="middle"
      style={{
        fill: "none",
        stroke: "#fbfbfb",
        strokeLinecap: "round",
      }}
    />
    <path
      d="M10,8 L2,8"
      className="lower"
      style={{
        fill: "none",
        stroke: "#fbfbfb",
        strokeLinecap: "round",
      }}
    />
  </svg>
  )
}

// export default Humburger

// export default function Humburger(props) {



// }
// const Humburger = () => (

//   <svg
//     viewBox="0 0 12 10"
//     className="md:hidden cursor-pointer"
//     height="32px"
//     width="32px"
//     id="btn-humburger"
//     {...props}
//   >
//     <path
//       d="M10,2 L2,2"
//       className="upper"
//       style={{
//         fill: "none",
//         stroke: "#fbfbfb",
//         strokeLinecap: "round",
//       }}
//     />
//     <path
//       d="M2,5 L10,5"
//       className="middle"
//       style={{
//         fill: "none",
//         stroke: "#fbfbfb",
//         strokeLinecap: "round",
//       }}
//     />
//     <path
//       d="M10,8 L2,8"
//       className="lower"
//       style={{
//         fill: "none",
//         stroke: "#fbfbfb",
//         strokeLinecap: "round",
//       }}
//     />
//   </svg>

 
// );

//export default Humburger;
