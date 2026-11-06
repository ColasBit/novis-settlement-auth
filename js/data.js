/**
 * RESPONSABILITÉ : Centraliser le contenu texte ET les chemins vers assets/images et assets/video.
 */
const TUF_DATA = {
    home: {
        badge: "LIGHT NOVEL FRANÇAIS • TOME 1 DISPONIBLE",
        dilemma: "« Un Héros condamné à être Libre »",
        synopsis: "Survivre à la guerre est difficile. Survivre à son propre auteur est un cauchemar. Plongez dans un thriller de science-fiction psychologique et méta-narratif où chaque choix déchire un peu plus la réalité.",
        bookSpecs: {
            logoImg: "assets/images/dessin6.png",
            title: "The Ultimate Fight — Tome 1",
            details: "250 pages • 4 Actes, 27 Chapitres",
            illustrator: "Couverture & Illustrations internes : Atelier Hibiki",
            priceSolo: "16,00 €",
            pricePack: "Packs Salon disponibles (Livre + Ticket Admit One + Porte-clés / Tapis de souris)",
            coverImage: "assets/images/livre-ticket.jpg",
            coverAlt: "Tome 1 The Ultimate Fight illustré par Atelier Hibiki avec son marque-page Ticket"
        },
        events: [
            { name: "Aucun pour le moment", city: "", info: "" }
            //{ name: "Salon du Livre Indépendant (Books & Beer)", city: "Montpellier (Le Réservoir)", info: "Édition auteurs auto-édités — Dédicaces & Packs" },
            //{ name: "Festival Sakura / Mangamania", city: "Béziers & Montpellier", info: "Rencontres associatives Manga & Pop-Culture" },
            //{ name: "Salons littéraires locaux", city: "Bassin de Thau (Mèze, Frontignan, Pignan)", info: "Vente directe & dédicaces" }
        ]
    },

    manifesto: {
        badge: "MANIFESTE DU MAKER • 0% IA GÉNÉRATIVE",
        mainTitle: "L'artisanat humain face aux algorithmes",
        intro: "The Ultimate Fight refuse les contrats d'édition classiques et l'intelligence artificielle générative quand des humains ont fait des études en art. Chaque ligne de texte, chaque coup de crayon et chaque image d'animation sont le fruit d'un travail 100% humain.",
        
        videoSection: {
            badge: "ANIMATION 2D FRAME-BY-FRAME & DOUBLAGE",
            title: "Teaser Officiel (Arrive Prochainement)",
            desc: "Réalisé image par image à la main par l'animateur japonais Numanne et doublé par le comédien Jean François.",
            linkVoice: "https://fr.fiverr.com/jeffustudio?source=inbox",
            linkAnime:  "https://vgen.co/Numanne",
            videoSrc: "assets/video/teaser-tuf.mp4",
            posterImg: "assets/images/livre-ticket.jpg"
        },

        sections: [
            {
                title: "",
                grid: "grid-2",
                items: [
                    {
                        tag: "FINANCEMENT ULULE",
                        title: "Indépendance financière validée",
                        desc: "Campagne financée à plus de 200% de l'objectif initial !"
                    },
                    {
                        tag: "ILLUSTRATION TRADITIONNELLE",
                        title: "Collaboration avec Atelier Hibiki",
                        desc: "Direction artistique pensée sur mesure pour le Présenteur."
                    }
                ]
            },
            {
                title: "Le Merchandising & l'Objet Livre",
                grid: "grid-3",
                items: [
                    {
                        tag: "ÉDITION PHYSIQUE",
                        title: "Le Tome 1 & son Ticket « Admit One »",
                        desc: "Impression française...",
                        img: "assets/images/livre-ticket.jpg"
                    },
                    {
                        tag: "COLLECTION COMPLÈTE",
                        title: "Les Goodies Officiels",
                        desc: "Logo de l'univers sur tapis de souris, stickers et marques page. Porte-clé représentant d'Ituiis",
                        img: "assets/images/goodies-pack.jpg"
                    },
                    {
                        tag: "SETUP CYBERPUNK",
                        title: "Tapis de souris Néon TUF",
                        desc: "Format gaming...",
                        img: "assets/images/tapis-setup.jpg"
                    }
                ]
            },
            {
                title: "Artisanat",
                grid: "grid-2",
                items: [
                    {
                        tag: "Le Présentateur",
                        title: "Crédit",
                        desc: "Dessinateur Freelance, Atelier Hibiki a su montrer ses compétences...",
                        img: "assets/images/Illu1.jpg"
                    },
                    {
                        tag: "Ituiis",
                        title: "Crédit",
                        desc: "... Encore...",
                        img: "assets/images/Illu2.jpg"
                    },
                    {
                        tag: "IT-00-Z",
                        title: "Crédit",
                        desc: "... Et encore...",
                        img: "assets/images/Illu4.jpg"
                    }
                ]
            }
        ]
    },

    lore: {
        badge: "ARCHIVES PUBLIQUES DE L'EMPIRE",
        title: "Système d'identification & Protagonistes",
        matriculeRule: "Note de classification : Dans l'armée impériale, le matricule d'un soldat commence systématiquement par les deux premières lettres de son prénom suivies de son numéro d'enregistrement (ex. Brulius = BR-57, Ituiis = IT-86).",
        sections: [
            {
                title: "",
                grid: "grid-2",
                items: [
                    { name: "Hiro", role: "Protagoniste central", desc: "Pris au piège d'un conflit qui dépasse les frontières de son monde et de sa propre écriture." },
                    { name: "Ituiis (Matricule IT-86)", role: "Soldate Impériale", desc: "Combattante d'élite marquée par la rigueur militaire de l'Empire et les fractures du front." },
                    { name: "Alton", role: "Scientifique (?) ", desc: "Confronté au dilemme ultime : jusqu'où peut-on tordre les lois scientifiques et morales par amour ?" },
                    { name: "Brulius (Matricule BR-57)", role: "Garde du corps de l'Empereur", desc: "Vétéran enregistré sous le code BR-57 dans les registres d'opérations impériales. Il s'est personnellement occupé de d'Edward 37 après la mort de son père." }
                ]
            }
        ]
    },

    vip: {
        promptText: "Accès restreint. Veuillez entrer votre code d'accréditation ou votre matricule impérial (Format : XX-XXXX).",
        hintText: "",
        allowedHashes: [""],
        secretArchives: {
            sections: [
                {
                    title: "Dossiers Classifiés",
                    grid: "grid-2",
                    items: [
                        { code: "DOSSIER BR-57", title: "Rapport d'opération — Brulius", content: "Statut : Actif. Affectation : Front extérieur. Observation psychologique : Loyauté élevée mais lucidité anormale face aux anomalies narratives." },
                        { code: "DOSSIER IT-86", title: "Fiche Tactique — Ituiis", content: "Matricule individuel IT-86 (distinct des unités standards d'Infanterie Tactique). Spécialisation : Combat rapproché et survie en zone altérée." }
                    ]
                },
                {
                    title: "Bonus Numériques & Make-of",
                    grid: "grid-2",
                    items: [
                        { badge: "ANIMATION 2D", title: "Le Bureau de Numanne (Making-of 2D)", details: "Pipeline d'animation : Storyboard -> Layout -> Keyframes (Genga) -> In-betweens (Douga) à 12-18 images/seconde, 100% dessiné à la main sans interpolation IA." },
                        { badge: "LABORATOIRE D'ALTON", title: "Journal de Laboratoire d'Alton — Entrée #04", details: "« Les constantes physiques ne cèdent pas sans réclamer un tribut. Si je franchis le seuil ce soir, le monde paiera l'addition, mais elle respirera à nouveau. »", wallpapers: [
                            { title: "Couverture Officielle & Ticket (HD)", file: "assets/images/livre-ticket.jpg" },
                            { title: "Logo Vectoriel Ultimate Fight", file: "assets/images/logo-inline.png" }
                        ]}
                    ]
                },
                {
                    title: "Prêt(e) pour la suite ?",
                    grid: "grid-2",
                    items: [
                        { badge: "Octobre 2027", title: "The Ultimate Fight - Tome 2", details: "Rendez vous l'an prochain pour la sortie du nouveau tome !", img : "assets/images/dessin2.png" },
                        
                    ]
                }
            ]
        }
    },

    shop: {
        badge: "BOUTIQUE OFFICIELLE • STOCK LIMITÉ (30 EX.)",
        title: "Commander l'édition physique & les Goodies",
        products: [
            {
                id: "tuf-tome1",
                name: "The Ultimate Fight — Tome 1",
                tag: "ROMAN (250 PAGES)",
                desc: "Édition physique. Frais de port inclus.",
                price: 21.00,
                isAvailable: false,
                paymentLink: "https://buy.stripe.com/8x24gy0wI6sJ5mk79x8Vi02",
                img: "assets/images/livre-ticket.jpg"
            },
            {
                id: "tuf-pack-ultime",
                name: "Pack Ultime (Livre + Goodies + Code VIP)",
                tag: "OFFRE SALON",
                desc: "Tome 1 + Marque-page Ticket + Tapis de souris.",
                price: 34.00,
                isAvailable: false, 
                paymentLink: "https://buy.stripe.com/7sYcN4cfqg3j6qogK78Vi01",
                img: "assets/images/goodies-et-livre.jpg"
            }
        ]
    }
};