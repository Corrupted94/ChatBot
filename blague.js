const axios = require ('axios');


module.exports = {
	
	getBlague : function (callback) {
		axios.get("https://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb:1").then (function (rep){ callback( replaceXMLchar (rep.data[0].fact)); }).catch (console.error);

	}
};


function replaceXMLchar (str)
{
	return str.replace("&#32;", ""); 
.replace("&#33;", "!"); 
.replace("&#34;", "\""); 
.replace("&#35;", "#"); 
.replace("&#36;", "$"); 
.replace("&#37;", "%"); 
.replace("&#38;", "&"); 
.replace("&#39;", "'"); 
.replace("&#40;", "("); 
.replace("&#41;", ")"); 
.replace("&#42;", "*"); 
.replace("&#43;", "+"); 
.replace("&#44;", ","); 
.replace("&#45;", "-"); 
.replace("&#46;", "."); 
.replace("&#47;", "/"); 
.replace("&#48;", "0"); 
.replace("&#49;", "1"); 
.replace("&#50;", "2"); 
.replace("&#51;", "3"); 
.replace("&#52;", "4"); 
.replace("&#53;", "5"); 
.replace("&#54;", "6"); 
.replace("&#55;", "7"); 
.replace("&#56;", "8"); 
.replace("&#57;", "9"); 
.replace("&#58;", ":"); 
.replace("&#59;", ";"); 
.replace("&#60;", "<"); 
.replace("&#61;", "="); 
.replace("&#62;", ">"); 
.replace("&#63;", "?"); 
.replace("&#64;", "@"); 
.replace("&#65;", "A"); 
.replace("&#66;", "B"); 
.replace("&#67;", "C"); 
.replace("&#68;", "D"); 
.replace("&#69;", "E"); 
.replace("&#70;", "F"); 
.replace("&#71;", "G"); 
.replace("&#72;", "H"); 
.replace("&#73;", "I"); 
.replace("&#74;", "J"); 
.replace("&#75;", "K"); 
.replace("&#76;", "L"); 
.replace("&#77;", "M"); 
.replace("&#78;", "N"); 
.replace("&#79;", "O"); 
.replace("&#80;", "P"); 
.replace("&#81;", "Q"); 
.replace("&#82;", "R"); 
.replace("&#83;", "S"); 
.replace("&#84;", "T"); 
.replace("&#85;", "U"); 
.replace("&#86;", "V"); 
.replace("&#87;", "W"); 
.replace("&#88;", "X"); 
.replace("&#89;", "Y"); 
.replace("&#90;", "Z"); 
.replace("&#91;", "["); 
.replace("&#92;", "\"); 
.replace("&#93;", "]"); 
.replace("&#94;", "^"); 
.replace("&#95;", "_"); 
.replace("&#96;", "`"); 
.replace("&#97;", "a"); 
.replace("&#98;", "b"); 
.replace("&#99;", "c"); 
.replace("&#100;", "d"); 
.replace("&#101;", "e"); 
.replace("&#102;", "f"); 
.replace("&#103;", "g"); 
.replace("&#104;", "h"); 
.replace("&#105;", "i"); 
.replace("&#106;", "j"); 
.replace("&#107;", "k"); 
.replace("&#108;", "l"); 
.replace("&#109;", "m"); 
.replace("&#110;", "n"); 
.replace("&#111;", "o"); 
.replace("&#112;", "p"); 
.replace("&#113;", "q"); 
.replace("&#114;", "r"); 
.replace("&#115;", "s"); 
.replace("&#116;", "t"); 
.replace("&#117;", "u"); 
.replace("&#118;", "v"); 
.replace("&#119;", "w"); 
.replace("&#120;", "x"); 
.replace("&#121;", "y"); 
.replace("&#122;", "z"); 
.replace("&#123;", "{"); 
.replace("&#124;", "|"); 
.replace("&#125;", "}"); 
.replace("&#126;", "~"); 
	
}
