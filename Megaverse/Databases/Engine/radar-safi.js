//Glory to God
//Celebrating the Life of Janes Moraa Nyaosi
	//fielding global variables
var spiritualentity = ["love","desire","fear","duty","shame","prestige","posterity","other"];
var purpose = "University Liaison";
var university = ["maseno","masinde-muliro","nairobi","jomo-kenyatta","kenyatta","moi","multimedia","catholic","baraton"];
var motto = "Connecting universities to pools of informal knowledge.";
var console;
var display;
var sequence = [];
var limits = {"level":["infant","rookie","higher","lower","pride and fall","humility is key","maximum","veteran","minimum","exhausted","depleted","deceased"],"orientation":["for good","for no good at all","for something good","for anything","experimenting","just saying"]};

function prideandfall(){
	var pridecycle = limits.level[5];
	alert(pridecycle);
}

var hospital = ["attitude engineering","chemical engineering","habit engineering","geographical engineering","other - to be specified"];
var medicine = {"mwanyagetinge":["loving","exponential kindness","sharing","natural medicine","Chinese Medicine","helpful information","western medicine", "indian medicine","african medicine","corporate medicine","spiritual medicine","soul cultivation","redemption of lost souls"]};
var framework;

var userCareer = {"career": ["Organic Farmer","Development Student","Student Programmer","Programming Internship Student","Field Agent","Programmer","Geophysics Internship Student","Mining Internship Student","Geophysics Expert","Mining Expert","Finance Expert","Artisan (Jua-Kali or Informal-Sector Worker)","University Liaison Officer","Transporter","Sponsor"], "page": ["Food Production","Future Project Manager","Future Software Development Roles","Supervised Programming Roles","Data Updates","Inspired Technician","Future Climate Support","Future Climate Support","Evaluating Applied Cosmological Computations","Training and Coordinating Artisans","Currency Production and Management","Supplier of Essential Products & Services","University Liaison",{"Transportation":"<h2>Goods to be Delivered</h2>"},"Financial Support"]};

var nameTally = {"nandi":[{"f":["chebet","chebor","chelagat","chelimo","chepchirchir","chepkemboi","chepketer","cheptoo","cherobon","cherono","cherop","cherotich","chepsang","karembo","rembo"],"m":["kemboi","kibet","kibor","kipchirchir","kiplagat","kipketer","kiplimo","kipkemboi","kiprop","kiprono","chesang","kiptoo","kiptum"]}],"dholuo":[{"f":["achieng","adhiambo","akinyi","amondi","anyango","atieno","awuor"],"m":["anyang","nyongo","ochieng","odhiambo","oduor","oloo","omondi","opiyo","onyango","otieno","othoo"]}],"ekegusii":[{"f":["bochaberi","bosibori","bonareri","moraa","kwamboka","kemuma","kemunto","kerubo","mokeira","moige","mosomi","nyanchama","nyanchera","nyansiaboka","nyaboke","nyabonyi","nyakerario","nyamoita","nyamokune","nyareso","nyasuguta","osebe"],"m":["akoya","angwenyi","ateka","bosire","chumbegi","king'oina","kingoina","mogoko","mokua","moseti","morara","masese","mageto","kaosa","mabeya","maobe","maosa","mogaka","mogesi","moriasi","migosi","makori","mokaya","mokembo","mosoti","mosomi","motari","nyagechanga","nyaosi","nyambati","nyamokoba","nyachoti","nyakango","nyangaresi","obonyo","obutu","oirere","omariba","ombese","omwega","omwenga","ondieki","ontiri","osebe","nyabwanga","riose"]}]};

var areaTally = {"county":["Mombasa","Kwale","Kilifi","Tana River","Lamu","Taita Taveta","Garissa","Wajir","Mandera","Marsabit","Isiolo","Meru","Tharaka Nithi","Embu","Kitui","Machakos","Makueni","Nyandarua","Nyeri","Kirinyaga","Muranga","Kiambu","Turkana","West Pokot","Samburu","Trans Nzoia","Uasin Gishu","Elgeyo Marakwet","Nandi","Baringo","Laikipia","Nakuru","Narok","Kajiado","Kericho","Bomet","Kakamega","Vihiga","Bungoma","Busia","Siaya","Kisumu","Homa Bay","Migori","Kisii", "Nyamira","Nairobi"],"cultures_of":["kiswahili","kiswahili","kiswahili","kiswahili","kiswahili","kiswahili","somali","borana","borana","borana","borana","meru","kikuyu","embu","akamba","akamba","akamba","akamba","kikuyu","kikuyu","kikuyu","kikuyu","kikuyu","turkana","ololuhyia","kalenjin","kalenjin","kalenjin","kalenjin","kalenjin","kalenjin","kalenjin","kalenjin","kalenjin","kalenjin","ololuhyia","ololuhyia","ololuhyia","ololuhyia","dhuluo","dholuo","dholuo",{"culture":["dholuo","kuria","suba"]},"gusii","ekegusii","kiswahili"],"products_of":["","","","","","","","","","","10","","","","","","embedodo","","waru","","","","","","","","","","","","","","","","","","","","","","","","","sweet potatoes & omena"],"item":["bananas","video content"],"item":["sukari-nguru",{"tea":["processed","leaves"]},"bricks","bananas","renovated charcoal","software"]};

var product = {"name":["maize","beans","potatoes","bananas","rice"],"category":["human food","human food","human food","human food","human food","animal food","clothing","medicine","service","housing","education","defense"]};

var source = {"maize":["kitale","kuria"],"month":["kitale maize harvest month","kuria maize harvest month"],"price":[],"beans":[]};

defaultUrl = "../Index.html";
alternateUrl = "";
var homeUrl = "<a href='" + defaultUrl + "'> Home </a>" + " - ";

console = "Cultural Name: <input id = 'console' type = 'text'>";
var submit = "<input type='button' value = 'Login' onclick = 'culturalLogin()'>";
display = "<h2>Glory to God</h2><hr>" + homeUrl + console + submit + "<br>";
var culturalName = "";

var m_b_p_ind = ["food","fuel","clothing","housing","transportation","entertainment"]; //-------------------------------------------------------------------------------------

display = "<h2>Glory to God</h2><hr>" + homeUrl + console + submit + "<br>";
framework = "<!DOCTYPE html><html><head><title></title></head><body>" + display + "<p><a href='../Megaverse/Reception/Traditional Cultural Name Synthesis.html'>Guest</a></body></html>";

document.write(framework);
var count;
var count2;
var count3;

var jobTitle;
var userPage="";

function sectionize(userPage) {
	//--setting "basic" or "advanced" to be acquired from calling function
	//--function to create identifiable div with components inside received from either userCareer database or userInfo database where userInfo is "basic"
}


var enforce = new Function("m", "return userCareer.career[m];");

var id;
function loadPage(id) {
	userPage = userCareer.page[id];
	alert(userPage);
}

var buttons = "";
var button = [];
var usertype;
for(count = 0; count < userCareer.career.length; count++){
	//-----------------------------------------------------------------------------------------------
	//this means that new buttons can be created by adding elements to respective userCareer.career fields
	//-----------------------------------------------------------------------------------------------
	usertype = enforce(count);
	id = document.getElementById(count)
	button[count] = "<input type='button' value = '" + userCareer.career[count] +"' id = '" + count + "' onclick = loadPage(id)><br>";
	buttons = buttons + button[count];
}

var unisex = "";
var areaList = "";
function culturalLogin() {
	//sets cultural name of user affects what is displayed at console

	culturalName = document.getElementById("console").value;

	var hits;
	if (nameTally.ekegusii[0].f.length > nameTally.ekegusii[0].m.length){
		hits = nameTally.ekegusii[0].f.length;
	} else {
		hits = nameTally.ekegusii[0].m.length;
	} //variable adjusted so as to alternate respectively

	if (culturalName != "" && culturalName != null) {

		display = "User: <em>" + culturalName + "</em>, not logged into culture.<br>";

		for (count3 = areaTally.county.length; count3 >= 0; count3--){
			areaList = areaList + "<option>" + areaTally.county[count3] + "</option>";
		}

		for (count = hits; count >= 0; count--){
			if (culturalName == nameTally.ekegusii[0].f[count]){

				//--enforce userculture i.e. connect culturalName to equivalent in database thereby initiating user-redirection trajectory. To be achieved by letting algorithm scan from a database of names for specifically indexed names

				display = "Aye baaba <em>" + nameTally.ekegusii[0].f[count] + "</em>, nice to meet you.<br> Chagua area unadai kusoma: <select id='area'>" + areaList + "</select><input type='submit' value='submit' onclick='loadPlayGround()'><br>";
				//to dump areaTally array into drop-down list here <br>";
				unisex = "off";

				//nested loop required here for when a name has been found in .f database, to tally with .m database for ascertaining that name is or is not unisex

				for (count2 = hits; count2 >=0; count2--){
					if (nameTally.ekegusii[0].f[count] == nameTally.ekegusii[0].m[count2]) {

						if (unisex == "off") {
							unisex = "on"; //trap for labelling event as unisex when name is found in both m and f databases
							alert(culturalName + " is a unisex name. No code yet.");
						}

					}
				}

			} else if (culturalName == nameTally.ekegusii[0].m[count]){
				display = "Aye sokoro <em>" + nameTally.ekegusii[0].m[count] + "</em>, komanyana nokuya. Chorango emeremo yao: <br>";
			}
		}
	} else {
		display = "blank name entered";
		alert("Seriously, a blank name makes no sense.");
	}

	//actions hereunder to depend on value of unisex logical switch
	framework = "<!DOCTYPE html><html><head><title></title></head><body>" + display + buttons + "<p><a href='../Core/input-control.html'>Back to Login</a><!-- Unlike most modern systems, Radar Safi's orgware registration system shall be such that the user realizes interaction. To be achieved via use of intelligent forms</body></html>";
	document.write(framework);
}//end of cultural-login

function labourLogin(){
	//-- hr dept to proceed from here with THE HELP OF LOVE
}

var spiritualorientation = "business-oriented";
var mobility = "outgoing";
var character = {"trait":["business-oriented","job-market-oriented"],"mobility":["outgoing","indoor-person","goes-out only for work","goes out for parties","goes for night-outs"]};
function loadPlayGround(){
	var perspective = ["foresight","hindsight","scopesight"];
	var priest; //can be human, AI or logical image of culture
	//var sanity = [{"sane"},{"insane"},{"individual"},{"collective"},{"definitions"}];

	//example

	var area = document.getElementById("area");
	if (area.value==areaTally.county[43] && culturalName == "moraa") {
		if (spiritualorientation == character.trait[0] && mobility == character.mobility[0]){
			alert(areaTally.products_of[43] + " also about " + areaTally.cultures_of[42].culture[2] + " | " + motto + " | " + "assign to omena collection business");
		}
	}
	if (area.value == "Nairobi") {
		somakanairos();
	} else {
		prideandfall();
	}
			
}
		
function somakanairos(){
	alert("info in this section to include matatu routes, stages, product godowns and connecting workers with work and commodities with those who need them");
}