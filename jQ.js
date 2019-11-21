/* Current Match */
function currentMatch()
{
    var xmlhttp=new XMLHttpRequest();
     xmlhttp.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200)
       {
         document.getElementById("container").innerHTML=this.responseText;
        var obj=JSON.parse(this.responseText);
         var i = 0;
        var date="<p>"+"<b>Date Of Match: </b>"+obj.matches[i].date+"</p>"
        var id="<p>"+"<b>Unique_Id: </b>"+obj.matches[i].unique_id +"</p>"
        var type="<p>"+"<b>Type: </b>"+obj.matches[i].type +"</p>"
        var team1="<p>"+"<b>Team-1: </b>"+obj.matches[i]['team-1'] +"</p>"
        var team2="<p>"+"<b>Team-2: </b>"+obj.matches[i]['team-2'] +"</p>"
        var match="<p>"+"<b>Match Started: </b>"+obj.matches[i]['matchStarted'] +"</p>"
        document.getElementById("container").innerHTML=id+date+team1+team2+type+match;

       
       }
      
     };
     xmlhttp.open("GET", "https://cricapi.com/api/matches?apikey=dkJZvk4OOfeX5rg1P8hPJtIs6dg2", true);
     xmlhttp.send();
 }
/* Current Match End */

/* Old Match */
function oldMatch()
{
    var xmlhttp=new XMLHttpRequest();
     xmlhttp.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200)
       {
         document.getElementById("container").innerHTML=this.responseText;
        var obj=JSON.parse(this.responseText);
         var i = 3;
       
        var id="<p>"+"<b>Unique_Id: </b>"+obj.data[i].unique_id +"</p>"
        var des="<p>"+"<b>Type: </b>"+obj.data[i].description+"</p>"
        var title="<p>"+"<b>Title: </b>"+obj.data[i].title+"</p>"
       
        document.getElementById("container").innerHTML=id+des+title;
       
       }
      
     };
     xmlhttp.open("GET", "https://cricapi.com/api/cricket?apikey=dkJZvk4OOfeX5rg1P8hPJtIs6dg2", true);
     xmlhttp.send();
 }
/* Old Match End */

/* New Match */
function matchCal()
{
    var xmlhttp=new XMLHttpRequest();
     xmlhttp.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200)
       {
         document.getElementById("container").innerHTML=this.responseText;
        var obj=JSON.parse(this.responseText);
         var i = 3;
       
        var id="<p>"+"<b>Unique_Id: </b>"+obj.data[i].unique_id +"</p>"
        var name="<p>"+"<b>Type: </b>"+obj.data[i].name+"</p>"
        var date="<p>"+"<b>Date: </b>"+obj.data[i].date+"</p>"
        
        document.getElementById("container").innerHTML=id+name+date;
       
       }
      
     };
     xmlhttp.open("GET", "https://cricapi.com/api/matchCalendar?apikey=dkJZvk4OOfeX5rg1P8hPJtIs6dg2", true);
     xmlhttp.send();
 }
/* New Match End */



/* Player with player id */
function enterTheCode()
{
  var str=document.getElementById("search").value;
 
  if(str.length==0)
  {
     document.getElementById("container").innerHTML="";
     return;
  } 
   else
 {
    var xmlhttp=new XMLHttpRequest();
     xmlhttp.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200)
       {
         document.getElementById("container").innerHTML=this.responseText;
        var obj=JSON.parse(this.responseText);
      
        var pid="<p>"+"<b>pid: </b>"+obj.pid+"</p>"
        var name="<p>"+"<b>Name: </b>"+obj.name+"</p>"
        var born="<p>"+"<b>Born: </b>"+obj.born+"</p>"
        var run="<p>"+"<b>Runs Of T20Is: </b>"+obj.data.bowling.T20Is.Runs+"</p>"

        var Ball="<p>"+"<b>Balls Of T20Is: </b>"+obj.data.bowling.T20Is.Balls+"</p>"
        var country="<p>"+"<b>Country: </b>"+obj.country+"</p>"
        var batting="<p>"+"<b>Batting_Style: </b>"+obj.battingStyle+"</p>"
        var order="<p>"+"<b>Playing_Role: </b>"+obj.playingRole+"</p>"
        var bowl="<p>"+"<b>Bowling_Style: </b>"+obj.bowlingStyle+"</p>"
        var team="<p>"+"<b>Major_teams: </b>"+obj.majorTeams+"</p>"
         document.getElementById("container").innerHTML=pid+name+born+country+batting+order+bowl+team+run+Ball;

      }
     };
     xmlhttp.open("GET", "https://cricapi.com/api/playerStats?apikey=dkJZvk4OOfeX5rg1P8hPJtIs6dg2&pid="+str, true);
     xmlhttp.send();
     
   }
 }
/* Player with player id Ends */






/* check score */
function enterTheMatchCode()
{
    var xmlhttp=new XMLHttpRequest();
     xmlhttp.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200)
       {
         document.getElementById("container").innerHTML=this.responseText;
        var obj=JSON.parse(this.responseText);
        var status="<p>"+"<b>Status: </b>"+obj.stat+"</p>"
        var score="<p>"+"<b>Score: </b>"+obj.score+"</p>"
        var description="<p>"+"<b>Description: </b>"+obj.description+"</p>"
        var match="<p>"+"<b>Match Started: </b>"+obj.matchStarted+"</p>"

        var team1="<p>"+"<b>Team-1: </b>"+obj['team-1'] +"</p>"
        var team2="<p>"+"<b>Team-2: </b>"+obj['team-2']+"</p>"
        
        document.getElementById("container").innerHTML=status+score+description+match+team1+team2;
       
       }
      
     };
     xmlhttp.open("GET", "https://cricapi.com/api/cricketScore?apikey=dkJZvk4OOfeX5rg1P8hPJtIs6dg2&unique_id=1202399", true);
     xmlhttp.send();
 }

/* check Score end */

 
 
 