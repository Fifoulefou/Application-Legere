document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById("cta");

    ctaButton.addEventListener("click", () => {
        alert("Bienvenue sur notre site de maçonnerie !");
    });
});


/*  COOKIES    */
document.getElementById("accept-cookies").addEventListener("click", function () {
    // Masquer le bandeau de cookies
    document.getElementById("cookie-banner").style.display = "none";
  
    // Enregistrer le consentement de l'utilisateur dans un cookie
    var date = new Date();
    date.setFullYear(date.getFullYear() + 1); // Le consentement expire dans un an
    document.cookie = "cookies_accepted=true; expires=" + date.toUTCString() + "; path=/";
  });
  
  // Vérifier si l'utilisateur a déjà accepté les cookies
  if (document.cookie.indexOf("cookies_accepted=true") !== -1) {
    // Si oui, masquer le bandeau de cookies
    document.getElementById("cookie-banner").style.display = "none";
  }
  document.getElementById("refuse-cookies").addEventListener("click", function () {
    // Masquer le bandeau de cookies
    document.getElementById("cookie-banner").style.display = "none";
  
    // Vous pouvez ajouter ici d'autres actions à effectuer lorsque l'utilisateur refuse les cookies
    // Par exemple, désactiver certaines fonctionnalités du site qui nécessitent des cookies
  });
  
  // Le reste du code JavaScript reste inchangé
    
