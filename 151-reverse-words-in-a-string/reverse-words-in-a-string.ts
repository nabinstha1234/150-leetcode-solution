function reverseWords(s: string): string {
    let arr = s.trim().split(/\s+/);
    let result=arr.at(-1);
    for(let i=arr.length -2;i>=0;i--){
        result +=" "
        result +=arr[i];
    }
    return result;
};