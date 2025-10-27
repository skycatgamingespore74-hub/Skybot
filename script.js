// Message d’alerte
document.getElementById("alert").innerText =
  "⚠️ SkyBot n’est pas encore disponible au public, mais vous pouvez l’inviter dès maintenant !";

  // Fonctionnalités
  const features = [
    { title: "Tournois", desc: "Création et gestion de tournois pour ton serveur Discord." },
      { title: "Équipes", desc: "Ajoute et gère facilement les équipes participantes." },
        { title: "Annonces", desc: "Publie des annonces automatiques et personnalisées." },
          { title: "Musique", desc: "Écoute tes musiques préférées directement sur ton serveur." },
            { title: "Fun & Jeux", desc: "Ajoute du fun avec des mini-jeux interactifs !" }
            ];

            const featuresContainer = document.getElementById("features");
            features.forEach(f => {
              const div = document.createElement("div");
                div.className = "feature";
                  div.innerHTML = `<h3>${f.title}</h3><p>${f.desc}</p>`;
                    featuresContainer.appendChild(div);
                    });

                    // Bouton d’invitation
                    document.getElementById("inviteBtn").addEventListener("click", () => {
                      window.open(
                          "https://discord.com/oauth2/authorize?client_id=1396850863401603194",
                              "_blank"
                                );
                                });

                                // Bouton Twitch
                                document.getElementById("twitchBtn").addEventListener("click", () => {
                                  window.location.href = "twitch.html";
                                  });