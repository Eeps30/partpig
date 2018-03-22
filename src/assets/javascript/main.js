document.addEventListener("DOMContentLoaded", function () {
    console.log('load worked');
    initializeApp();
});

function initializeApp() {
    applyButtonClickHandlers();
}

function applyButtonClickHandlers() {
    var url = window.location.pathname
    var filename = url.substring(url.lastIndexOf('/') + 1);
    if (filename === 'index.html') {
        document.getElementById('goToSearchPage').addEventListener('click', function () {
            console.log('button clicked');
            window.location.href = "./search_page.html";
        })
    }
    else if (filename === 'search_page.html') {
        document.getElementById('goToSearchResults').addEventListener('click', function () {
            console.log('button clicked');
            window.location.href = "./search_results.html";
        })
    }
    else if (filename === 'search_results.html') {
        document.getElementById('goToSingleResult').addEventListener('click', function () {
            console.log('button clicked');
            window.location.href = "./product_details.html";
        })
    }
    else if (filename === 'product_details.html') {
        // document.getElementById('goToIndexPage').addEventListener('click', function () {
        //     console.log('button clicked');
        //     window.location.href = "./index.html";
        // })
    }
  
}