/*
Template Name: Ok - Admin & Dashboard Template
Author: UXLOGIC
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: two step verification Init Js File
*/


// move next
function moveToNext(elem, count){
    if(elem.value.length > 0) {
        $("#digit"+count+"-input").focus();
    }
}