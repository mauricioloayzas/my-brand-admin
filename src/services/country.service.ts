import {CountryDTO} from "../DTOs/country/country.dto.ts";

const url = `${import.meta.env.VITE_API_BASE_SERVICE_URL}countries`;

const countryService = {
  getAllCountries: async (): Promise<CountryDTO[]> =>  {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch countries");
    const countries: CountryDTO[] = await response.json().then((value: CountryDTO[]) => {
      return value.countries as CountryDTO[];
    });
    return countries;
  }
}
export default countryService;