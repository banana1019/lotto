console.log("-----------lotto-------------")
console.log("-----------lotto-------------")
console.log("-----------lotto-------------")

const btn = document.getElementById("btn")

console.log(btn)

btn.addEventListener("click", (event) => {
    console.log(event)

    const target = document.getElementById("resultDiv")

    const balls = getLotto()

    console.log('balls' + balls)

    // clear all <h3> tags
    target.innerHTML = ''

    for (const num of balls) {
        const tag = document.createElement("h3")
        const textNode = document.createTextNode(num)
        tag.appendChild(textNode)
        target.appendChild(tag)
    }

}, false)

// 1. 1 - 45까지의 숫자를 배열에 집어넣는 함수
function nums() {
    const lottoArr = []
    for (let i = 1; i <= 45; i++) {
        lottoArr.push(i)
    }
    return lottoArr
}

// 2. 숫자 6개 뽑기
function randomNum(lottoArr) {
    const lottoResult = []

    for (let i = 0; i < 6; i++) {

        const index = parseInt(Math.random() * lottoArr.length)

        lottoResult.push(lottoArr[index]) // lottoResult 배열에 요소 추가하기
        lottoArr.splice(index, 1) // 배열에서 요소 1개 제거
    }

    return lottoResult
}

function getLotto() {
    const result = randomNum(nums())
    return result
}

// console.log(getLotto())