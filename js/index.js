
// DINAMICKO ISPISIVANJE POKRETNOG TEKST
var vest;
var datum= new Date();
var dan = datum.getDay();
switch(dan) {
	case 0:
		vest="<i>Nedelja je, misliš da ne radimo?! Varaš se, mi smo budni 24/7!</i>";
		break;
	case 1:
		vest="<i>Ponedeljak je, započni nedelju dobrim odlukama!</i>";
		break;
	case 5:
		vest="<i>Petak je, provedi vikend u dobroj formi!</i>";
		break;
	default:
		vest="<i>Ne moraš biti dobar da bi krenuo, moraš krenuti da bi bio dobar!</i>"
		break;
}
document.write ("<bold><font size=6>"+"<MARQUEE BEHAVIOR=ALTERNATE direction=left >"+vest+"</MARQUEE></bold>")
