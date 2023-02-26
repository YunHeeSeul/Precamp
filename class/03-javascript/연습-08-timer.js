let time = 10
// undefined

//10초부터 0까지 카운트 되도록
setInterval(function() {
    if (time >= 0) {
        console.log(time)
        time = time - 1
    }
}, 1000)



//실습
let second = 180
undefined
setInterval(function() {
    let min = Math.floor(second / 60)
    let sec = String(second % 60).padStart(2, "0")
    if (second >= 0) {
        console.log(min + ":" + sec) 
        second = second - 1
    }
}, 1000)
2