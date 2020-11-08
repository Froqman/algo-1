function find(arra, n){
    let i = arra.length/2
    if(i % 1){
        i = i+0.5}
    let low = 0
    let high = arra.length
    while(1==1){
    if(arra[i-1]==n){
        return i-1
    }
    else if(arra[i-1]<n){
        low = i;
        i = (high+i)/2
        if(i % 1){
        i = i+0.5}
    }
    else if (arra[i-1]>n){
        high = i;

        i = high/2
        if(i % 1){
        i = i+0.5}
    }}
   
}