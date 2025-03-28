const UserActivities = () => {
  return (
    <div className="panel">
      <div className="panel-header">
        <h6>User Activities</h6>
        <div className="dropdown">
          <a href="#" className="btn btn-sm btn-primary">
            View All
          </a>
        </div>
      </div>

      <div className="panel-body">
        <div className="user-activity">
          <ul>
            <li>
              <div className="left">
                <span className="user-activity-title">
                  Your account is logged in
                </span>
                <span className="user-activity-details">
                  From "RuthDyer" UiDesign Leave
                </span>
                <span className="user-activity-date">Monday 12 Jan 2020.</span>
              </div>
              <div className="right">
                <span className="user-activity-time">6 min ago</span>
              </div>
            </li>
            <li>
              <div className="left">
                <span className="user-activity-title">
                  Current language has been changed
                </span>
                <span className="user-activity-details">
                  From "RuthDyer" UiDesign Leave
                </span>
                <span className="user-activity-date">Monday 12 Jan 2020.</span>
              </div>
              <div className="right">
                <span className="user-activity-time">16 min ago</span>
              </div>
            </li>
            <li>
              <div className="left">
                <span className="user-activity-title">
                  Leave Approval Request
                </span>
                <span className="user-activity-details">
                  From "RuthDyer" UiDesign Leave
                </span>
                <span className="user-activity-date">Monday 12 Jan 2020.</span>
              </div>
              <div className="right">
                <span className="user-activity-time">6 min ago</span>
              </div>
            </li>
            <li>
              <div className="left">
                <span className="user-activity-title">
                  Asked about this product
                </span>
                <span className="user-activity-details">
                  From "RuthDyer" UiDesign Leave
                </span>
                <span className="user-activity-date">Monday 12 Jan 2020.</span>
              </div>
              <div className="right">
                <span className="user-activity-time">16 min ago</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserActivities;
