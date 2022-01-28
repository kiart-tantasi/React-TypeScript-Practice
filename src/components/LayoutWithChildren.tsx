import React from "react";

// const Layout: React.FC = (props) => {
// const Layout = (props: { children: React.ReactNode }) => {
type childrenProp = { children: React.ReactNode };
const Layout = (props: childrenProp) => {
  return <div>{props.children}</div>;
};

export default Layout;
