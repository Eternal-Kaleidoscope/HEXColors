
// function reset(){
//     event.currentTarget.style.backgroundColor="#ddd";
// }
var generate = document.getElementById("gennerate");
var mainFrame = document.querySelector("#mainFrame");
var input = document.querySelector("#input");
// 复制到剪贴板。
function copyToClipBoard(e){
    const span = document.createElement("span");
    span.className="notice";
    span.innerHTML="this color is "
    span.classList.add("notice-show");
    const input = document.createElement("input");
    input.value= e.innerHTML;
    span.appendChild(input)
    document.body.appendChild(span);
    input.select();
    document.execCommand("copy");
    input.blur();
    setTimeout(() =>{
        span.classList.remove("notice-show");
        document.body.removeChild(span);
    },2000);    
}

function handleClick(){
    document.body.style.backgroundColor=event.currentTarget.children[0].style.backgroundColor;
    copyToClipBoard(event.currentTarget.children[1]);
}

function generateColor(){
    if(mainFrame.children.length>0){
        remove();
    }
    let numsInd = 0;
    let nums = 9;
    for(;numsInd<nums;numsInd++){
        //颜色生成器
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        let div = document.createElement("div");
        div.className="colorBox";
        mainFrame.appendChild(div);
        let divChild = document.createElement("div");
        divChild.className="colorTheme";
        divChild.style.backgroundColor="#"+randomColor;
        div.appendChild(divChild);
        let p = document.createElement("p");
        p.className="codes";
        p.innerHTML="#"+randomColor;
        div.appendChild(p);
        div.addEventListener('click',handleClick);
    }
}

generateColor();
function remove(){
    while(mainFrame.firstChild){
        mainFrame.removeChild(mainFrame.firstChild);
    }
}

let colors={
    blue:"0000ff",
    green:"00ff00",
    red:"ff0000"
}

let {
    blue:blues,
    green:greens,
    red:reds
}=colors;

console.log(blues);
console.log(greens);
console.log(reds);
input.onkeyup = function (e) {
    // 兼容FF和IE和Opera
    var event = e || window.event;
    var key = event.which || event.keyCode || event.charCode;
    if (key == 13) {
        console.log(typeof input.value)
        /*Do something. 调用一些方法*/
        if(input.value.includes("blue")){
            window.open("https://www.colorhexa.com/" + blues);
        }else if(input.value.includes("red")){
            window.open("https://www.colorhexa.com/"+ reds);
        }else if(input.value.includes("green")){
            window.open("https://www.colorhexa.com/"+greens);
        }
    }
};
