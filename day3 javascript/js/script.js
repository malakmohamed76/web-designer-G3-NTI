
 let img=document.querySelector('img')
 

let changeImg=()=>{
   
    console.log(img.src)
    if(img.src.includes("images/3.jpg")){
         img.src="images/2.jpg"
    }
    else{
        img.src="images/3.jpg"
    }
}