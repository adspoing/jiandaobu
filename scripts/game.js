/**
 * Created by tongqi on 2/5/16.
 */
    function start()
{
    var jiandao = document.getElementById("jiandao");
    jiandao.onclick=function() {
        document.getElementById("my-result").src = "assets/jiandao.png";
        var computerResult = Math.random();
        if(computerResult<1/3)
        {
            document.getElementById("computer-result").src="assets/jiandao.png";
            alert("tie");
        }
        else
        if(computerResult<2/3&&computerResult>=1/3)
        {
            document.getElementById("computer-result").src="assets/shitou.png";
            alert("lost");
        }
        else
        {
            document.getElementById("computer-result").src="assets/bu.png";
            alert("win");
        }
    }

}
