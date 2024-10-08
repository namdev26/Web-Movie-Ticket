import React from "react";
import { NavLink } from "react-router-dom";
import { Select } from "antd";

export default function Header() {
  const { Option } = Select;

  // Hàm để áp dụng lớp CSS tùy thuộc vào trạng thái của NavLink
  const getClassName = ({ isActive }) =>
    isActive
      ? "flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white"
      : "flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white";

  return (
    <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          TEAM 13
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink to="/" className={getClassName}>
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/contact" className={getClassName}>
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/news" className={getClassName}>
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Select defaultValue="en" style={{ width: 100 }}>
            <Option value="en">Eng</Option>
            <Option value="chi">Chi</Option>
            <Option value="vi">Vi</Option>
          </Select>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
