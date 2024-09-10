function on(){
    document.getElementById("on").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("oncat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("switch").textContent="Switch ON"
    document.getElementById("GREEN").style.backgroundColor = "green"
    document.getElementById("RED").style.backgroundColor = "gray"

}
function off(){
    document.getElementById("on").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("oncat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("switch").textContent="Switch OFF"

    document.getElementById("RED").style.backgroundColor = "red";
    document.getElementById("GREEN").style.backgroundColor = "gray"


}