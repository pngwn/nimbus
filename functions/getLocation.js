const fetch = require('node-fetch');

exports.handler = async event => {
  const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
  const key = process.env.GUGL_PLACES;
  const input = event.queryStringParameters.input;
  const str = `${url}key=${key}&input=${input}`;

  const r = await (await fetch(str)).json();
  const places = r.predictions.map(v => v.description);

  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(places),
  };
};
