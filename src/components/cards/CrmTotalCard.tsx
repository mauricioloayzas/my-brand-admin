const CrmTotalCard = () => {
  return (
    <div className="card-three bg-white full-height">
      <div className="single-card-three">
        <div className="d-flex justify-content-between">
          <div className="single-card-three-content">
            <h6>Total Earnings</h6>
            <h3>$589.98k</h3>
          </div>
          <div className="single-card-three-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.4 17.42H10.89C9.25 17.42 7.92 16.04 7.92 14.34C7.92 13.93 8.26 13.59 8.67 13.59C9.08 13.59 9.42 13.93 9.42 14.34C9.42 15.21 10.08 15.92 10.89 15.92H13.4C14.05 15.92 14.59 15.34 14.59 14.64C14.59 13.77 14.28 13.6 13.77 13.42L9.74 12C8.96 11.73 7.91 11.15 7.91 9.36002C7.91 7.82002 9.12 6.58002 10.6 6.58002H13.11C14.75 6.58002 16.08 7.96002 16.08 9.66002C16.08 10.07 15.74 10.41 15.33 10.41C14.92 10.41 14.58 10.07 14.58 9.66002C14.58 8.79002 13.92 8.08002 13.11 8.08002H10.6C9.95 8.08002 9.41 8.66002 9.41 9.36002C9.41 10.23 9.72 10.4 10.23 10.58L14.26 12C15.04 12.27 16.09 12.85 16.09 14.64C16.08 16.17 14.88 17.42 13.4 17.42Z"
                fill="#1B84FF"
              />
              <path
                d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                fill="#1B84FF"
              />
              <path
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                fill="#1B84FF"
              />
            </svg>
          </div>
        </div>

        <p className="d-block mb-0">
          <span>
            +10%
            <svg
              fill="none"
              height="8"
              viewBox="0 0 10 8"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7L3.66667 3.72727L5 5.90909L9 1M9 1H6.33333M9 1V3.72727"
                stroke="white"
              />
            </svg>
          </span>
          View net earnings
        </p>
      </div>
    </div>
  );
};
export default CrmTotalCard;
