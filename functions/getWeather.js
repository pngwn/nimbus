const fetch = require('node-fetch');

exports.handler = async event => {
  const { GUGL_PLACES, DARK_SKY } = process.env;
  let { address, lat, lng, time } = event.queryStringParameters;

  if (!lat || !lng) {
    const geoUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
    const geoStr = `${geoUrl}key=${GUGL_PLACES}&address=${address}`;

    const response = await (await fetch(geoStr)).json();
    ({ lat, lng } = response.results[0].geometry.location);
  }

  const weatherUrl = 'https://api.darksky.net/forecast/';
  const weatherStr = `${weatherUrl}${DARK_SKY}/${lat},${lng}`;

  let weather = await Promise.all([
    fetch(`${weatherStr}?units=uk2`),
    fetch(`${weatherStr},${time}?units=uk2`),
  ]);

  weather = await Promise.all(weather.map(r => r.json()));

  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(
      weather.map(v => ({ data: v.hourly.data, offset: v.offset }))
    ),
  };
};
