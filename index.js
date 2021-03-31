// Cau 1:
// function findMax(arr){
//     let maxNumb = arr[0];
//     for(let i =0; i<arr.length;i++){
//         if(arr[i]>maxNumb){
//             maxNumb= arr[i];
//         }
//     }
//     return maxNumb;
// }

//Cau 2:
// function tryRemoveFromArray(arr,x){
//     let newArr = []
//     for(let i =0; i<arr.length;i++){
//         if(arr[i]!=x){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

//Cau 3:
function isFibonacci(numb){
    let fibonArr = [0,1,1];
    for(let i =0;i<10000;i++){
        let temp = fibonArr[fibonArr.length-1] +fibonArr[fibonArr.length-2];
        fibonArr.push(temp);
    }
    let rightNumberCheck = false;
    for(let j =0; j<fibonArr.length;j++){
        if(numb == fibonArr[j]){
            rightNumberCheck = true;
        }
    }
    return rightNumberCheck;
}
let a = isFibonacci(20);
console.log(a);


//Cau 4:
// class Circle{
//     x;
//     y;
//     radius;
//     color;
//     constructor(x,y,radius,color) {
//         this.x=x;
//         this.y= y;
//         this.radius = radius;
//         this.color = color;
//     }
//     render(){
//         let canvas = document.getElementById("myCanvas");
//         let ctx = canvas.getContext("2d");
//         ctx.beginPath();
//         ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//     }
// }
// let circle = new Circle (10,10,100,"#000000");
// circle.render();

