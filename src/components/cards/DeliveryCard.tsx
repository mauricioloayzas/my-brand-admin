const DeliveryCard = () => {
  return (
    <div className="card delivery-card full-height">
      <p className="mb-4">Delivered</p>
      <div className="d-flex align-items-center justify-content-between">
        <div className="me-4">
          <h4>574</h4>
          <p className="mb-0 decrease">
            <i className="ti ti-arrow-down"></i>33.02%
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="34"
            viewBox="0 0 47 34"
            fill="none"
          >
            <path
              d="M2 16.5H12.2457C12.6922 16.5 13.0846 16.204 13.2072 15.7747L17.0551 2.30719C17.3301 1.34481 18.6917 1.33849 18.9755 2.29828L27.5109 31.1559C27.7959 32.1194 29.1644 32.108 29.4334 31.1399L33.2966 17.2324C33.4168 16.7995 33.8109 16.5 34.2601 16.5H45.5"
              stroke="#D83520"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default DeliveryCard;
