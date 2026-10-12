"use strict";
const projets = [
  { titre: "Plan d’adressage IPv4 d’une école", description: "Préparer un plan d’adressage pour séparer l’administration, les salles de cours et le laboratoire.", categorie: "reseau", image: "img/projet1.jpeg", statut: "À réaliser", outils: ["IPv4", "Masques", "Sous-réseaux"] },
  { titre: "Maquette réseau d’une petite entreprise", description: "Dessiner puis simuler un réseau simple avec des postes, des commutateurs et un routeur.", categorie: "reseau", image: "img/projet2.jpeg", statut: "À réaliser", outils: ["LAN", "Switch", "Routeur"] },
  { titre: "Étude d’un Wi-Fi pour visiteurs", description: "Proposer une configuration Wi-Fi simple et présenter les bonnes pratiques de sécurité.", categorie: "reseau", image: "img/projet3.jpeg", statut: "À réaliser", outils: ["Wi-Fi", "Sécurité", "Documentation"] },
  { titre: "Découverte des services réseau", description: "Étudier le rôle de DHCP et DNS et préparer une fiche de configuration.", categorie: "systeme", image: "img/projet4.jpeg", statut: "À réaliser", outils: ["DHCP", "DNS", "Systèmes"] },
  { titre: "Organisation de fichiers partagés", description: "Concevoir une structure de dossiers et décrire des règles d’accès pour les utilisateurs.", categorie: "systeme", image: "img/projet5.jpeg", statut: "À réaliser", outils: ["Fichiers", "Permissions", "Organisation"] },
  { titre: "Portfolio étudiant", description: "Présenter mon parcours et mes compétences avec une page adaptée aux téléphones et aux ordinateurs.", categorie: "web", image: "img/projet6.jpeg", statut: "En cours", outils: ["HTML5", "CSS3", "Bootstrap", "JavaScript"] }
];

const liste = document.querySelector("#liste-projets");

function afficherProjets(tableau) {
  let html = "";
  tableau.forEach(p => {
    const classeStatut = p.statut === "En cours" ? "in-progress" : "";
    const outils = p.outils.map(o => `<span>${o}</span>`).join("");
    html += `
      <div class="col">
        <article class="project-card">
          <div class="project-art"><img src="${p.image}" alt="Image du projet : ${p.titre}" loading="lazy"></div>
          <div class="card-body">
            <span class="project-status ${classeStatut}">${p.statut}</span>
            <h3 class="card-title">${p.titre}</h3>
            <p class="card-text">${p.description}</p>
            <div class="project-tools">${outils}</div>
          </div>
        </article>
      </div>`;
  });
  if (liste) liste.innerHTML = html;
}
afficherProjets(projets);