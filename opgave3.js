while(arra.length > i){
    let value = arra[i]
    let n = i+1
        while(arra.length > n){
            if(value === arra[n]){
                return [i,n]
            }
    n++
}
i++
}