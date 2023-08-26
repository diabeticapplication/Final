//Responsible for fetching data
const EleventyFetch =  require("@11ty/eleventy-fetch");

module.exports = async function () {
let url = 'https://script.google.com/macros/s/AKfycby-my-mp8zc4JQ5SC9smcLVbc4_AxoMUjc7iu8b6NNe8Tei2e4aQPZB5xUKpH6UkAJE/exec';

const response = await EleventyFetch(url, {
duration: "1d",
type: "json"
});

return response.data;
};