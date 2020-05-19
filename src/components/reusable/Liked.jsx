import React from "react";

const Liked = ({ liked, onClick }) => {
  return (
    <i
      className={`fa-heart ${!liked ? "far" : "fas"}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Liked;
