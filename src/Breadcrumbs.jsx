import React from "react";
import "./Breadcrumb.scss";
import { useLocation, NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";

const Breadcrumbs = () => {
  const location = useLocation(); // return location object
  const BreadcrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div className="breadcrumb-container">
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <NavLink to="/">Home</NavLink>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>HOME</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item className="lastRoute" key={index}>
                {capatilize(name)}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>
                <NavLink to={`${routeTo}`} key={index}>
                  {capatilize(name)}
                </NavLink>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };

  return <>{BreadcrumbView()}</>;
};

export default Breadcrumbs;
