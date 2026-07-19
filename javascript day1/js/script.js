var degree=prompt("enter your degree range (0:100) : ")
if(degree !==null && degree !==""){

    if(degree >=90) alert("Excellent: A")
    if(degree >80 && degree<90) alert("Very Good: B")
    if(degree >70 && degree<80) alert("Good: C")
    if(degree <70) alert("Failed : F")
  
}else{
    alert("invalid degree.")
}