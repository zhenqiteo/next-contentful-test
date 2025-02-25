import React, { useEffect, useState } from "react";

const CountryDropdown = ({ value, onChange }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryList = data
          .map((country) => ({
            name: country.name.common,
            code: country.cca2, // Two-letter country code
          }))
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

        setCountries(countryList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded w-full"
      disabled={loading}
    >
      <option value="">Select your country</option>
      {loading ? (
        <option>Loading...</option>
      ) : (
        countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))
      )}
    </select>
  );
};

export default CountryDropdown;
