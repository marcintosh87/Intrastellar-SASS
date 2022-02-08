import React from "react";

export default function Messages({ currentUser }) {
  return <div>{currentUser && currentUser.first_name}</div>;
}
