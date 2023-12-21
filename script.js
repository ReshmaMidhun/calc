function find(val){
    var a=document.getElementById("text1").value;
    document.getElementById("text1").value+=val;
}
function equalfind(){
    try{
        
    var t=document.getElementById("text1").value;
    var result=eval(t);
    document.getElementById("text1").value=result;
    }
    catch(err)
    {
        document.getElementById("text1").value=document.getElementById("text1").value
    }

}
function clr(){
    document.getElementById("text1").value="";
}
function del(){
 
    var val=document.getElementById("text1").value;
  /*  console.log(val);*/
    var length=val.length;
    var len=length-1;
   /* console.log(len);*/
/*    document.getElementById("text1").value=document.getElementById("text1").value.substring(0,len);*/
document.getElementById("text1").value=document.getElementById("text1").value.slice(0,-1);
}
