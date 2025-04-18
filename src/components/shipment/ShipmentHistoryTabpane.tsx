const ShipmentHistoryTabpane = () => {
  return (
    <>
      <div className="single-shipment-history">
        <div className="shipment-header d-flex align-items-center justify-content-between">
          <div className="d-flex flex-wrap align-items-center me-4">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.9591 14.4866L20.5564 16.3906C19.859 19.6661 17.3935 22 13.8378 22H9.16223C5.60646 22 3.141 19.6661 2.4436 16.3906L2.04088 14.4866C1.84442 13.5551 2.37484 12.5008 3.22941 12.1425L4.62421 11.5591L10.0364 9.29685C10.5079 9.10236 11.0089 9 11.5 9C11.9911 9 12.4921 9.10236 12.9636 9.29685L18.3758 11.5591L19.7706 12.1425C20.6252 12.5008 21.1556 13.5551 20.9591 14.4866Z"
                  fill="white"
                />
                <path
                  d="M19 8.03925V9.48867C19 9.84096 18.64 10.0926 18.31 9.95168L14.04 8.2305C12.724 7.71539 11.2634 7.71898 9.95 8.24056L5.69 9.96175C5.61426 9.99333 5.53196 10.0057 5.45037 9.99761C5.36878 9.98957 5.29042 9.96142 5.2222 9.91565C5.15399 9.86987 5.09803 9.80789 5.05928 9.73518C5.02052 9.66246 5.00016 9.58126 5 9.49874V8.03925C5 6.37846 6.35 5.01963 8 5.01963H16C17.65 5.01963 19 6.37846 19 8.03925ZM14.5 5.01963H9.5V3.00654C9.5 2.45294 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45294 14.5 3.00654V5.01963Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="title-invoice">
              <p className="mb-1">Ship Freight</p>
              <h6 className="mb-0">#5635-342808</h6>
            </div>
          </div>
          <div className="shipment-status delivered">Delivered</div>
        </div>

        <div className="shipment-timeline">
          <div className="single-timeline d-flex align-items-center">
            <div className="timeline-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M19 10.5C19 15.175 15.175 19 10.5 19C5.825 19 2 15.175 2 10.5C2 5.825 5.825 2 10.5 2C15.175 2 19 5.825 19 10.5ZM10.5 8.8C9.565 8.8 8.8 9.565 8.8 10.5C8.8 11.435 9.565 12.2 10.5 12.2C11.435 12.2 12.2 11.435 12.2 10.5C12.2 9.565 11.435 8.8 10.5 8.8ZM5.73999 8.71499C6.24999 7.26999 7.44001 6.165 8.885 5.74C9.31 5.57 9.565 5.145 9.395 4.635C9.225 4.21 8.79999 3.955 8.28999 4.125C6.33499 4.805 4.80499 6.25 4.03999 8.12C3.86999 8.545 4.125 9.055 4.55 9.225C4.635 9.225 4.71999 9.31 4.88999 9.31C5.31499 9.225 5.56999 8.97 5.73999 8.71499ZM12.88 16.875C14.75 16.195 16.28 14.665 16.96 12.795C17.13 12.37 16.875 11.86 16.45 11.69C16.025 11.52 15.515 11.775 15.345 12.2C14.835 13.645 13.73 14.75 12.285 15.26C11.86 15.43 11.605 15.94 11.775 16.365C11.86 16.705 12.2 16.96 12.54 16.96C12.625 16.96 12.71 16.96 12.88 16.875Z"
                  fill="#F1416C"
                />
                <path
                  d="M14 10.5C14 12.425 12.425 14 10.5 14C8.575 14 7 12.425 7 10.5C7 8.575 8.575 7 10.5 7C12.425 7 14 8.575 14 10.5ZM10.5 8.75C9.5375 8.75 8.75 9.5375 8.75 10.5C8.75 11.4625 9.5375 12.25 10.5 12.25C11.4625 12.25 12.25 11.4625 12.25 10.5C12.25 9.5375 11.4625 8.75 10.5 8.75Z"
                  fill="#F1416C"
                />
              </svg>
            </div>
            <div>
              <p className="mb-1">Messina Harbor</p>
              <h6 className="mb-0 text-truncate">Sicily, Italy</h6>
            </div>
          </div>

          <div className="single-timeline d-flex align-items-center">
            <div className="timeline-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M14.4466 13.0805L10.4581 17.5641C9.96966 18.1453 9.15567 18.1453 8.66728 17.5641L4.67878 13.0805C3.4578 11.669 2.80661 9.84237 3.05081 7.76667C3.4578 4.77761 5.81835 2.36976 8.74868 2.03765C12.6558 1.6225 15.9931 4.69459 15.9931 8.59696C16.0745 10.3405 15.4234 11.9181 14.4466 13.0805Z"
                  fill="#009EF7"
                />
                <path
                  d="M9.49999 11C10.8807 11 12 9.88071 12 8.49996C12 7.11928 10.8807 6 9.49999 6C8.11932 6 7 7.11928 7 8.49996C7 9.88071 8.11932 11 9.49999 11Z"
                  fill="#009EF7"
                />
              </svg>
            </div>
            <div>
              <p className="mb-1">Hektor Container Hotel</p>
              <h6 className="mb-0 text-truncate">Tallin, EST</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="single-shipment-history">
        <div className="shipment-header d-flex align-items-center justify-content-between">
          <div className="d-flex flex-wrap align-items-center me-4">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 2.91336V11.1634C14 12.176 13.17 13 12.15 13H3C2.45 13 2 12.5532 2 12.0072V5.66336C2 3.63809 3.65 2 5.69 2H13.07C13.59 2 14 2.40704 14 2.91336Z"
                  fill="white"
                />
                <path
                  d="M21.5 15.5C21.78 15.5 22 15.72 22 16V17C22 18.66 20.66 20 19 20C19 18.35 17.65 17 16 17C14.35 17 13 18.35 13 20H11C11 18.35 9.65 17 8 17C6.35 17 5 18.35 5 20C3.34 20 2 18.66 2 17V15C2 14.45 2.45 14 3 14H12.5C13.163 14 13.7989 13.7366 14.2678 13.2678C14.7366 12.7989 15 12.163 15 11.5V6C15 5.45 15.45 5 16 5H16.84C17.56 5 18.22 5.39 18.58 6.01L19.22 7.13C19.31 7.29 19.19 7.5 19 7.5C18.337 7.5 17.7011 7.76339 17.2322 8.23223C16.7634 8.70107 16.5 9.33696 16.5 10V13C16.5 13.663 16.7634 14.2989 17.2322 14.7678C17.7011 15.2366 18.337 15.5 19 15.5H21.5Z"
                  fill="white"
                />
                <path
                  d="M8 22C8.53043 22 9.03914 21.7893 9.41421 21.4142C9.78929 21.0391 10 20.5304 10 20C10 19.4696 9.78929 18.9609 9.41421 18.5858C9.03914 18.2107 8.53043 18 8 18C7.46957 18 6.96086 18.2107 6.58579 18.5858C6.21071 18.9609 6 19.4696 6 20C6 20.5304 6.21071 21.0391 6.58579 21.4142C6.96086 21.7893 7.46957 22 8 22ZM16 22C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20C18 19.4696 17.7893 18.9609 17.4142 18.5858C17.0391 18.2107 16.5304 18 16 18C15.4696 18 14.9609 18.2107 14.5858 18.5858C14.2107 18.9609 14 19.4696 14 20C14 20.5304 14.2107 21.0391 14.5858 21.4142C14.9609 21.7893 15.4696 22 16 22ZM22 12.53V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L21.74 11.54C21.91 11.84 22 12.18 22 12.53Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="title-invoice">
              <p className="mb-1">Truck Freight</p>
              <h6 className="mb-0">#0066-954784</h6>
            </div>
          </div>
          <div className="shipment-status shipping">Shipping</div>
        </div>

        <div className="shipment-timeline">
          <div className="single-timeline d-flex align-items-center">
            <div className="timeline-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M19 10.5C19 15.175 15.175 19 10.5 19C5.825 19 2 15.175 2 10.5C2 5.825 5.825 2 10.5 2C15.175 2 19 5.825 19 10.5ZM10.5 8.8C9.565 8.8 8.8 9.565 8.8 10.5C8.8 11.435 9.565 12.2 10.5 12.2C11.435 12.2 12.2 11.435 12.2 10.5C12.2 9.565 11.435 8.8 10.5 8.8ZM5.73999 8.71499C6.24999 7.26999 7.44001 6.165 8.885 5.74C9.31 5.57 9.565 5.145 9.395 4.635C9.225 4.21 8.79999 3.955 8.28999 4.125C6.33499 4.805 4.80499 6.25 4.03999 8.12C3.86999 8.545 4.125 9.055 4.55 9.225C4.635 9.225 4.71999 9.31 4.88999 9.31C5.31499 9.225 5.56999 8.97 5.73999 8.71499ZM12.88 16.875C14.75 16.195 16.28 14.665 16.96 12.795C17.13 12.37 16.875 11.86 16.45 11.69C16.025 11.52 15.515 11.775 15.345 12.2C14.835 13.645 13.73 14.75 12.285 15.26C11.86 15.43 11.605 15.94 11.775 16.365C11.86 16.705 12.2 16.96 12.54 16.96C12.625 16.96 12.71 16.96 12.88 16.875Z"
                  fill="#F1416C"
                />
                <path
                  d="M14 10.5C14 12.425 12.425 14 10.5 14C8.575 14 7 12.425 7 10.5C7 8.575 8.575 7 10.5 7C12.425 7 14 8.575 14 10.5ZM10.5 8.75C9.5375 8.75 8.75 9.5375 8.75 10.5C8.75 11.4625 9.5375 12.25 10.5 12.25C11.4625 12.25 12.25 11.4625 12.25 10.5C12.25 9.5375 11.4625 8.75 10.5 8.75Z"
                  fill="#F1416C"
                />
              </svg>
            </div>
            <div>
              <p className="mb-1">Haven van Rotterdam</p>
              <h6 className="mb-0 text-truncate">Rotterdam, Netherlands</h6>
            </div>
          </div>

          <div className="single-timeline d-flex align-items-center">
            <div className="timeline-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M14.4466 13.0805L10.4581 17.5641C9.96966 18.1453 9.15567 18.1453 8.66728 17.5641L4.67878 13.0805C3.4578 11.669 2.80661 9.84237 3.05081 7.76667C3.4578 4.77761 5.81835 2.36976 8.74868 2.03765C12.6558 1.6225 15.9931 4.69459 15.9931 8.59696C16.0745 10.3405 15.4234 11.9181 14.4466 13.0805Z"
                  fill="#009EF7"
                />
                <path
                  d="M9.49999 11C10.8807 11 12 9.88071 12 8.49996C12 7.11928 10.8807 6 9.49999 6C8.11932 6 7 7.11928 7 8.49996C7 9.88071 8.11932 11 9.49999 11Z"
                  fill="#009EF7"
                />
              </svg>
            </div>
            <div>
              <p className="mb-1">Forest-Midi</p>
              <h6 className="mb-0 text-truncate">Brussels, Belgium</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="single-shipment-history">
        <div className="shipment-header d-flex align-items-center justify-content-between">
          <div className="d-flex flex-wrap align-items-center me-4">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.5 15.5C21.78 15.5 22 15.72 22 16V17C22 18.66 20.66 20 19 20C19 18.35 17.65 17 16 17C14.35 17 13 18.35 13 20H11C11 18.35 9.65 17 8 17C6.35 17 5 18.35 5 20C3.34 20 2 18.66 2 17V15C2 14.45 2.45 14 3 14H12.5C13.163 14 13.7989 13.7366 14.2678 13.2678C14.7366 12.7989 15 12.163 15 11.5V6C15 5.45 15.45 5 16 5H16.84C17.56 5 18.22 5.39 18.58 6.01L19.22 7.13C19.31 7.29 19.19 7.5 19 7.5C18.337 7.5 17.7011 7.76339 17.2322 8.23223C16.7634 8.70107 16.5 9.33696 16.5 10V13C16.5 13.663 16.7634 14.2989 17.2322 14.7678C17.7011 15.2366 18.337 15.5 19 15.5H21.5Z"
                  fill="white"
                />
                <path
                  d="M7.83908 22C8.37561 22 8.89017 21.7893 9.26955 21.4142C9.64893 21.0391 9.86207 20.5304 9.86207 20C9.86207 19.4696 9.64893 18.9609 9.26955 18.5858C8.89017 18.2107 8.37561 18 7.83908 18C7.30255 18 6.788 18.2107 6.40861 18.5858C6.02923 18.9609 5.81609 19.4696 5.81609 20C5.81609 20.5304 6.02923 21.0391 6.40861 21.4142C6.788 21.7893 7.30255 22 7.83908 22ZM15.931 22C16.4676 22 16.9821 21.7893 17.3615 21.4142C17.7409 21.0391 17.954 20.5304 17.954 20C17.954 19.4696 17.7409 18.9609 17.3615 18.5858C16.9821 18.2107 16.4676 18 15.931 18C15.3945 18 14.88 18.2107 14.5006 18.5858C14.1212 18.9609 13.908 19.4696 13.908 20C13.908 20.5304 14.1212 21.0391 14.5006 21.4142C14.88 21.7893 15.3945 22 15.931 22ZM22 12.53V14H18.9655C18.4092 14 17.954 13.55 17.954 13V10C17.954 9.45 18.4092 9 18.9655 9H20.2703L21.737 11.54C21.909 11.84 22 12.18 22 12.53ZM12.9775 2H5.50253C4.63745 2.00024 3.79931 2.29756 3.13143 2.84112C2.46354 3.38468 2.00737 4.14073 1.84092 4.98H6.26115C6.64552 4.98 6.94897 5.29 6.94897 5.67C6.94897 6.05 6.64552 6.35 6.26115 6.35H1.77012V7.73H4.4C4.78437 7.73 5.09793 8.04 5.09793 8.42C5.09793 8.8 4.78437 9.1 4.4 9.1H1.77012V10.48H2.54897C2.93333 10.48 3.2469 10.79 3.2469 11.17C3.2469 11.55 2.93333 11.85 2.54897 11.85H1.77012V12.08C1.77012 12.63 2.22529 13.08 2.78161 13.08H12.0368C13.0685 13.08 13.908 12.25 13.908 11.23V2.92C13.908 2.41 13.4933 2 12.9775 2ZM1.84092 4.98H0.697931C0.313563 4.98 0 5.29 0 5.67C0 6.05 0.313563 6.35 0.697931 6.35H1.77012V5.69C1.77012 5.45 1.80046 5.21 1.84092 4.98ZM1.61839 7.73H0.697931C0.313563 7.73 0 8.04 0 8.42C0 8.8 0.313563 9.1 0.697931 9.1H1.77012V7.73H1.61839ZM1.61839 10.48H0.697931C0.313563 10.48 0 10.79 0 11.17C0 11.55 0.313563 11.85 0.697931 11.85H1.77012V10.48H1.61839Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="title-invoice">
              <p className="mb-1">Delivery Freight</p>
              <h6 className="mb-0">#5635-342808</h6>
            </div>
          </div>
          <div className="shipment-status delivered">Delivered</div>
        </div>

        <div className="shipment-timeline">
          <div className="single-timeline d-flex align-items-center">
            <div className="timeline-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M19 10.5C19 15.175 15.175 19 10.5 19C5.825 19 2 15.175 2 10.5C2 5.825 5.825 2 10.5 2C15.175 2 19 5.825 19 10.5ZM10.5 8.8C9.565 8.8 8.8 9.565 8.8 10.5C8.8 11.435 9.565 12.2 10.5 12.2C11.435 12.2 12.2 11.435 12.2 10.5C12.2 9.565 11.435 8.8 10.5 8.8ZM5.73999 8.71499C6.24999 7.26999 7.44001 6.165 8.885 5.74C9.31 5.57 9.565 5.145 9.395 4.635C9.225 4.21 8.79999 3.955 8.28999 4.125C6.33499 4.805 4.80499 6.25 4.03999 8.12C3.86999 8.545 4.125 9.055 4.55 9.225C4.635 9.225 4.71999 9.31 4.88999 9.31C5.31499 9.225 5.56999 8.97 5.73999 8.71499ZM12.88 16.875C14.75 16.195 16.28 14.665 16.96 12.795C17.13 12.37 16.875 11.86 16.45 11.69C16.025 11.52 15.515 11.775 15.345 12.2C14.835 13.645 13.73 14.75 12.285 15.26C11.86 15.43 11.605 15.94 11.775 16.365C11.86 16.705 12.2 16.96 12.54 16.96C12.625 16.96 12.71 16.96 12.88 16.875Z"
                  fill="#F1416C"
                />
                <path
                  d="M14 10.5C14 12.425 12.425 14 10.5 14C8.575 14 7 12.425 7 10.5C7 8.575 8.575 7 10.5 7C12.425 7 14 8.575 14 10.5ZM10.5 8.75C9.5375 8.75 8.75 9.5375 8.75 10.5C8.75 11.4625 9.5375 12.25 10.5 12.25C11.4625 12.25 12.25 11.4625 12.25 10.5C12.25 9.5375 11.4625 8.75 10.5 8.75Z"
                  fill="#F1416C"
                />
              </svg>
            </div>
            <div>
              <p className="mb-1">Mina St - Zayed Port</p>
              <h6 className="mb-0 text-truncate">Abu Dhabi, UAE</h6>
            </div>
          </div>

          <div className="single-timeline d-flex align-items-center">
            <div className="timeline-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M14.4466 13.0805L10.4581 17.5641C9.96966 18.1453 9.15567 18.1453 8.66728 17.5641L4.67878 13.0805C3.4578 11.669 2.80661 9.84237 3.05081 7.76667C3.4578 4.77761 5.81835 2.36976 8.74868 2.03765C12.6558 1.6225 15.9931 4.69459 15.9931 8.59696C16.0745 10.3405 15.4234 11.9181 14.4466 13.0805Z"
                  fill="#009EF7"
                />
                <path
                  d="M9.49999 11C10.8807 11 12 9.88071 12 8.49996C12 7.11928 10.8807 6 9.49999 6C8.11932 6 7 7.11928 7 8.49996C7 9.88071 8.11932 11 9.49999 11Z"
                  fill="#009EF7"
                />
              </svg>
            </div>
            <div>
              <p className="mb-1">27 Drydock Boston</p>
              <h6 className="mb-0 text-truncate">Boston, USA</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="single-shipment-history">
        <div className="shipment-header d-flex align-items-center justify-content-between">
          <div className="d-flex flex-wrap align-items-center me-4">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.8836 10.6317L15.3101 8.62191L14.2916 8.18195C14.2082 8.13477 14.1377 8.06708 14.0864 7.98501C14.0351 7.90295 14.0046 7.8091 13.9978 7.71199V4.65226C13.9978 3.69235 13.3025 2.55245 12.4603 2.11249C12.1665 1.9625 11.8139 1.9625 11.5201 2.11249C10.6877 2.55245 9.99238 3.70235 9.99238 4.66226V7.72199C9.99238 7.90198 9.85528 8.11196 9.69859 8.19195L4.11643 10.6417C3.49946 10.9017 3 11.6916 3 12.3716V13.6915C3 14.5414 3.62677 14.9614 4.40044 14.6214L9.30686 12.4616C9.68879 12.2916 10.0022 12.5016 10.0022 12.9315V15.8413C10.0022 16.0713 9.87486 16.4012 9.71817 16.5612L7.44614 18.891C7.2111 19.131 7.10337 19.6009 7.2111 19.9409L7.6518 21.3008C7.82807 21.8907 8.48422 22.1707 9.02285 21.8907L11.3536 19.8909C11.7062 19.5809 12.284 19.5809 12.6366 19.8909L14.9674 21.8907C15.506 22.1607 16.1621 21.8907 16.358 21.3008L16.7987 19.9409C16.9064 19.6109 16.7987 19.131 16.5637 18.891L14.2916 16.5612C14.1251 16.4012 13.9978 16.0713 13.9978 15.8413V12.9315C13.9978 12.5016 14.3014 12.3016 14.6931 12.4616L19.5996 14.6214C20.3732 14.9614 21 14.5414 21 13.6915V12.3716C21 11.6916 20.5005 10.9017 19.8836 10.6317Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="title-invoice">
              <p className="mb-1">Plane Freight</p>
              <h6 className="mb-0">#5635-342808</h6>
            </div>
          </div>
          <div className="shipment-status delayed">Delayed</div>
        </div>

        <div className="shipment-timeline">
          <div className="single-timeline d-flex align-items-center">
            <div className="timeline-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M19 10.5C19 15.175 15.175 19 10.5 19C5.825 19 2 15.175 2 10.5C2 5.825 5.825 2 10.5 2C15.175 2 19 5.825 19 10.5ZM10.5 8.8C9.565 8.8 8.8 9.565 8.8 10.5C8.8 11.435 9.565 12.2 10.5 12.2C11.435 12.2 12.2 11.435 12.2 10.5C12.2 9.565 11.435 8.8 10.5 8.8ZM5.73999 8.71499C6.24999 7.26999 7.44001 6.165 8.885 5.74C9.31 5.57 9.565 5.145 9.395 4.635C9.225 4.21 8.79999 3.955 8.28999 4.125C6.33499 4.805 4.80499 6.25 4.03999 8.12C3.86999 8.545 4.125 9.055 4.55 9.225C4.635 9.225 4.71999 9.31 4.88999 9.31C5.31499 9.225 5.56999 8.97 5.73999 8.71499ZM12.88 16.875C14.75 16.195 16.28 14.665 16.96 12.795C17.13 12.37 16.875 11.86 16.45 11.69C16.025 11.52 15.515 11.775 15.345 12.2C14.835 13.645 13.73 14.75 12.285 15.26C11.86 15.43 11.605 15.94 11.775 16.365C11.86 16.705 12.2 16.96 12.54 16.96C12.625 16.96 12.71 16.96 12.88 16.875Z"
                  fill="#F1416C"
                />
                <path
                  d="M14 10.5C14 12.425 12.425 14 10.5 14C8.575 14 7 12.425 7 10.5C7 8.575 8.575 7 10.5 7C12.425 7 14 8.575 14 10.5ZM10.5 8.75C9.5375 8.75 8.75 9.5375 8.75 10.5C8.75 11.4625 9.5375 12.25 10.5 12.25C11.4625 12.25 12.25 11.4625 12.25 10.5C12.25 9.5375 11.4625 8.75 10.5 8.75Z"
                  fill="#F1416C"
                />
              </svg>
            </div>
            <div>
              <p className="mb-1">KLM Cargo</p>
              <h6 className="mb-0 text-truncate">Schipol Airport, Amsterdam</h6>
            </div>
          </div>

          <div className="single-timeline d-flex align-items-center">
            <div className="timeline-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M14.4466 13.0805L10.4581 17.5641C9.96966 18.1453 9.15567 18.1453 8.66728 17.5641L4.67878 13.0805C3.4578 11.669 2.80661 9.84237 3.05081 7.76667C3.4578 4.77761 5.81835 2.36976 8.74868 2.03765C12.6558 1.6225 15.9931 4.69459 15.9931 8.59696C16.0745 10.3405 15.4234 11.9181 14.4466 13.0805Z"
                  fill="#009EF7"
                />
                <path
                  d="M9.49999 11C10.8807 11 12 9.88071 12 8.49996C12 7.11928 10.8807 6 9.49999 6C8.11932 6 7 7.11928 7 8.49996C7 9.88071 8.11932 11 9.49999 11Z"
                  fill="#009EF7"
                />
              </svg>
            </div>
            <div>
              <p className="mb-1">Singapore Cargo</p>
              <h6 className="mb-0 text-truncate">Changi Airport, Singapore</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShipmentHistoryTabpane;
