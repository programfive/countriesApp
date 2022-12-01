export async function ApiRestCountries() {
  try {
    const url = `https://restcountries.com/v2/all`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("error not found");
  }
}

export async function searchApiCountries(name) {
  try {
    const url = `https://restcountries.com/v2/name/${name}`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("error not found");
  }
}
export async function regionApiCountries(region) {
  try {
    const url = `https://restcountries.com/v2/region/${region}`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("error not found");
  }
}
