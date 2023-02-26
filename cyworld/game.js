const censor = () => {
    let input = document.getElementById("input").value //input태그는 태그 사이에 아무런 값이 없기 때문에 입력창 안에 있는 값을 가져와야 해서 value를 사용함
    let word = document.getElementById("word").innerText

    let lastword = word[word.length-1] //word의 마지막 글자 가져오기
    let firstword = input[0] //input의 첫번째 글자 가져오기

    //정답일때
    if (lastword == firstword) {
        document.getElementById("word").innerText = input
        document.getElementById("input").value = ""
        document.getElementById("result").innerText = "정답입니다!"
    }
    else { //오답일 때
        document.getElementById("input").value = ""
        document.getElementById("result").innerText = "땡!"
    }
}