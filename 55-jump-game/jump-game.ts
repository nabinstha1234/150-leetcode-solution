function canJump(nums: number[]): boolean {
    let reached = 0;
    for (const step of nums) {
        if(reached<0){
            return false;
        } else if(step>reached){
            reached = step;
        }
        reached -=1
     } 
    return true;
    
};