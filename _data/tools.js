//Responsible for fetching data
const EleventyFetch =  require("@11ty/eleventy-fetch");

module.exports = async function () {
let url = 'https://script.google.com/macros/s/AKfycbzesOoH6D-WWH0STToDCcqAQ6ga-frPXZkTTKZtF4k53SI0-_7KqhGdDgNVq-6eewo_/exec';

const response = await EleventyFetch(url, {
duration: "1d",
type: "json"
});

return response.data;
};