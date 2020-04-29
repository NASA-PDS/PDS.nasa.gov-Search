document.addEventListener("DOMContentLoaded", function () {
	createSearchWidget();
});

(function (window, document) {
    if (window.createSearchWidget !== undefined) {
		return;
    }
    
    window.createSearchWidget = function () {

        let widgetSelector = "#searchWidget";
        let searchButtonLabel = "Search";
        let searchUrl = "";

        let widgetDiv = document.querySelector(widgetSelector);

        var input = document.createElement("INPUT");
        input.setAttribute("type", "text");

        var searchButton = document.createElement("BUTTON");
        searchButton.innerHTML = searchButtonLabel;    

        widgetDiv.appendChild(input);
        widgetDiv.appendChild(searchButton);

        input.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                submitSearch();
            }
        });

        searchButton.addEventListener('click', () => {
            submitSearch();
        });

        input.onchange = () => {
        submitSearch();
        };

        submitSearch = () => {
            let searchText = getSearchInput();
            window.open(searchUrl + "/?&search=" + searchText);
        };

        getSearchInput = () => {
            return input.value;
        };
    }
})(window, document);
