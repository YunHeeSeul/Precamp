//소수점이하는 버리기 위해 floor 사용.

Math.floor(Math.random()*1000000)
// 902820

//숫자를 문자열 형태로 변형시켜줌
String(Math.floor(Math.random()*1000000))
// '734105'

//.padStart(a, b) => a자리만큼 못채우면 앞에서부터 b로 채워라
String(Math.floor(Math.random()*1000000)).padStart(6, "0")
// '155692'
String(Math.floor(Math.random()*1000000)).padStart(6, "0")
// '014777'
let result = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
// undefined
result
// '436998'
result
// '436998'