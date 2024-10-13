
var changingSpeech = [

    {
        quote : "“Be yourself; everyone else is already taken.”",
        author : " Oscar Wilde"
    },

    {
        quote : "“A room without books is like a body without a soul.”",
        author : " Marcus Tullius Ciceroe"
    },

    {
        quote : "“You only live once, but if you do it right, once is enough.”",
        author : " Mae West"
    },

    {
        quote : "“Be the change that you wish to see in the world.”",
        author : " Mahatma Gandhi"
    },

]


function getSpeech(){
    var i = Math.floor(Math.random() *changingSpeech.length) ;
    document.getElementById("mainSpeech").innerHTML = `${changingSpeech[i].quote}`; 
    document.getElementById("authorSpeech").innerHTML = `--${changingSpeech[i].author}`; 
}