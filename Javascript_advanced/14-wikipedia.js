function createElement(data) {
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();

    const url =
        "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    xhr.open("GET", url);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            // fetch of the extract
            const pages = response.query.pages;
            const pagesId = Object.keys(pages)[0];
            const extract = pages[pagesId].extract;

            // call the callback
            callback(extract);
        }
    };

    xhr.send();
}

queryWikipedia(createElement);
