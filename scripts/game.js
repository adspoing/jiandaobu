/**
 * Created by springwon on 2/5/16.
 */
var mychoice=0;//1:jiandao 2:shitou 3:bu
var compchoice=0;
var value=0;
var allnum=0;
    function start()
{


    var jiandao = document.getElementById("jiandao");
    var shitou=document.getElementById("shitou");
    var bu=document.getElementById("bu");
    jiandao.onclick=function() {
        allnum++;
        document.getElementById("my-result").src = "assets/jiandao.png";
        compare();
        mychoice=1;
        result(mychoice,compchoice);
    }
    shitou.onclick=function() {
        allnum++;
        document.getElementById("my-result").src = "assets/shitou.png";
        compare();
        mychoice=2;
        result(mychoice,compchoice);
    }
    bu.onclick=function() {
        allnum++;
        document.getElementById("my-result").src = "assets/bu.png";
        compare();
        mychoice=3;
        result(mychoice,compchoice);
    }

}

function compare()
{
    var computerResult = Math.random();
    if(computerResult<1/3)
    {
        document.getElementById("computer-result").src="assets/jiandao.png";
        compchoice=1;

    }
    else
    if(computerResult<2/3&&computerResult>=1/3)
    {
        document.getElementById("computer-result").src="assets/shitou.png";
        compchoice=2;

    }
    else
    {
        document.getElementById("computer-result").src="assets/bu.png";
        compchoice=3;

    }
}

function result(a,b)
{
    if(a-b==-1||a-b==2)
    {
        //alert("Lost");
        document.getElementById("result").innerHTML="Lost";
        document.getElementById("rate").innerHTML=(100*value/allnum).toFixed(2);

    }else
    if(a-b==1||a-b==-2)
    {
        //alert("Win");
        document.getElementById("result").innerHTML="Win";

        value++;
        document.getElementById("num").innerHTML=value;
        document.getElementById("rate").innerHTML=(100*value/allnum).toFixed(2);
    }
    else
    {
        //alert("Tie");
        document.getElementById("result").innerHTML="Tie";
        document.getElementById("rate").innerHTML=(100*value/allnum).toFixed(2);
    }
}

function clean()
{
    var value=0;
    var allnum=0;
    document.getElementById("num").innerHTML=value;
    document.getElementById("rate").innerHTML=0;
    document.getElementById("result").innerHTML="";

}