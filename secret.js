document.addEventListener('DOMContentLoaded', function () {
    var noButton = document.getElementById('no-bttn');
    noButton.addEventListener('click', function() {
        noButton.remove();
        document.getElementById("yes-bttn").remove();
        document.getElementsByClassName("image")[0].src = "https://www.meme-arsenal.com/memes/c4a0ef85aee5b66d291fd2b20af38edf.jpg";
        document.querySelectorAll('h1').forEach(function(h1) {
            h1.textContent = 'gg';});
        var h2Elements = document.querySelectorAll('h2');
        h2Elements.forEach(function(elem) {
            elem.remove();});
    });
})
document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.getElementById('yes-bttn');
    yesButton.addEventListener('click', function() {
        yesButton.remove();
        document.getElementById("no-bttn").remove();
        document.getElementsByClassName("image")[0].src = "https://media1.tenor.com/m/PgdHjJVt4CIAAAAC/iloveyou-so-much-i-love-you-cat.gif";
        document.querySelectorAll('h1').forEach(function(h1) {
        h1.textContent = "yayyayaya see you 14th mi pequena";})
        var h2Elements = document.querySelectorAll('h2');
        h2Elements.forEach(function(elem) {
            elem.remove();});

    });
})

