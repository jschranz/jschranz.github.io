/*code modified from function BirthdayCountdown() obtained from https://www.developphp.com/video/JavaScript/Date-Time-Countdown-Tutorial-Christmas-2012-Doomsday
function cdtd(){
//Here is the orignal code
function cdtd() {
	var xmas = new Date("December 25, 2012 00:01:00");
	var now = new Date();
	var timeDiff = xmas.getTime() - now.getTime();
	if (timeDiff <= 0) {
                clearTimeout(timer);
		document.write("Christmas is here!");
		// Run any code needed for countdown completion here
        }
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
        minutes %= 60;
        seconds %= 60;
	document.getElementById("daysBox").innerHTML = days;
	document.getElementById("hoursBox").innerHTML = hours;
	document.getElementById("minsBox").innerHTML = minutes;
	document.getElementById("secsBox").innerHTML = seconds;
	var timer = setTimeout('cdtd()',1000);
}*/
function BirthdayCountdown() {
	var futuredate = new Date("January 12, 2016 09:04:00");
	var now = new Date();
	var timeDiff = futuredate.getTime() - now.getTime();
	if (timeDiff <= 0) {
                clearTimeout(timer);
		document.write("My Birthday is here!");
        }
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
        minutes %= 60;
        seconds %= 60;
	document.getElementById("daysBox").innerHTML = days;
	document.getElementById("hoursBox").innerHTML = hours;
	document.getElementById("minsBox").innerHTML = minutes;
	document.getElementById("secsBox").innerHTML = seconds;
	var timer = setTimeout('BirthdayCountdown()',1000);
}
function examcountdown() {
	var futuredate = new Date("December 19, 2015 11:00:00");
	var now = new Date();
	var timeDiff = futuredate.getTime() - now.getTime();
	if (timeDiff <= 0) {
								clearTimeout(timer);
		document.write("My Birthday is here!");
				}
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
				minutes %= 60;
				seconds %= 60;
	document.getElementById("examdaysBox").innerHTML = days;
	document.getElementById("examhoursBox").innerHTML = hours;
	document.getElementById("examminsBox").innerHTML = minutes;
	document.getElementById("examsecsBox").innerHTML = seconds;
	var timer = setTimeout('examcountdown()',1000);
}

function ShowTeam(){
	var team = document.getElementById("TeamName").value;
	var Anaheim = "Anaheim Ducks were created after the Disney movie series the Mighty Ducks. They currently sit 7th in the Pacific Division";
	var Arizona = "The team was the original Winnipeg Jets and got relocated to Phoenix where they were called the Phoenix Coyotes and recently changed to Arizona Coyotes. They currently sit tied for 2nd in the Pacific Division";
	var Boston = "Boston is one of the original 6 teams in the NHL and was where the great Bobby Orr played in his day. They currently sit 3rd in the Atlantic";
	var Buffalo = "The team Tim Horton was traded to and was travelling to when he died in a car crash. They currently sit 7th in Atlantic Division";
	var Calgary = "Calgary had a surprisingly good run last season and made it into the playoffs which nobody believed would happen for a rebuild. They currently sit 5th in the Pacific Division";
	var Carolina = "Carolina were originally the Hartford Whalers before being relocated to Carolina. They currently sit 7th in the Metropolitan Division";
	var Chicago = "Chicago is one of the original 6 teams and are a modern day dynasty with how many Stanly Cups they have won. They currently sit 4th in the Central Division";
	var Colorado = "Colorado was originally the Quebec Nordiques and had multitudes of good players such as Joe Sakic and Mats Sundin. They currently sit 7th in the Central Division";
	var Columbus = "Columbus is the newest team in the league and have struggled most years to make the playoffs. They currently sit 8th in the Metropolitan Division";
	var Dallas = "Dallas won the cup when they had good players such as Joe Nieuwendyk and Ed Belfour but are resurging with Jamie Benn and Tyler Seguin. They currently sit 1st in the Central Division";
	var Detroit = "Detroit is another of the original 6 teams and has been one of the most consistent teams to make the playoffs. They currently sit 2nd in the Atlantic Division";
	var Edmonton = "Edmonton has struggled as of late but they were a dynasty in the 80s with Wayne Gretzky on their team. They currently sit 6th in the Pacific Division";
	var Florida = "Florida currently has the oldest active players in the league in Jarmoir Jagr who is having a successful year. They currently sit 5th in the Atlantic Division";
	var LosAngeles = "LA has had success in the last couple years of winning the Stanley cup after success in the days of acquiring Wayne Gretzky. They currently sit 1st in the Pacific Division";
	var Minnesota = "Minnesota has always been a strong team but had struggles with goalies in last couple years but can always make the playoffs. They currently sit 3rd in the Central Division";
	var Montreal = "Montreal is an original 6 team as well and always has been a bitter rival of the Toronto Maple Leafs. They currently sit 1st in the Atlantic Division";
	var Nashville = "Nashville has a surplus of talent in defensemen and struggle with offensive players. They currently sit 5th in the Central Division";
	var NewJersey = "New Jersey initially was a team that was located in Colorado and had one of the great goaltenders Martin Broedur. They currently sit 4th in the Metropolitan Division";
	var NewIslanders = "The Islanders are a big rival to the Rangers because of the proximity which increased with them now in Brooklyn. They currently sit 2nd in the Metropolitan Division";
	var NewRangers = "New York is the 5th Original 6 teams and had success in the early 90s with Mark Messier but are strong contenders currently for the Cup. They currently sit 3rd in the Metropolitan Division";
	var Ottawa = "Ottawa Senators are the other Ontario team that makes them fierce rivals of the Toronto Maple Leafs because of how close the teams are. They currently sit 4th in the Central Division";
	var Philadelphia = "The Flyers are also known as the broad street bullies because of the way they used to play hockey. They currently sit 6th in Metropolitan Division";
	var Pittsburgh = "They have Sidney Crosby and Evgani Malkin top players but are struggling this year and just fired their head coach. They currently sit 5th in the Metropolitan Division";
	var SanJose = "San Jose always plays well during the regular season but always bows out in the first round of the playoffs. They currently sit 4th in the Pacific Division";
	var StLouis =  "St. Louis is becoming a better team but struggles against the other central teams come playoff time. They currently sit 2nd in the Central Division";
	var Tampa = "Tampa Bay made it to the finals last year the first time since they last one the cup. They currently sit 6th in the Atlantic Division";
	var Toronto = "The Leafs are the 6th Original 6 team and have the longest cup less drought since 1967. They currently sit 8th in the Atlantic Division";
	var Vancouver = "Vancouver has a strong team and can make it to the cup but just can't put the last piece together to return and win the cup. They currently sit 3rd in the Pacific Division";
	var Washington = "My cousin is the Video Coach for the team and has been emergency goalie backup twice. They currently sit 1st in the Metropolitan Division";
	var Winnipeg = "The Atlanta Thrashers were relocated here after failing in Atlanta and Winnipeg was deemed the most viable location. They currently sit 6th in the Central Division";

var teamfact = team;

	if (team =="Anaheim Ducks"){
		document.getElementById("logo").src = "AnaheimImage.png";
		teamfact = Anaheim;
		document.getElementById('teaminfo').innerHTML = teamfact;
	}
else if(team =="Arizona Coyotes"){
	document.getElementById("logo").src = "ArizonaImage.jpg";
	teamfact = Arizona;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Phoenix Coyotes"){
	document.getElementById("logo").src = "ArizonaImage.jpg";
	teamfact = Arizona;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Boston Bruins"){
	document.getElementById("logo").src = "BostonLogo.jpg";
	teamfact = Boston;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Buffalo Sabres"){
	document.getElementById("logo").src = "SabresLogo.jpg";
	teamfact = Buffalo;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Calgary Flames"){
	document.getElementById("logo").src = "CalgaryImage.png";
	teamfact = Calgary;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Carolina Hurricanes"){
	document.getElementById("logo").src = "CarolinaImage.jpg";
	teamfact = Carolina;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Chicago Blackhawks"){
	document.getElementById("logo").src = "ChicagoImage.jpg";
	teamfact = Chicago;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Colorado Avalanche"){
	document.getElementById("logo").src = "ColoradoImage.png";
	teamfact = Colorado;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Columbus Blue Jackets"){
	document.getElementById("logo").src = "ColumbusImage.png";
	teamfact = Columbus;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Dallas Stars"){
	document.getElementById("logo").src = "DallasImage.png";
	teamfact = Dallas;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Detroit Red Wings"){
	document.getElementById("logo").src = "DetroitImage.png";
	teamfact = Detroit;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Edmonton Oilers"){
	document.getElementById("logo").src = "EdmontonImage.png";
	teamfact = Edmonton;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Florida Panthers"){
	document.getElementById("logo").src = "FloridaImage.png";
	teamfact = Florida;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="LA Kings"){
	document.getElementById("logo").src = "LAImage.png";
	teamfact = LosAngeles;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Minnesota Wild"){
	document.getElementById("logo").src = "MinnesotaImage.png";
	teamfact = Minnesota;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Montreal Canadiens"){
	document.getElementById("logo").src = "MontrealImage.png";
	teamfact = Montreal;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Nashville Predators"){
	document.getElementById("logo").src = "NashvilleImage.png";
	teamfact = Nashville;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="New Jersey Devils"){
	document.getElementById("logo").src = "NewJerseyImage.png";
	teamfact = NewJersey;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="New York Islanders"){
	document.getElementById("logo").src = "NewIslandersImage.jpg";
	teamfact = NewIslanders;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="New York Rangers"){
	document.getElementById("logo").src = "NewRangersImage.jpg";
	teamfact = NewRangers;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Ottawa Senators"){
	document.getElementById("logo").src = "OttawaImage.png";
	teamfact = Ottawa;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Philadelphia Flyers"){
	document.getElementById("logo").src = "PhiladelphiaImage.png";
	teamfact = Philadelphia;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Pittsburgh Penguins"){
	document.getElementById("logo").src = "PittsburghImage.jpg";
	teamfact = Pittsburgh;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="San Jose Sharks"){
	document.getElementById("logo").src = "SanJoseImage.png";
	teamfact = SanJose;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="St Louis Blues"){
	document.getElementById("logo").src = "StLouisImage.png";
	teamfact = StLouis;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Tampa Bay Lightning"){
	document.getElementById("logo").src = "TampaBayImage.png";
	teamfact = Tampa;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Toronto Maple Leafs"){
	document.getElementById("logo").src = "TorontoImage.png";
	teamfact = Toronto;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Vancouver Canucks"){
	document.getElementById("logo").src = "VancouverImage.jpg";
	teamfact = Vancouver;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else if(team =="Washington Capitals"){
	document.getElementById("logo").src = "WashingtonImage.jpg";
	teamfact = Washington;
	document.getElementById('teaminfo').innerHTML = teamfact;
 }
else if(team =="Winnipeg Jets"){
	document.getElementById("logo").src = "WinnipegImage.jpg";
	teamfact = Winnipeg;
	document.getElementById('teaminfo').innerHTML = teamfact;
}
else {

	alert("Bro. Do you even know hockey?");
}
}

function Reset(){
	document.getElementById("teamnameEntry").reset();
	document.getElementById("logo").src = "nhl_logo.jpg";
	document.getElementById("teaminfo").innerHTML = " ";
}
