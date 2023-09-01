//Responsible for fetching data
const EleventyFetch =  require("@11ty/eleventy-fetch");

module.exports = async function () {
let url = 'https://script.google.com/macros/s/AKfycbzVWOn4_OMoT47-7999yc9XXfi8U9h0eVQ11IyX5sGXHgbUl8Y0AfIHA1JzMI3eRwOl/exec';

const response = await EleventyFetch(url, {
duration: "1d",
type: "json"
});

return response.data;
};