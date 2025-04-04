import { toggleCreateCountryModalClose } from "../../../redux/my-brand/createCountryModalSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {CountryRequestDTO} from "../../../DTOs/country/countryRequest.dto.ts";
import CountryService from "../../../services/country.service.ts";
import {useState} from "react";

const CreateCountryModal = () => {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector(
    (state) => state.createCountryModal.isModalOpen
  );

  const [countryName, setCountryName] = useState("");

  const closeModal = () => {
    dispatch(toggleCreateCountryModalClose());
  };

  const handleCreate = async () => {
    if (!countryName.trim()) {
      alert("Country name is required");
      return;
    }

    const newCountry: CountryRequestDTO = {
      name: countryName.trim(),
    };

    try {
      const result = await CountryService.createCountry(newCountry);
      console.log("Country created:", result);
      closeModal();
      setCountryName(""); // Clear input
      // Optional: trigger a reload in parent component if needed
    } catch (err) {
      //console.error("Error creating country:", err.message);
      //alert(`Error creating country: ${err.message}`);
    }
  };

  return (
    <>
      <div
        className={`ar-modal-overlay ${activeModal ? "active" : ""}`}
        role="button"
        onClick={closeModal}
      ></div>
      <div
        className={`create-folder-modal-container ${
          activeModal ? "active" : ""
        }`}
      >
        <div className="create-folder-modal-header">
          <h3>Create New Country</h3>
          <button
            className="btn btn-sm btn-outline-primary btn-icon"
            onClick={closeModal}
          >
            <i className="fa-light fa-xmark"></i>
          </button>
        </div>
        <div className="create-folder-modal-body">
          <form>
            <label htmlFor="newCountryName">Country Name</label>
            <input
              type="text"
              id="newCountryName"
              placeholder="Enter Country Name"
              className="form-control mt-1"
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
              required
            />
          </form>
        </div>
        <div className="create-folder-modal-footer">
          <button onClick={closeModal} className="btn btn-sm btn-secondary">
            Close
          </button>
          <button className="btn btn-sm btn-success ms-2" onClick={handleCreate}>Create</button>
        </div>
      </div>
    </>
  );
};
export default CreateCountryModal;
