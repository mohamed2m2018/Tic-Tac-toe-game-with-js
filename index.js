var textin=["empty","empty","empty","empty","empty","empty","empty","empty","empty"];
var square=[];
var myi;
var previous="nothing";
var prev_caller_id; //to prevent choosing x for example and then changing it to o in the same cell 
var player_one={

    name:"player one",
    score: 0,
    }; 
var player_two={

        name:"player two",
        score: 0,
        }; 

for (var i=0 ; i<9;i++)
{
square[i]=document.querySelectorAll(".square")[i];
square[i].myi=i;//since i has no meaning inside the addevent listener because the event continues after the loop is ended 
//myi stores the number of the square after the end of the for loop  
square[i].addEventListener("click",function(){
textin[this.myi]=document.querySelectorAll(".textin")[this.myi];
if(previous==="nothing") //initial condition
{
textin[this.myi].innerHTML="X";
previous="X";
prev_caller_id=this.myi;
}
else if(previous==="X"&&prev_caller_id!==this.myi) //if the one before this is x the next will be o then change the previous to be o
{
textin[this.myi].innerHTML="O";
previous="O";
prev_caller_id=this.myi;
}
else if (previous==="O"&&prev_caller_id!==this.myi) //vice versa the above condition
 {
textin[this.myi].innerHTML="X";
previous="X";
prev_caller_id=this.myi;


}

compare();

textin[this.myi].style.position="relative";
textin[this.myi].style.top="35px";
textin[this.myi].style.fontSize="5em";
this.style.background="grey";
this.style.textAlign="center";
this.style.lineHeight="30px";


});
}

function win(){
textin=["empty","empty","empty","empty","empty","empty","empty","empty","empty"];



}

function compare (){

for (var i=0;i<9;i=i+3)
{
    if(textin[i].innerHTML!==undefined)
   if(textin[i].innerHTML===textin[i+1].innerHTML&&textin[i+1].innerHTML===textin[i+2].innerHTML)
{
win();
}
}
for (var i=0;i<3;i++)
{
    if(textin[i].innerHTML!==undefined)
    if(textin[i].innerHTML===textin[i+3].innerHTML&&textin[i+3].innerHTML===textin[i+6].innerHTML)
    {
       win();
    }

}
if(textin[0].innerHTML!==undefined)
if(textin[0].innerHTML===textin[4].innerHTML&&textin[4].innerHTML===textin[8].innerHTML)
    {
        win();
    }
if(textin[2].innerHTML!==undefined) 
if(textin[2].innerHTML===textin[4].innerHTML&&textin[4].innerHTML===textin[6].innerHTML)
    {
      win();
    }    

}
