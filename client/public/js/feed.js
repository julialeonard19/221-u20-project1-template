function feedItem(title, body, imageUrl, linkUrl){
    this.title = title;
    this.body = body;
    this.imageUrl = imageUrl;
    this.linkUrl = linkUrl;

}

const story1 = new feedItem("The Sprinkle Tragedy","The Cupcake Goldfish named Sprinkle was taking a walk on the counters. Her mom always warned her the dangers of leaving the house aka the bag. Sprinkles curiosity got the best of her and she made that journey. The second she left she heard a woof and saw this huge creature, before she even got the chance to scream she got eaten.","https://bit.ly/3ao33Aq", "https://www.youtube.com/watch?v=va821n5B6SU");
const story2 = new feedItem("Sparkle!","A simple gramcracker goldfish one day was feeling down on themselves. They wanted to do something to make them feel different, and special. Like maybe a makeover, she decided she wanted a change. She dipped herself in a special coating with sugar and sweets and became the ulimate cupcake goldfish. She became famous and a millionare snack.","https://bit.ly/3OStZHw","https://www.youtube.com/watch?v=va821n5B6SU");
const story3 = new feedItem("The Finn Case","A cupcake goldfish named Susan had a boring husband named Finn. He was a orginal, boring, cheddar goldfish. He was horrible. Basically to sum it up dont buy orginal cheddar goldfish. Also dont go on Megans website for the og goldfish. Stay here and buy the better kind!!","https://bit.ly/3InNqFz","https://www.youtube.com/watch?v=va821n5B6SU");

const currentStories = [story1, story2, story3];

function displayItem(){
    for(var i= 0; i <currentStories.length; i++){
        let item = currentStories[i];
        document.getElementById("newsfeed").innerHTML += "<img class='feedImage' src='" + item.imageUrl + "'>\n<p><a href = '" + item.linkUrl + "'>" + item.title + "</a><br>" + item.body + "<br><hr></p><br>";
    }
}

window.addEventListener('load', displayItem);

document.getElementById("portal_button").addEventListener("click", () => goToLocation("https://www.pepperidgefarm.com/product-finder/?category=2330"));