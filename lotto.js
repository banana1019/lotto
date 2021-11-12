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

        lottoArr.splice(index, 1) // 배열에서 요소 1개 제거
        lottoResult.push(index) // lottoResult 배열에 요소 추가하기
    }

    return lottoResult
}

function getLotto() {
    const result = randomNum(nums())
    return result
}

console.log(getLotto())