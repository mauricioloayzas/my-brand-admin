import GetAllCountries from "../../components/my-brand/country/GetAllCountries.tsx";

const CountryPage = () => {
  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="panel">
          <div className="panel-header">
            <h5>Countries manage</h5>
          </div>
          <div className="panel-body">
            <div className="row g-3">
              <GetAllCountries />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryPage;
