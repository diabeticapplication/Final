//Responsible for fetching data
const EleventyFetch =  require("@11ty/eleventy-fetch");

module.exports = async function () {
let url = 'https://script.google.com/macros/s/AKfycbxMhxY5Gk2aVXglLp_77xKcqGW49YzK5KOVrMqobfvRV7pebD7flOxz0UJEwe96UjRw/exec';

const response = await EleventyFetch(url, {
duration: "1d",
type: "json"
});

return response.data;
};