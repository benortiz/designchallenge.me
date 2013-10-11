/*
Count up from any date script-
By JavaScript Kit (www.javascriptkit.com)
Over 200+ free scripts here!
*/



function countup(yr,m,d){
	var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
	var today=new Date();
	var todayy=today.getYear();
	var todaym=today.getMonth();
	var todayd=today.getDate();

	if (todayy < 1000){
		todayy+=1900;
	}

	var todaystring=montharray[todaym]+" "+todayd+", "+todayy;
	var paststring=montharray[m-1]+" "+d+", "+yr;
	var difference=(Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1)

	return difference;
}

function addConverted() {
	var header = document.getElementById('title');
	var daysSince = countup(2013,10,01);
	var wordDay = window.num2str.convert(daysSince);

	header.innerHTML = "<span class=\"top\">" +wordDay+ " day</span><br /><span class=\"bottom\">design challenge.</span>";
	offCenter();
}

function offCenter() {
	var browserWidth = window.innerWidth;
	var halfWidth = browserWidth / 2;
	var content = document.getElementById('wrapper');
	var contentWidth = content.offsetWidth;
	var padding = halfWidth - contentWidth;
	content.style.paddingLeft = padding + "px";

}

window.onload = addConverted;