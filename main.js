
let github_link = "https://rampugnant.github.io/datafile.json";
$.getJSON(github_link, function(data) {
     //data is the JSON string
     console.log(data);
});