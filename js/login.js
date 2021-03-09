(function() {
    document.getElementById("dugme").addEventListener("click", function() {

        var validno = true;

        var podaci = [];

        var email = document.querySelector("#email").value.trim();
        var sifra = document.querySelector("#password").value.trim();

        var emailError = document.querySelector("#email-error");
        var sifraError = document.querySelector("#password-error");

        var reEmail=/^[\w\d]+\@[\w\d]+\.\w{2,4}$/;
        var reSifra=/[A-Z]+[\d\w]+[\@\$\%\^\&\*\#]+/;

        if (email != "") {
            if (reEmail.test(email)) {
                emailError.innerHTML = "";
                podaci.push(email);
            } else {
                validno = false;
                emailError.innerHTML = "Email nije u dobrom formatu.";
            }
        } else {
            emailError.innerHTML = "";
        }

        if (sifra !== "") {
            if (reSifra.test(sifra)) {
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
})();
