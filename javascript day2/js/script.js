let courses=["front-end", "back-end", "js", "typescript",]
let namecourse=prompt("enter your course : ")
let index = courses.findIndex((value) => value === namecourse);
if(index !==-1){
    console.log(" index = ", index)

}else{
    courses.push(namecourse);
    console.log(" added courses .")

}
console.log(courses)
