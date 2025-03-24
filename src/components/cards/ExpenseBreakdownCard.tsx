const ExpenseBreakdownCard = () => {
  return (
    <div className="card-2 p-0 full-height">
      <div className="compare-card-title">
        <h3>Expenses Breakdown</h3>
        <p className="text-end">*Compare to last month</p>
      </div>

      <div className="compare-card">
        <div className="single-compare-card">
          <div className="compare-content-card">
            <div className="compare-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.3333 5V6.78421L12 7.83421V6.57895H20.3333V18.4211H16.1667V20H22V5H10.3333ZM8.25 7.36842L2 11.3158V20H14.5V11.3158L8.25 7.36842ZM13.6667 8.15789V8.89211L15.0083 9.73684H15.3333V8.15789H13.6667ZM17 8.15789V9.73684H18.6667V8.15789H17ZM8.25 9.34211L12.8333 12.1053V18.4211H10.3333V13.6842H6.16667V18.4211H3.66667V12.1053L8.25 9.34211ZM17 11.3158V12.8947H18.6667V11.3158H17ZM17 14.4737V16.0526H18.6667V14.4737H17Z"
                  fill="#737B8B"
                />
              </svg>
            </div>

            <div className="compare-text-info">
              <p>Housing</p>
              <h3>
                $2500
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                  >
                    <path
                      d="M1 8L20 8"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 1L20 8L13 15"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h3>
              <p>
                15%*
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 12.6667V3.33333"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33337 7.99999L8.00004 3.33333L12.6667 7.99999"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="single-compare-card">
          <div className="compare-content-card">
            <div className="compare-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4.77778L18.75 9.77778V19.7778H5.25V9.77778L12 4.77778ZM12 2L3 8.66667V22H21V8.66667L12 2ZM11.4375 9.22222V12.5556H10.875V9.22222H9.75V12.5556H9.1875V9.22222H8.0625V12.5556C8.0625 13.4778 8.81625 14.2222 9.75 14.2222V18.6667H10.875V14.2222C11.8088 14.2222 12.5625 13.4778 12.5625 12.5556V9.22222H11.4375ZM13.125 11.4444V14.7778H14.25V18.6667H15.375V9.22222C14.1375 9.22222 13.125 10.2222 13.125 11.4444Z"
                  fill="#737B8B"
                />
              </svg>
            </div>

            <div className="compare-text-info">
              <p>Subscriptions</p>
              <h3>
                $650
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                  >
                    <path
                      d="M1 8L20 8"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 1L20 8L13 15"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h3>
              <p>
                15%*
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 12.6667V3.33333"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33337 7.99999L8.00004 3.33333L12.6667 7.99999"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="single-compare-card">
          <div className="compare-content-card">
            <div className="compare-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 22V15.65L11.625 11H20.375L22 15.65V22H20V20.5H12V22H10ZM12 14.5H20L19.3 12.5H12.7L12 14.5ZM13 18.5C13.2833 18.5 13.521 18.404 13.713 18.212C13.9043 18.0207 14 17.7833 14 17.5C14 17.2167 13.9043 16.9793 13.713 16.788C13.521 16.596 13.2833 16.5 13 16.5C12.7167 16.5 12.4793 16.596 12.288 16.788C12.096 16.9793 12 17.2167 12 17.5C12 17.7833 12.096 18.0207 12.288 18.212C12.4793 18.404 12.7167 18.5 13 18.5ZM19 18.5C19.2833 18.5 19.5207 18.404 19.712 18.212C19.904 18.0207 20 17.7833 20 17.5C20 17.2167 19.904 16.9793 19.712 16.788C19.5207 16.596 19.2833 16.5 19 16.5C18.7167 16.5 18.4793 16.596 18.288 16.788C18.096 16.9793 18 17.2167 18 17.5C18 17.7833 18.096 18.0207 18.288 18.212C18.4793 18.404 18.7167 18.5 19 18.5ZM6 14V12H8V14H6ZM11 8V6H13V8H11ZM6 18V16H8V18H6ZM6 22V20H8V22H6ZM2 22V8H7V2H17V9H15V4H9V10H4V22H2ZM11.5 19H20.5V16H11.5V19Z"
                  fill="#737B8B"
                />
              </svg>
            </div>

            <div className="compare-text-info">
              <p>Lunch</p>
              <h3>
                $25.00
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                  >
                    <path
                      d="M1 8L20 8"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 1L20 8L13 15"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h3>
              <p>
                15%*
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 12.6667V3.33333"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33337 7.99999L8.00004 3.33333L12.6667 7.99999"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="single-compare-card">
          <div className="compare-content-card">
            <div className="compare-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.75 7.45999L12 3.92999L13.97 3.53999L16.71 7.06999L14.75 7.45999ZM21.62 6.09999L20.84 2.17999L16.91 2.95999L19.65 6.49999L21.62 6.09999ZM11.81 8.04999L9.06995 4.49999L7.09995 4.90999L9.84995 8.43999L11.81 8.04999ZM4.15995 5.49999L3.17995 5.68999C2.92235 5.74079 2.67731 5.84194 2.45888 5.98764C2.24045 6.13334 2.05293 6.32072 1.90707 6.53904C1.76121 6.75737 1.65988 7.00234 1.6089 7.2599C1.55791 7.51747 1.55827 7.78257 1.60995 8.03999L1.99995 9.99999L6.89995 9.02999L4.15995 5.49999ZM3.99995 20V12H20V13.09C20.72 13.21 21.39 13.46 22 13.81V9.99999H1.99995V20C1.99995 20.5304 2.21067 21.0391 2.58574 21.4142C2.96081 21.7893 3.46952 22 3.99995 22H13.81C13.46 21.39 13.22 20.72 13.09 20H3.99995ZM21.34 15.84L17.75 19.43L16.16 17.84L15 19L17.75 22L22.5 17.25L21.34 15.84Z"
                  fill="#737B8B"
                />
              </svg>
            </div>

            <div className="compare-text-info">
              <p>Electricity</p>
              <h3>
                $78
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                  >
                    <path
                      d="M1 8L20 8"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 1L20 8L13 15"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h3>
              <p>
                15%*
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 12.6667V3.33333"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33337 7.99999L8.00004 3.33333L12.6667 7.99999"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="single-compare-card">
          <div className="compare-content-card">
            <div className="compare-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.3333 5V6.78421L12 7.83421V6.57895H20.3333V18.4211H16.1667V20H22V5H10.3333ZM8.25 7.36842L2 11.3158V20H14.5V11.3158L8.25 7.36842ZM13.6667 8.15789V8.89211L15.0083 9.73684H15.3333V8.15789H13.6667ZM17 8.15789V9.73684H18.6667V8.15789H17ZM8.25 9.34211L12.8333 12.1053V18.4211H10.3333V13.6842H6.16667V18.4211H3.66667V12.1053L8.25 9.34211ZM17 11.3158V12.8947H18.6667V11.3158H17ZM17 14.4737V16.0526H18.6667V14.4737H17Z"
                  fill="#737B8B"
                />
              </svg>
            </div>

            <div className="compare-text-info">
              <p>Salaries</p>
              <h3>
                $354
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                  >
                    <path
                      d="M1 8L20 8"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 1L20 8L13 15"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h3>
              <p>
                15%*
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 12.6667V3.33333"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33337 7.99999L8.00004 3.33333L12.6667 7.99999"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="single-compare-card">
          <div className="compare-content-card">
            <div className="compare-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3ZM5 11H9V5H5V11ZM15 19H19V13H15V19ZM15 7H19V5H15V7ZM5 19H9V17H5V19Z"
                  fill="#737B8B"
                />
              </svg>
            </div>

            <div className="compare-text-info">
              <p>Trips</p>
              <h3>
                $678
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                  >
                    <path
                      d="M1 8L20 8"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 1L20 8L13 15"
                      stroke="#3CD856"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h3>
              <p>
                15%*
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 12.6667V3.33333"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33337 7.99999L8.00004 3.33333L12.6667 7.99999"
                      stroke="#E73D1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpenseBreakdownCard;
