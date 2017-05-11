const axios = require ('axios');


module.exports = {
	
	getBlague : function (callback) {
		axios.get("https://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb:1").then (function (rep){ callback( replaceXMLchar (rep.data[0].fact)); }).catch (console.error);

	}
};


function replaceXMLchar (str)
{
	return str.replace("&#32;", "") 
     .replace("&#33;", "!") 
     .replace("&#34;", "\"") 
     .replace("&#35;", "#") 
     .replace("&#36;", "$") 
     .replace("&#37;", "%") 
     .replace("&#38;", "&") 
     .replace("&#39;", "\'") 
     .replace("&#40;", "(") 
     .replace("&#41;", ")") 
     .replace("&#42;", "*") 
     .replace("&#43;", "+") 
     .replace("&#44;", ",") 
     .replace("&#45;", "-") 
     .replace("&#46;", ".") 
     .replace("&#47;", "/") 
     .replace("&#48;", "0") 
     .replace("&#49;", "1") 
     .replace("&#50;", "2") 
     .replace("&#51;", "3") 
     .replace("&#52;", "4") 
     .replace("&#53;", "5") 
     .replace("&#54;", "6") 
     .replace("&#55;", "7") 
     .replace("&#56;", "8") 
     .replace("&#57;", "9") 
     .replace("&#58;", ":") 
     .replace("&#59;", ";") 
     .replace("&#60;", "<") 
     .replace("&#61;", "=") 
     .replace("&#62;", ">") 
     .replace("&#63;", "?") 
     .replace("&#64;", "@") 
     .replace("&#65;", "A") 
     .replace("&#66;", "B") 
     .replace("&#67;", "C") 
     .replace("&#68;", "D") 
     .replace("&#69;", "E") 
     .replace("&#70;", "F") 
     .replace("&#71;", "G") 
     .replace("&#72;", "H") 
     .replace("&#73;", "I") 
     .replace("&#74;", "J") 
     .replace("&#75;", "K") 
     .replace("&#76;", "L") 
     .replace("&#77;", "M") 
     .replace("&#78;", "N") 
     .replace("&#79;", "O") 
     .replace("&#80;", "P") 
     .replace("&#81;", "Q") 
     .replace("&#82;", "R") 
     .replace("&#83;", "S") 
     .replace("&#84;", "T") 
     .replace("&#85;", "U") 
     .replace("&#86;", "V") 
     .replace("&#87;", "W") 
     .replace("&#88;", "X") 
     .replace("&#89;", "Y") 
     .replace("&#90;", "Z") 
     .replace("&#91;", "[") 
     .replace("&#92;", "\\") 
     .replace("&#93;", "]") 
     .replace("&#94;", "^") 
     .replace("&#95;", "_") 
     .replace("&#96;", "`") 
     .replace("&#97;", "a") 
     .replace("&#98;", "b") 
     .replace("&#99;", "c") 
     .replace("&#100;", "d") 
     .replace("&#101;", "e") 
     .replace("&#102;", "f") 
     .replace("&#103;", "g") 
     .replace("&#104;", "h") 
     .replace("&#105;", "i") 
     .replace("&#106;", "j") 
     .replace("&#107;", "k") 
     .replace("&#108;", "l") 
     .replace("&#109;", "m") 
     .replace("&#110;", "n") 
     .replace("&#111;", "o") 
     .replace("&#112;", "p") 
     .replace("&#113;", "q") 
     .replace("&#114;", "r") 
     .replace("&#115;", "s") 
     .replace("&#116;", "t") 
     .replace("&#117;", "u") 
     .replace("&#118;", "v") 
     .replace("&#119;", "w") 
     .replace("&#120;", "x") 
     .replace("&#121;", "y") 
     .replace("&#122;", "z") 
     .replace("&#123;", "{") 
     .replace("&#124;", "|") 
     .replace("&#125;", "}") 
     .replace("&#126;", "~")
	     .replace('&quot;','\"')
	     .replace('&amp;','&')
	     .replace('&apos;','\'')
	     .replace('&lt;','<')
	     .replace('&gt;','>')
	     .replace('&nbsp;','')
	     .replace('&iexcl;','¡')
	     .replace('&cent;','¢')
	     .replace('&pound;','£')
	     .replace('&curren;','¤')
	     .replace('&yen;','¥')
	     .replace('&brvbar;','¦')
	     .replace('&sect;','§')
	     .replace('&uml;','¨')
	     .replace('&copy;','©')
	     .replace('&ordf;','ª')
	     .replace('&laquo;','«')
	     .replace('&not;','¬')
	     .replace('&shy;','')
	     .replace('&reg;','®')
	     .replace('&macr;','¯')
	     .replace('&deg;','°')
	     .replace('&plusmn;','±')
	     .replace('&sup2;','²')
	     .replace('&sup3;','³')
	     .replace('&acute;','´')
	     .replace('&micro;','µ')
	     .replace('&para;','¶')
	     .replace('&middot;','·')
	     .replace('&cedil;','¸')
	     .replace('&sup1;','¹')
	     .replace('&ordm;','º')
	     .replace('&raquo;','»')
	     .replace('&frac14;','¼')
	     .replace('&frac12;','½')
	     .replace('&frac34;','¾')
	     .replace('&iquest;','¿')
	     .replace('&Agrave;','À')
	     .replace('&Aacute;','Á')
	     .replace('&Acirc;','Â')
	     .replace('&Atilde;','Ã')
	     .replace('&Auml;','Ä')
	     .replace('&Aring;','Å')
	     .replace('&AElig;','Æ')
	     .replace('&Ccedil;','Ç')
	     .replace('&Egrave;','È')
	     .replace('&Eacute;','É')
	     .replace('&Ecirc;','Ê')
	     .replace('&Euml;','Ë')
	     .replace('&Igrave;','Ì')
	     .replace('&Iacute;','Í')
	     .replace('&Icirc;','Î')
	     .replace('&Iuml;','Ï')
	     .replace('&ETH;','Ð')
	     .replace('&Ntilde;','Ñ')
	     .replace('&Ograve;','Ò')
	     .replace('&Oacute;','Ó')
	     .replace('&Ocirc;','Ô')
	     .replace('&Otilde;','Õ')
	     .replace('&Ouml;','Ö')
	     .replace('&times;','×')
	     .replace('&Oslash;','Ø')
	     .replace('&Ugrave;','Ù')
	     .replace('&Uacute;','Ú')
	     .replace('&Ucirc;','Û')
	     .replace('&Uuml;','Ü')
	     .replace('&Yacute;','Ý')
	     .replace('&THORN;','Þ')
	     .replace('&szlig;','ß')
	     .replace('&agrave;','à')
	     .replace('&aacute;','á')
	     .replace('&acirc;','â')
	     .replace('&atilde;','ã')
	     .replace('&auml;','ä')
	     .replace('&aring;','å')
	     .replace('&aelig;','æ')
	     .replace('&ccedil;','ç')
	     .replace('&egrave;','è')
	     .replace('&eacute;','é')
	     .replace('&ecirc;','ê')
	     .replace('&euml;','ë')
	     .replace('&igrave;','ì')
	     .replace('&iacute;','í')
	     .replace('&icirc;','î')
	     .replace('&iuml;','ï')
	     .replace('&eth;','ð')
	     .replace('&ntilde;','ñ')
	     .replace('&ograve;','ò')
	     .replace('&oacute;','ó')
	     .replace('&ocirc;','ô')
	     .replace('&otilde;','õ')
	     .replace('&ouml;','ö')
	     .replace('&divide;','÷')
	     .replace('&oslash;','ø')
	     .replace('&ugrave;','ù')
	     .replace('&uacute;','ú')
	     .replace('&ucirc;','û')
	     .replace('&uuml;','ü')
	     .replace('&yacute;','ý')
	     .replace('&thorn;','þ')
	     .replace('&yuml;','ÿ')
	     .replace('&OElig;','Œ')
	     .replace('&oelig;','œ')
	     .replace('&Scaron;','Š')
	     .replace('&scaron;','š')
	     .replace('&Yuml;','Ÿ')
	     .replace('&fnof;','ƒ')
	     .replace('&circ;','ˆ')
	     .replace('&tilde;','˜')
	     .replace('&Alpha;','Α')
	     .replace('&Beta;','Β')
	     .replace('&Gamma;','Γ')
	     .replace('&Delta;','Δ')
	     .replace('&Epsilon;','Ε')
	     .replace('&Zeta;','Ζ')
	     .replace('&Eta;','Η')
	     .replace('&Theta;','Θ')
	     .replace('&Iota;','Ι')
	     .replace('&Kappa;','Κ')
	     .replace('&Lambda;','Λ')
	     .replace('&Mu;','Μ')
	     .replace('&Nu;','Ν')
	     .replace('&Xi;','Ξ')
	     .replace('&Omicron;','Ο')
	     .replace('&Pi;','Π')
	     .replace('&Rho;','Ρ')
	     .replace('&Sigma;','Σ')
	     .replace('&Tau;','Τ')
	     .replace('&Upsilon;','Υ')
	     .replace('&Phi;','Φ')
	     .replace('&Chi;','Χ')
	     .replace('&Psi;','Ψ')
	     .replace('&Omega;','Ω')
	     .replace('&alpha;','α')
	     .replace('&beta;','β')
	     .replace('&gamma;','γ')
	     .replace('&delta;','δ')
	     .replace('&epsilon;','ε')
	     .replace('&zeta;','ζ')
	     .replace('&eta;','η')
	     .replace('&theta;','θ')
	     .replace('&iota;','ι')
	     .replace('&kappa;','κ')
	     .replace('&lambda;','λ')
	     .replace('&mu;','μ')
	     .replace('&nu;','ν')
	     .replace('&xi;','ξ')
	     .replace('&omicron;','ο')
	     .replace('&pi;','π')
	     .replace('&rho;','ρ')
	     .replace('&sigmaf;','ς')
	     .replace('&sigma;','σ')
	     .replace('&tau;','τ')
	     .replace('&upsilon;','υ')
	     .replace('&phi;','φ')
	     .replace('&chi;','χ')
	     .replace('&psi;','ψ')
	     .replace('&omega;','ω')
	     .replace('&thetasym;','ϑ')
	     .replace('&upsih;','ϒ')
	     .replace('&piv;','ϖ')
	     .replace('&ensp;',' ')
	     .replace('&emsp;',' ')
	     .replace('&thinsp;',' ')
	     .replace('&zwnj;','')
	     .replace('&zwj;','')
	     .replace('&lrm;','')
	     .replace('&rlm;','')
	     .replace('&ndash;','–')
	     .replace('&mdash;','—')
	     .replace('&lsquo;','‘')
	     .replace('&rsquo;','’')
	     .replace('&sbquo;','‚')
	     .replace('&ldquo;','“')
	     .replace('&rdquo;','”')
	     .replace('&bdquo;','„')
	     .replace('&dagger;','†')
	     .replace('&Dagger;','‡')
	     .replace('&bull;','•')
	     .replace('&hellip;','…')
	     .replace('&permil;','‰')
	     .replace('&prime;','′')
	     .replace('&Prime;','″')
	     .replace('&lsaquo;','‹')
	     .replace('&rsaquo;','›')
	     .replace('&oline;','‾')
	     .replace('&frasl;','⁄')
	     .replace('&euro;','€')
	     .replace('&image;','ℑ')
	     .replace('&weierp;','℘')
	     .replace('&real;','ℜ')
	     .replace('&trade;','™')
	     .replace('&alefsym;','ℵ')
	     .replace('&larr;','←')
	     .replace('&uarr;','↑')
	     .replace('&rarr;','→')
	     .replace('&darr;','↓')
	     .replace('&harr;','↔')
	     .replace('&crarr;','↵')
	     .replace('&lArr;','⇐')
	     .replace('&uArr;','⇑')
	     .replace('&rArr;','⇒')
	     .replace('&dArr;','⇓')
	     .replace('&hArr;','⇔')
	     .replace('&forall;','∀')
	     .replace('&part;','∂')
	     .replace('&exist;','∃')
	     .replace('&empty;','∅')
	     .replace('&nabla;','∇')
	     .replace('&isin;','∈')
	     .replace('&notin;','∉')
	     .replace('&ni;','∋')
	     .replace('&prod;','∏')
	     .replace('&sum;','∑')
	     .replace('&minus;','−')
	     .replace('&lowast;','∗')
	     .replace('&radic;','√')
	     .replace('&prop;','∝')
	     .replace('&infin;','∞')
	     .replace('&ang;','∠')
	     .replace('&and;','∧')
	     .replace('&or;','∨')
	     .replace('&cap;','∩')
	     .replace('&cup;','∪')
	     .replace('&int;','∫')
	     .replace('&there4;','∴')
	     .replace('&sim;','∼')
	     .replace('&cong;','≅')
	     .replace('&asymp;','≈')
	     .replace('&ne;','≠')
	     .replace('&equiv;','≡')
	     .replace('&le;','≤')
	     .replace('&ge;','≥')
	     .replace('&sub;','⊂')
	     .replace('&sup;','⊃')
	     .replace('&nsub;','⊄')
	     .replace('&sube;','⊆')
	     .replace('&supe;','⊇')
	     .replace('&oplus;','⊕')
	     .replace('&otimes;','⊗')
	     .replace('&perp;','⊥')
	     .replace('&sdot;','⋅')
	     .replace('&vellip;','⋮')
	     .replace('&lceil;','⌈')
	     .replace('&rceil;','⌉')
	     .replace('&lfloor;','⌊')
	     .replace('&rfloor;','⌋')
	     .replace('&lang;','〈')
	     .replace('&rang;','〉')
	     .replace('&loz;','◊')
	     .replace('&spades;','♠')
	     .replace('&clubs;','♣')
	     .replace('&hearts;','♥')
	     .replace('&diams;','♦')
.replace("&#032;", "") 
     .replace("&#033;", "!") 
     .replace("&#034;", "\"") 
     .replace("&#035;", "#") 
     .replace("&#036;", "$") 
     .replace("&#037;", "%") 
     .replace("&#038;", "&") 
     .replace("&#039;", "\'") 
     .replace("&#040;", "(") 
     .replace("&#041;", ")") 
     .replace("&#042;", "*") 
     .replace("&#043;", "+") 
     .replace("&#044;", ",") 
     .replace("&#045;", "-") 
     .replace("&#046;", ".") 
     .replace("&#047;", "/") 
     .replace("&#048;", "0") 
     .replace("&#049;", "1") 
     .replace("&#050;", "2") 
     .replace("&#051;", "3") 
     .replace("&#052;", "4") 
     .replace("&#053;", "5") 
     .replace("&#054;", "6") 
     .replace("&#055;", "7") 
     .replace("&#056;", "8") 
     .replace("&#057;", "9") 
     .replace("&#058;", ":") 
     .replace("&#059;", ";") 
     .replace("&#060;", "<") 
     .replace("&#061;", "=") 
     .replace("&#062;", ">") 
     .replace("&#063;", "?") 
     .replace("&#064;", "@") 
     .replace("&#065;", "A") 
     .replace("&#066;", "B") 
     .replace("&#067;", "C") 
     .replace("&#068;", "D") 
     .replace("&#069;", "E") 
     .replace("&#070;", "F") 
     .replace("&#071;", "G") 
     .replace("&#072;", "H") 
     .replace("&#073;", "I") 
     .replace("&#074;", "J") 
     .replace("&#075;", "K") 
     .replace("&#076;", "L") 
     .replace("&#077;", "M") 
     .replace("&#078;", "N") 
     .replace("&#079;", "O") 
     .replace("&#080;", "P") 
     .replace("&#081;", "Q") 
     .replace("&#082;", "R") 
     .replace("&#083;", "S") 
     .replace("&#084;", "T") 
     .replace("&#085;", "U") 
     .replace("&#086;", "V") 
     .replace("&#087;", "W") 
     .replace("&#088;", "X") 
     .replace("&#089;", "Y") 
     .replace("&#090;", "Z") 
     .replace("&#091;", "[") 
     .replace("&#092;", "\\") 
     .replace("&#093;", "]") 
     .replace("&#094;", "^") 
     .replace("&#095;", "_") 
     .replace("&#096;", "`") 
     .replace("&#097;", "a") 
     .replace("&#098;", "b") 
     .replace("&#099;", "c") ;
	
}
