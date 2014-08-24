var scrollSpeed = 80;       // Speed in milliseconds
var step = 1;               // How many pixels to move per step
var current = -100;         // The current pixel row
var imageHeight = 2100;     // Background image height
var headerHeight = 375;     // How tall the header is.

//The pixel row where to start a new loop
var restartPosition = -(imageHeight - headerHeight);

function scrollBg(){
    //Go to next pixel row.
    current -= step;

    //If at the end of the image, then go to the top.
    if (current == restartPosition){
        current = 0;
    }

    //Set the CSS of the header.
    $('#banner').css("background-position","center "+current+"px");
}

//Calls the scrolling function repeatedly
var init = setInterval("scrollBg()", scrollSpeed);
