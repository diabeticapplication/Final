//Responsible for fetching data
const EleventyFetch =  require("@11ty/eleventy-fetch");

module.exports = async function () {
let url = 'https://script.google.com/macros/s/AKfycbwXVfhIoJ8uG9EmBy6BGXSK-QOoMly1USRkI4ySsl5r4jIBrTGRscgeDScxPpxiR59J/exec';

const response = await EleventyFetch(url, {
duration: "1d",
type: "json"
});

return response.data;
};