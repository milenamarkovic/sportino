
window.onload = function() {
    document.getElementById("dugme").addEventListener("click", function() {

        var validno = true;

        var podaci = [];

        var ime = document.querySelector("#ime").value.trim();
        var prezime = document.querySelector("#prezime").value.trim();
        var email = document.querySelector("#email").value.trim();
        var sifra = document.querySelector("#password").value.trim();


        var imeError = document.querySelector("#ime-error");
        var prezimeError = document.querySelector("#prezime-error");
        var emailError = document.querySelector("#email-error");
        var sifraError = document.querySelector("#password-error");

        var reIme = /^[A-Z][a-z]{2,11}$/;
        var rePrezime = /^[A-Z][a-z]{2,15}$/;
        var reEmail=/^[\w\d]+\@[\w\d]+\.\w{2,4}$/;
        var reSifra=/[A-Z]+[\d\w]+[\@\$\%\^\&\*\#]+/;


        // ime == "Pera"
        if(ime == "") {
           imeError.innerHTML = "Polje za ime je obavezno.";
           validno = false;
        } else if(!reIme.test(ime)) {
            imeError.innerHTML = "Podatak za ime nije u ispravnom formatu.";
            validno = false;
        } else {
            podaci.push(ime);
            imeError.innerHTML = "";
        }

        if(prezime == "") {
            prezimeError.innerHTML = "Polje za prezime je obavezno.";
            validno = false;
         } else if(!rePrezime.test(prezime)) {
             prezimeError.innerHTML = "Podatak za prezime nije u ispravnom formatu.";
             validno = false;
            } else {
             podaci.push(prezime);
             prezimeError.innerHTML = "";
         }

         if(email != "") {
            if(reEmail.test(email)) {
              emailError.innerHTML = "";
               podaci.push(email);
            } else {
                validno = false;
                emailError.innerHTML = "Email nije u dobrom formatu.";
            }
         } else {
             emailError.innerHTML = "";
         }

         if(sifra != "") {
            if(reSifra.test(sifra)) {
                sifraError.innerHTML = "";
               podaci.push(sifra);
            } else {
                validno = false;
                sifraError.innerHTML = "Sifra nije u dobrom formatu.";
            }
         } else {
            sifraError.innerHTML = "";
         }
	});
}
