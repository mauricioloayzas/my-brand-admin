import BulkActions from "../../utils/dropdowns/BulkActions";
import CategoryList from "../../utils/dropdowns/CategoryList";
import EmployeeLength from "../../utils/dropdowns/EmployeeLength";
import ProductStock from "../../utils/dropdowns/ProductStock";
import ProductType from "../../utils/dropdowns/ProductType";
import {CountryDTO} from "../../../DTOs/country/country.dto.ts";
import {useEffect, useState} from "react";
import CountryService from "../../../services/country.service.ts";

const GetAllCountries = () => {
  const [countries, setCountries] = useState<CountryDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response: CountryDTO[] = await CountryService.getAllCountries();
        setCountries(response);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    void fetchCountries(); // Ensure it's executed without returning a promise to useEffect
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="col-12">
      <div className="">
        <div className="border-bottom pb-2 fw-bold text-dark mb-4 card-header">
          Countries
        </div>
        <div className="card-body">
          <div className="table-filter-option">
            <div className="row g-3">
              <div className="col-xl-9 col-md-8">
                <div className="row g-3">
                  <div className="col">
                    <form className="row g-2">
                      <div className="col">
                        <BulkActions />
                      </div>
                      <div className="col">
                        <button className="btn btn-sm btn-primary w-100 h-100">
                          Apply
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col">
                    <CategoryList />
                  </div>
                  <div className="col">
                    <ProductType />
                  </div>
                  <div className="col">
                    <ProductStock />
                  </div>
                  <div className="col">
                    <button className="btn btn-sm btn-primary h-100">
                      <i className="fa-light fa-filter"></i>
                      Filter
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 d-flex justify-content-between align-items-end">
                <div className="tableSearch" id="tableSearch"></div>
                <div id="productTableLength">
                  <EmployeeLength />
                </div>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table
              className="table table-dashed table-hover digi-dataTable all-product-table table-striped"
              id="allProductTable"
            >
              <thead>
                <tr>
                  <th className="no-sort">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="markAllProduct"
                      />
                    </div>
                  </th>
                  <th>id</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {countries.map((country) => (
                <tr key={country.id}>
                  <td>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox"/>
                    </div>
                  </td>
                  <td>{country.id}</td>
                  <td>{country.name}</td>
                  <td>
                    <div className="btn-box">
                      <button>
                        <i className="fa-light fa-eye"></i>
                      </button>
                      <button>
                        <i className="fa-light fa-pen"></i>
                      </button>
                      <button>
                        <i className="fa-light fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>

          <div className="table-bottom-control"></div>
        </div>
      </div>
    </div>
  );
};
export default GetAllCountries;
