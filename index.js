// 1. Write a program that takes the position of a Knight as an input on an 8x8
// chessboard.
// 2. Given the position of the Knight, find all the possible places where the Knight can
// move. You can assume that there are no pieces of the opposite color and hence no
// blocks.
const Stack=require('./stack.js')
function place(x, y){
    this.x=x
    this.y=y
}
//getting arguments from command
let a=process.argv[2]
let b=process.argv[3]

var stack=new Stack()
var stack2=new Stack()
//var object=new place(a,b)

stack.push(new place(a,b))
stack2.push(new place(a,b))
let count = 0;
//creating a visited array
let visited=new Array(8)
for(let i=0;i<8;i++)
{
    visited[i]=new Array(8)
}
   for(let i=0 ;i<8;i++)
   {
    for(let j=0;j<8;j++)
    {
        visited[i][j]=0
    }
   }
   visited[a][b]=1
//start
while(!stack.isEmpty())
    {   
        var knightsplace=stack.pop()
        var p=parseInt(knightsplace.x)
        var q=parseInt(knightsplace.y)
        // All possible moves of a knight
        let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
        let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ]; 
       
        // Check if each possible move is valid or not and if is visited or not
        for (let i = 0; i < 8; i++) {
            
            // Position of knight after move
            let x = p + X[i];
            let y = q + Y[i];
            // count valid moves
            if (x >= 0 && y >= 0 && x < 8 && y < 8  && visited[x][y]==0)
               {
                count++;
                visited[x][y]=1
                stack.push(new place(x,y))
                stack2.push(new place(x,y))  
               } 
        }
    }
while(!stack2.isEmpty())
{
    console.log(stack2.pop())
}
console.log('End')
