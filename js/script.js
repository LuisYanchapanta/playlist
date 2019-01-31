/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Is There More", "Emotionless", "Mob Ties", "Blue Tint", "Dont Matter to Me", "Final Fantasy"];
var images_links = ["http://thedjbenz.com/wp-content/uploads/2018/06/Drake%C2%B4s-Scorpion-album-is-released.jpg", "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg", "http://thedjbenz.com/wp-content/uploads/2018/06/Drake%C2%B4s-Scorpion-album-is-released.jpg", "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg", "http://thedjbenz.com/wp-content/uploads/2018/06/Drake%C2%B4s-Scorpion-album-is-released.jpg", "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg"];
var atrists = ["Drake", "Drake", "Drake", "Drake", "Drake", "Drake"];
var songLengths = [];
var links = [];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above

// images_links.forEach(function(image){
//     $("#images").append("<img src=" + image + ">");
// });

var lastColumn;
var i;
for (i = 0; i < songs.length; i++) {
    //console.log(i);
    //console.log(lastColumn);
    if (i == 0) {
        lastColumn = "#songs1";
        // put song name in song1
    }
    else if (lastColumn == "#songs1") {
        lastColumn = "#songs2";
        // put song name in song2
    }
    else if (lastColumn == "#songs2") {
        lastColumn = "#songs3";
        // put song name in song3
    }
    else if (lastColumn == "#songs3") {
        lastColumn = "#songs1";
        // put song name in song1
    }

    //console.log(lastColumn + " " + songs[i]);
    //$(lastColumn).append(songs[i]);
    $(lastColumn).append("<ul>" + songs[i] + "</ul>");
    $(lastColumn).append("<img class='coverSong' src=" + images_links[i] + ">");



}


// BELOW Use forEach Loop to display the data from each of your array's in the correct div



function emptySongInfo() {
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo() {
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
