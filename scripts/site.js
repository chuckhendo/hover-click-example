import $ from "jquery";
import whatInput from "what-input";

const $button = $(".button");
const $content = $(".content");
const $container = $(".container");

$button.on("touchend", function() {
    $content.toggleClass("show");
});

$(window).on("touchend", (e) => {
    if($(e.target).closest($container).length === 0) {
        $content.removeClass("show");
    }
});