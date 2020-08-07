$( document ).ready(function() {
    new WOW().init();
});

var navbar_observer = new MutationObserver(check_class_change);

function check_class_change(mutations) {
    for (let mutation of mutations) {
        if (mutation.attributeName === 'class') {
            var attributeValue = $(mutation.target).prop(mutation.attributeName);
            console.log("Class attribute changed to:", attributeValue);
        }
    }
}



var topNavigationBar = document.getElementById('topNavigationBar');
var observerOptions = {
    attributes: true
};
navbar_observer.observe(topNavigationBar, observerOptions);