// 🟦 Message d’alerte principal
const alertBox = document.getElementById("alert");
if (alertBox) {
  alertBox.innerText = "⚠️ SkyBot n'est pas encore disponible au public, mais vous pouvez l'inviter dès maintenant !";
  }

  // 🧩 Liste dynamique des fonctionnalités du bot
  const features = [
    { title: "TOURNOIS", desc: "Crée, gère et organise facilement des tournois avec ton équipe." },
      { title: "MUSIQUE", desc: "Écoute tes musiques préférées directement depuis Discord." },
        { title: "FUN & JEUX", desc: "Découvre la simplicité de la gestionde tournoi en s’ amusant." },
          { title: "NOTIFICATIONS", desc: "Reste informé des actualités, tournois et lives Twitch." },
            { title: "GESTION D'ÉQUIPE", desc: "Ajoute, supprime et gère les joueurs et équipes facilement." },
              { title: "ANNONCES", desc: "Publie automatiquement des annonces pour les tournois et lives." }
              ];

              // Génération automatique du contenu dans la section “features”
              const featuresContainer = document.getElementById("features");
              if (featuresContainer) {
                features.forEach(f => {
                    const div = document.createElement("div");
                        div.className = "feature";
                            div.innerHTML = `<h3>🔹 ${f.title}</h3><p>${f.desc}</p>`;
                                featuresContainer.appendChild(div);
                                  });
                                  }

                                  // 🚀 Bouton pour inviter le bot
                                  const inviteBtn = document.getElementById("inviteBtn");
                                  if (inviteBtn) {
                                    inviteBtn.addEventListener("click", () => {
                                        window.open("https://discord.com/oauth2/authorize?client_id=1396850863401603194", "_blank");
                                          });
                                          }

                                          // 🎥 Bouton pour aller sur la page Twitch
                                          const twitchBtn = document.getElementById("twitchBtn");
                                          if (twitchBtn) {
                                            twitchBtn.addEventListener("click", () => {
                                                window.location.href = "twitch.html";
                                                  });
                                                  }

                                                  // 📄 Liens vers les conditions d’utilisation et la confidentialité
                                                  const termsLink = document.getElementById("termsLink");
                                                  if (termsLink) {
                                                    termsLink.addEventListener("click", () => {
                                                        window.location.href = "terms.html";
                                                          });
                                                          }

                                                          const privacyLink = document.getElementById("privacyLink");
                                                          if (privacyLink) {
                                                            privacyLink.addEventListener("click", () => {
                                                                window.location.href = "privacy.html";
                                                                  });
                                                                  }