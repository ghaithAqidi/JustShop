/**
 * Created by GhaithAli on 28/09/16.
 */
$(document).ready(function(){
    var searchInputBox = $(".searchInput"),
        searchButton = $(".searchButton"),
        postCodeInfo = $(".postCodeInfo");

    searchInputBox.on( "click" , function(){
            searchInputBox.val("");
    });

    searchButton.on("click" , function (){
        var postNumber = searchInputBox.val(),
            regExp4digits = /^\d{4}$/;
        if (regExp4digits.test(postNumber)){
            postCodeInfo.text("");
            //todo: code to go to the next page (the list page).
        } else {
            postCodeInfo.text("Insert a valid post number");
        }
    });
});
