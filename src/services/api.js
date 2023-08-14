const key = 'd56d8a350c2945e2876175315231408';

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
};
export default fetchData;
