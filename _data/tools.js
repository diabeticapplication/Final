//Responsible for fetching data
const EleventyFetch =  require("@11ty/eleventy-fetch");

module.exports = async function () {
let url = 'https://script.google.com/macros/s/AKfycbzb0qL24j5jIGPeu0mOFgsy-599Jy0YAD7w4sARyANOyesi0i5qeX2XNcMAW4PsDsBU/exec';

const response = await EleventyFetch(url, {
duration: "1d",
type: "json"
});

return response.data;
};