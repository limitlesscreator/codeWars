// Our football team finished the championship. The result of each match look like
// "x:y". Results of all matches are recorded in the collection.
//For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in
// the championship. Rules for counting points for each match:
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:
//
//     there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

let games = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
let x = 0
let y = 0
let points = 0
let arr1 = games.join(' ')
let replace = arr1.replace(/[\s.,:%]/g, ' ')

stringToNumber = replace.split( " ")
stringToNumbermap = stringToNumber.map(n => n * 1)

for (i = 0; i<stringToNumbermap.length/2;i++){
    x = stringToNumbermap[0+i*2]
    y = stringToNumbermap[1+i*2]
    console.log(y)
    console.log(stringToNumbermap)

    if (x>y){
        points = points + 3
    }
    if (x<y){
        points = points
    }
    if (x==y){
        points = points + 1
    }
    console.log(points)
}
