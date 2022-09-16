let courseName:string = `Backend developpement`;

console.log(courseName);

let printNumbes = (start:number, end:number) => {

    if(start > end){
        console.log(`start value ${start} must be small than end value ${end}`);
    } else {
        let temp:string = ''
        for (let i:number = start; i <= end; i++) {
            temp += ` ${i} `
        }
        console.log(temp);
    }
}

printNumbes(5, 15)