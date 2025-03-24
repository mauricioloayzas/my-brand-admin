import { useEffect, useRef, useState } from "react";

const ReturnPendingCard = () => {
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
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M26.2125 10H22.5375C20.95 10 20 9.05 20 7.4625V3.7875C20 2.2 20.95 1.25 22.5375 1.25H26.2125C27.8 1.25 28.75 2.2 28.75 3.7875V7.4625C28.75 9.05 27.8 10 26.2125 10ZM26.4875 5.8625C26.3375 5.7125 26.1375 5.6375 25.9375 5.6375C25.7375 5.6375 25.5375 5.7125 25.3875 5.8625L25.1625 6.0875V3.2875C25.1625 2.85 24.8125 2.5 24.375 2.5C23.9375 2.5 23.5875 2.85 23.5875 3.2875V6.0875L23.3625 5.8625C23.0625 5.5625 22.5625 5.5625 22.2625 5.8625C21.9625 6.1625 21.9625 6.6625 22.2625 6.9625L23.825 8.525C23.8875 8.5875 23.975 8.6375 24.0625 8.675C24.0875 8.6875 24.1125 8.6875 24.1375 8.7C24.2 8.725 24.2625 8.7375 24.3375 8.7375C24.3625 8.7375 24.3875 8.7375 24.4125 8.7375C24.5 8.7375 24.575 8.725 24.6625 8.6875C24.675 8.6875 24.675 8.6875 24.6875 8.6875C24.775 8.65 24.85 8.6 24.9125 8.5375C24.925 8.525 24.925 8.525 24.9375 8.525L26.5 6.9625C26.8 6.6625 26.8 6.1625 26.4875 5.8625Z"
              fill="#053810"
            />
            <path
              opacity="0.3"
              d="M27.5 9.7125V11.25H2.5V9.425C2.5 6.5625 4.825 4.25 7.6875 4.25H20V7.4625C20 9.05 20.95 10 22.5375 10H26.2125C26.7125 10 27.1375 9.9125 27.5 9.7125Z"
              fill="#053810"
            />
            <path
              d="M2.5 11.25V20.575C2.5 23.4375 4.825 25.75 7.6875 25.75H22.3125C25.175 25.75 27.5 23.4375 27.5 20.575V11.25H2.5ZM10 21.5625H7.5C6.9875 21.5625 6.5625 21.1375 6.5625 20.625C6.5625 20.1125 6.9875 19.6875 7.5 19.6875H10C10.5125 19.6875 10.9375 20.1125 10.9375 20.625C10.9375 21.1375 10.5125 21.5625 10 21.5625ZM18.125 21.5625H13.125C12.6125 21.5625 12.1875 21.1375 12.1875 20.625C12.1875 20.1125 12.6125 19.6875 13.125 19.6875H18.125C18.6375 19.6875 19.0625 20.1125 19.0625 20.625C19.0625 21.1375 18.6375 21.5625 18.125 21.5625Z"
              fill="#053810"
            />
          </svg>
        </div>
        <div className="dropdown dropstart" ref={dropdownRef}>
          <button
            className={`btn p-0 ${activeDropdown ? "show" : ""}`}
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
          <p className="mb-2">Return Pending</p>
          <h4 className="mb-0">64%</h4>
        </div>
        <div className="increase-decrease-result">+1,29%</div>
      </div>
    </div>
  );
};
export default ReturnPendingCard;
