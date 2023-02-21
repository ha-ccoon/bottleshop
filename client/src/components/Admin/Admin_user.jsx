import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  fetch("http://localhost:8080/product").then((response) =>
    console.log(response)
  );

  return (
    <>
      <h2>test</h2>
    </>
  );
};

export default Admin;
