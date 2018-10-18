
var balloons = []

var maxSize = 30
var minSize = 10

class Balloon {
    constructor(){
        this.positionY = Math.round(Math.random() * window.innerHeight)
        this.positionX = Math.round(Math.random() * window.innerWidth)
        this.size = Math.round(Math.random() * maxSize + minSize)
        balloons.push(this)
        this.initElement()

    }

    clickHandler(){

        if (this.size >= (maxSize+minSize)) {
            this.element.html("💢")
        } else {
            this.size += 5;
            this.element.css({fontSize: this.size + "px"});
        }
    }

    initElement() {
        var element = $("<h1>🎈</h1>")
        
        //element.innerHTML = "🎈"
        element.css(
            {
                "position":"absolute",
                "font-size":this.size+"px",
                top:this.positionY+"px",
                left:this.positionX+"px"
            }
        )
    
        //element.style.top = this.positionY + "px"
        //element.style.left = this.positionX + "px"
        element.on("click", () => this.clickHandler())
    
        $("#balloon").append(element)
        this.element = element
    }        

}
//var ppd = document.getElementById("popped")


function initGame() {
    window.setInterval(createBallon,3000)
}






function createBallon() {


    var balloon = new Balloon()
    console.log(balloons)


}

//window.addEventListener("load",initGame)

$(initGame)
