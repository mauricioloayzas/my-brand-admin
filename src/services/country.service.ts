import {CountryDTO} from "../DTOs/country/country.dto.ts";
import {CountryRequestDTO} from "../DTOs/country/countryRequest.dto.ts";

const url = `${import.meta.env.VITE_API_BASE_SERVICE_URL}countries`;

const CountryService = {
  getAllCountries: async (): Promise<CountryDTO[]> =>  {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch countries");
    const countries: CountryDTO[] = await response.json().then((value: CountryDTO[]) => {
      return value.countries as CountryDTO[];
    });
    return countries;
  },

  getCountryById: async (id: number): Promise<CountryDTO> => {
    const response = await fetch(url+"/"+id);
    if (!response.ok) throw new Error("Failed to fetch countries");
    const country = await response.json().then((value: CountryDTO) => {
      return value as CountryDTO;
    })

    return country;
  },

  createCountry: async (body: CountryRequestDTO): Promise<CountryDTO> => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Amz-Date": "20250402T123456Z", // Formato ISO8601 con hora UTC (ejemplo)
        "Authorization": "Bearer tu_token_aws_o_personalizado",
        "X-Api-Key": "tu-api-key-si-aplica",
        "X-Amz-Security-Token": "tu-token-temporal-si-usas-STS",
        "X-Amz-User-Agent": "MyApp/1.0"
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error("Failed to create country");

    const country = await response.json().then((value: CountryDTO) => {
      return value as CountryDTO;
    });

    return country;
  },

  putCountryById: async (id: number, body: CountryRequestDTO): Promise<CountryDTO> => {
    const response = await fetch(url+"/"+id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error("Failed to create country");

    const country = await response.json().then((value: CountryDTO) => {
      return value as CountryDTO;
    });

    return country;
  }
}
export default CountryService;