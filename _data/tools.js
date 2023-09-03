//Responsible for fetching data
const EleventyFetch =  require("@11ty/eleventy-fetch");

module.exports = async function () {
let url = 'https://script.google.com/macros/s/AKfycbx1KKjXt75hHuawF2a4VeCUyQNxnUu7ScEDR1iABb86HbIPdVjwVOo-IR_PcG3d3BO3/exec';

const response = await EleventyFetch(url, {
duration: "1d",
type: "json"
});

return response.data;
};