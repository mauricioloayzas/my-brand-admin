import { useEffect, useRef, useState } from "react";

const TotalOrderCard2 = () => {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };
  return (
    <div className="card courier-card full-height">
      <div className="top-content mb-4 d-flex align-items-center justify-content-between">
        <div className="icon-wrap me-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M33.2518 27.9879C32.7045 28.5222 32.3917 29.2911 32.4699 30.1121C32.5872 31.5196 33.8774 32.5491 35.2848 32.5491H37.7609V34.0999C37.7609 36.7976 35.5585 39 32.8609 39H17.9001C15.2024 39 13 36.7976 13 34.0999V25.3294C13 22.6318 15.2024 20.4293 17.9001 20.4293H32.8609C35.5585 20.4293 37.7609 22.6318 37.7609 25.3294V27.206H35.1284C34.3986 27.206 33.734 27.4927 33.2518 27.9879Z"
              fill="#053810"
            />
            <path
              d="M29.0946 15.4771V20.4293H17.9001C15.2024 20.4293 13 22.6317 13 25.3294V20.5466C13 18.9958 13.9513 17.6144 15.3979 17.067L25.7454 13.1574C27.3613 12.5579 29.0946 13.7439 29.0946 15.4771Z"
              fill="#053810"
            />
            <path
              d="M39.1413 28.5352V31.2199C39.1413 31.9367 38.5679 32.523 37.8381 32.5491H35.2838C33.8764 32.5491 32.5862 31.5196 32.4689 30.1121C32.3907 29.2911 32.7035 28.5222 33.2508 27.9879C33.733 27.4927 34.3977 27.206 35.1275 27.206H37.8381C38.5679 27.2321 39.1413 27.8184 39.1413 28.5352Z"
              fill="#053810"
            />
            <path
              d="M27.9905 26.9453H18.868C18.3337 26.9453 17.8906 26.5022 17.8906 25.9679C17.8906 25.4336 18.3337 24.9905 18.868 24.9905H27.9905C28.5248 24.9905 28.9679 25.4336 28.9679 25.9679C28.9679 26.5022 28.5248 26.9453 27.9905 26.9453Z"
              fill="#053810"
            />
          </svg>
        </div>
        <div className="dropdown dropstart" ref={dropdownRef}>
          <button
            className={`btn ${activeDropdown ? "show" : ""}`}
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="18"
              viewBox="0 0 4 18"
              fill="none"
            >
              <g opacity="0.4">
                <path
                  d="M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z"
                  stroke="#737B8B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                  stroke="#737B8B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z"
                  stroke="#737B8B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          <div
            className={`dropdown-menu dropdown-menu-end ${
              activeDropdown ? "show" : ""
            }`}
          >
            <a className="dropdown-item" href="#">
              Jan 24
            </a>
            <a className="dropdown-item" href="#">
              Feb 24
            </a>
            <a className="dropdown-item" href="#">
              Mar 24
            </a>
          </div>
        </div>
      </div>
      <div className="card-content d-flex align-items-end justify-content-between">
        <div className="me-4">
          <p className="mb-2">Total Order</p>
          <h4 className="mb-0">$238.00</h4>
        </div>
        <div className="increase-decrease-result">+1,29%</div>
      </div>
    </div>
  );
};
export default TotalOrderCard2;
