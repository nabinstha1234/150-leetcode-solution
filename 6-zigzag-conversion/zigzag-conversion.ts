function convert(s: string, numRows: number): string {
    if(numRows===1 || numRows>= s.length){
        return s;
    }
    let idx:number = 0;
    let d:number = 1;
    let result = Array.from({ length: numRows }, () => [])
     for(const char of s){
        result[idx].push(char);
        if(idx ===0){
            d=1;
        }else if (idx === numRows -1){
            d=-1;
        }
        idx += d;
     }
    return result.flatMap(x => x).join("");
};