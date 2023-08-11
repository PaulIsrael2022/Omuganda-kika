/*
Template Name: Ok - Admin & Dashboard Template
Author: UXLOGIC
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Table responsive Init Js File
*/

$(function() {
    $('.table-responsive').responsiveTable({
        addDisplayAllBtn: 'btn btn-secondary'
    });

    $('.btn-toolbar [data-toggle=dropdown]').attr('data-bs-toggle', "dropdown");
});