import "./Page-not-found.css";
import React from "react";

function PageNotFound() {
  return (
    <div className="page-not-found">
      {/* {slideShow()} */}
      <img
        className="img_load"
        src="https://i.pinimg.com/originals/fe/df/71/fedf7125acf620e856b6d09ef44eee51.gif"
        alt=""
      />
      <img
        className="img_load"
        src="https://c.tenor.com/_PBIv0EE6vEAAAAC/you-should-go-back-go-back.gif"
        alt=""
      />
      <img
        className="img_load"
        src="https://c.tenor.com/StX66wipDkUAAAAC/suprised-ryan-reynolds.gif"
        alt=""
      />
    </div>
  );
}
// function slideShow() {
//   const images = document.getElementsByClassName("img_load");
//   let counter = 0;
//   setInterval(() => {
//     if (counter > imgUrl.length - 1) counter = 0;
//     for(img of images){
//       img.style.display = 'none';
//     }
//     img[counter++].style.
//   }, 4000);
// }

export default PageNotFound;
