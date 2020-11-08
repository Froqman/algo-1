function find(arra, n){
    let i = 0
    let result = []
    while(arra.length > i){
        let current = arra[i]
        if(current==n){
            result.push(i)
        }
        i++
    }
    return result
}
