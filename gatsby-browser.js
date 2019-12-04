import React from "react";
import Layout from "./src/components/Wrapper";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
