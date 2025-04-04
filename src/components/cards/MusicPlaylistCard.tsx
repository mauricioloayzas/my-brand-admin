import { musicPlaylist } from "../../data";
import { useAppSelector } from "../../redux/hooks";

const MusicPlaylistCard = () => {
  const darkmode = useAppSelector((state) => state.theme.isDark);
  return (
    <div className="music-playlist">
      <div className="table-responsive">
        <table className="table music-playlist-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Album</th>
              <th>Date added</th>
              <th>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.3788 11.214 12.725 11.5528 12.8944L15.5528 14.8944C16.0468 15.1414 16.6474 14.9412 16.8944 14.4472C17.1414 13.9532 16.9412 13.3526 16.4472 13.1056L13 11.382V6Z"
                    fill={darkmode ? "#fff" : "#000"}
                  />
                </svg>
              </th>
            </tr>
          </thead>

          <tbody>
            {musicPlaylist.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">{item.title}</h6>
                      <p className="mb-0">{item.subTitle}</p>
                    </div>
                  </div>
                </td>
                <td>{item.album}</td>
                <td>{item.date} days ago</td>
                <td>{item.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MusicPlaylistCard;
