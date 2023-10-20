var arr = [
    { dp: "https://tse1.explicit.bing.net/th?id=OIP.C0Aa_7I2fiIf85CpXLmjYAHaEK&pid=Api&P=0&h=180", story: "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { dp: "https://tse3.mm.bing.net/th?id=OIP.wFjANPFLnadTVct55clxhAHaFS&pid=Api&P=0&h=180", story: "https://www.mordeo.org/files/uploads/2018/09/Cute-Dream-Asian-Girl-4K-Ultra-HD-Mobile-Wallpaper.jpg" },
    { dp: "https://www.pixelstalk.net/wp-content/uploads/2016/10/Beautiful-Girl-Wallpaper-Widescreen.jpg", story: "https://wallpapercave.com/wp/wp6893154.jpg" },
    { dp: "https://wallpapercave.com/wp/wp5734608.jpg", story: "https://wallpapercave.com/wp/wp8688941.jpg" },
    { dp: "https://wallpapercave.com/wp/wp7922336.jpg", story: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { dp: "https://i.postimg.cc/0540FhjQ/black-hair-hot-model-w7.jpg", story: "https://i.postimg.cc/9MP6MKgW/hot-boxing-girls-ad-2160x3840.jpg" }
]

var stories = document.querySelector("#stories")
var cutter = ""
arr.forEach(function (elem, id) {
    cutter += `<div class="story">
    <img id="${id}" src="${elem.dp}">
</div>`
})

document.querySelector("#stories").innerHTML = cutter

stories.addEventListener("click", function (gets) {
    document.querySelector("#fullScreen").style.display = "block"
    document.querySelector(".container").style.display = "none"
    document.querySelector("#fullScreen").style.backgroundImage = `url(${arr[gets.target.id].story})`

    setTimeout(function () {
        document.querySelector("#fullScreen").style.display = "none"
    }, 4000);
    setTimeout(function () {
        document.querySelector(".container").style.display = "block"
    }, 4000);
});

var con = document.querySelector(".container")

var love = document.querySelector("i")

con.addEventListener("dblclick", function (get) {
    love.style.transform = 'translate(-50%,-50%) scale(1)';
    love.style.opacity = 0.8;

    setTimeout(function () {
        love.style.opacity = 0;
    }, 1000);

    setTimeout(function () {
        love.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 2000);
})

var addfrnd = document.querySelector("#follow")

addfrnd.addEventListener("click",function(){
    addfrnd.innerHTML = "Following"
    addfrnd.style.color = "black"
    addfrnd.style.backgroundColor = "white"
    addfrnd.style.fontSize = "20px"
})