function solution(N, A) {

    let counters = []
    let maxVal = 0
    let k= 0
    
    for (var i = 0; i < N; i++) counters[i] = 0;
    
    for (var j = 0; j < A.length; j++) {
        if (A[j] > N) {
            k = maxVal
        } else {
            let Maxcount = Math.max(k, counters[A[j] - 1])
            counters[A[j] - 1] = Maxcount + 1
            maxVal = Math.max(counters[A[j] - 1], maxVal)
        }
    }

    for (var l = 0; l < N; l++) {
        counters[l] = Math.max(counters[l], lastMax)
    }
    
    return counters;
}