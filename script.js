// Message d'alerte
document.getElementById("alert").innerText =
  "⚠️ SkyBot n'est pas encore disponible au public, mais vous pouvez l'inviter dès maintenant ! ⚠️";

  // Fonctionnalités du bot
  const features = [
    { title: "TOURNOI", desc: "Creation, Gestion de tournoi puis un Fun en plus." },
      { title: "Musique", desc: "Écoute tes musiques préférées." },
        { title: "Fun & Jeux", desc: "Des commandes amusantes pour ton serveur." },
          { title: "Notifications", desc: "Reste informé avec des alertes personnalisées." }
          ];

          const featuresContainer = document.getElementById("features");
          features.forEach(f => {
            const div = document.createElement("div");
              div.className = "feature";
                div.innerHTML = `<h3>${f.title}</h3><p>${f.desc}</p>`;
                  featuresContainer.appendChild(div);
                  });

                  // Bouton d'invitation
                  document.getElementById("inviteBtn").addEventListener("click", () => {
                    window.open(
                        "https://discord.com/oauth2/authorize?client_id=1396850863401603194&scope=bot&permissions=8",
                            "_blank"
                              );
                              });

                              // Liens vers conditions et confidentialité
                              document.getElementById("termsLink").addEventListener("click", () => {
                                alert("Conditions d'utilisation : votre site n'est pas encore public !");
                                });

                                document.getElementById("privacyLink").addEventListener("click", () => {
                                  alert("Politique de confidentialité : votre site n'est pas encore public !");
                                  });