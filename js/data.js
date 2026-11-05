/**
 * RESPONSABILITÉ : Centraliser le contenu texte ET les chemins vers assets/images et assets/video.
 */
const TUF_DATA = {
    home: {
        badge: "LIGHT NOVEL FRANÇAIS • TOME 1 DISPONIBLE",
        dilemma: "« Si tu perdais la personne que tu aimes le plus, et que la science te permettait de la ramener au prix de la fin du monde... tu le ferais ? »",
        synopsis: "Survivre à la guerre est difficile. Survivre à son propre auteur est un cauchemar. Plongez dans un thriller de science-fiction psychologique et méta-narratif où chaque choix déchire un peu plus la réalité.",
        bookSpecs: {
            title: "The Ultimate Fight — Tome 1",
            details: "206 pages • 4 Actes, 27 Chapitres • Tranche 20,5 mm (Papier bouffant main de 2)",
            illustrator: "Couverture & Illustrations internes : Atelier Hibiki",
            priceSolo: "16,00 € (Livre seul)",
            pricePack: "Packs Salon disponibles (Livre + Ticket Admit One + Porte-clés / Tapis de souris)",
            coverImage: "assets/images/livre-ticket.jpg",
            coverAlt: "Tome 1 The Ultimate Fight illustré par Atelier Hibiki avec son marque-page Ticket"
        },
        events: [
            { name: "Salon du Livre Indépendant (Books & Beer)", city: "Montpellier (Le Réservoir)", info: "Édition auteurs auto-édités — Dédicaces & Packs" },
            { name: "Festival Sakura / Mangamania", city: "Béziers & Montpellier", info: "Rencontres associatives Manga & Pop-Culture" },
            { name: "Salons littéraires locaux", city: "Bassin de Thau (Mèze, Frontignan, Pignan)", info: "Vente directe & dédicaces" }
        ]
    },

    manifesto: {
        badge: "MANIFESTE DU MAKER • 0% IA GÉNÉRATIVE",
        title: "L'artisanat humain face aux algorithmes",
        intro: "The Ultimate Fight refuse les contrats d'édition classiques et l'intelligence artificielle générative. Chaque ligne de texte, chaque coup de crayon et chaque image d'animation sont le fruit d'un travail 100% humain.",
        videoSection: {
            badge: "ANIMATION 2D FRAME-BY-FRAME & DOUBLAGE",
            title: "Teaser Officiel (20 secondes)",
            desc: "Réalisé image par image à la main par l'animateur japonais Numanne et doublé par de vrais comédiens.",
            videoSrc: "assets/video/teaser-tuf.mp4",
            posterImg: "assets/images/livre-ticket.jpg"
        },
        pillars: [
            {
                tag: "FINANCEMENT ULULE",
                title: "Indépendance financière validée",
                desc: "Campagne financée à plus de 200% de l'objectif initial, permettant d'auto-produire l'impression, les goodies, le doublage et le teaser animé tout en conservant 100% des droits."
            },
            {
                tag: "ILLUSTRATION TRADITIONNELLE",
                title: "Collaboration avec Atelier Hibiki",
                desc: "Direction artistique pensée sur mesure pour Hiro, Ituiis et le Marionnettiste. Aucun prompt, uniquement du vrai dessin."
            }
        ],
        goodiesGallery: [
            {
                tag: "ÉDITION PHYSIQUE",
                title: "Le Tome 1 & son Ticket « Admit One »",
                desc: "Impression française (tranche 20,5 mm) accompagnée du marque-page bicolore donnant accès au terminal secret.",
                img: "assets/images/livre-ticket.jpg"
            },
            {
                tag: "COLLECTION COMPLÈTE",
                title: "Les Goodies Officiels",
                desc: "Logos vectoriels réalisés sous Inkscape : sticker découpé, ticket doré Admit One, porte-clés acrylique avec attache cœur et tapis de souris.",
                img: "assets/images/goodies-pack.jpg"
            },
            {
                tag: "SETUP CYBERPUNK",
                title: "Tapis de souris Néon TUF",
                desc: "Format gaming avec coutures renforcées, crochets de visée rouges dans les angles et logo néon central.",
                img: "assets/images/tapis-setup.jpg"
            }
        ]
    },

    lore: {
        badge: "ARCHIVES PUBLIQUES DE L'EMPIRE",
        title: "Système d'identification & Protagonistes",
        matriculeRule: "Note de classification : Dans l'armée impériale, le matricule d'un soldat commence systématiquement par les deux premières lettres de son prénom suivies de son numéro d'enregistrement (ex. Brulius = BR-57, Ituiis = IT-86). À ne pas confondre avec l'acronyme de corps d'armée « IT » (Soldat d'Infanterie Tactique).",
        characters: [
            { name: "Hiro", role: "Protagoniste central", desc: "Pris au piège d'un conflit qui dépasse les frontières de son monde et de sa propre écriture." },
            { name: "Ituiis (Matricule IT-86)", role: "Soldate Impériale", desc: "Combattante d'élite marquée par la rigueur militaire de l'Empire et les fractures du front." },
            { name: "Alton", role: "Scientifique", desc: "Confronté au dilemme ultime : jusqu'où peut-on tordre les lois scientifiques et morales par amour ?" },
            { name: "Brulius (Matricule BR-57)", role: "Soldat de l'Empire", desc: "Vétéran enregistré sous le code BR-57 dans les registres d'opérations impériales." }
        ]
    },

    vip: {
        promptText: "Accès restreint. Veuillez entrer votre code d'accréditation ou votre matricule impérial (Format : XX-XXXX).",
        hintText: "Indice : Le code se trouve au dos de votre ticket « Admit One » (Codes de démonstration actifs : BR-5701, IT-8642, TU-2026).",
        allowedHashes: ["NI-0404"],
        secretArchives: {
            dossiers: [
                { code: "DOSSIER BR-57", title: "Rapport d'opération — Brulius", content: "Statut : Actif. Affectation : Front extérieur. Observation psychologique : Loyauté élevée mais lucidité anormale face aux anomalies narratives." },
                { code: "DOSSIER IT-86", title: "Fiche Tactique — Ituiis", content: "Matricule individuel IT-86 (distinct des unités standards d'Infanterie Tactique). Spécialisation : Combat rapproché et survie en zone altérée." }
            ],
            animatorDesk: {
                title: "Le Bureau de Numanne (Making-of 2D)",
                details: "Pipeline d'animation : Storyboard -> Layout -> Keyframes (Genga) -> In-betweens (Douga) à 12-18 images/seconde, 100% dessiné à la main sans interpolation IA.",
                previewImg: "assets/images/croquis-numanne.jpg"
            },
            altonReports: {
                title: "Journal de Laboratoire d'Alton — Entrée #04",
                details: "« Les constantes physiques ne cèdent pas sans réclamer un tribut. Si je franchis le seuil ce soir, le monde paiera l'addition, mais elle respirera à nouveau. »"
            },
            wallpapers: [
                { title: "Couverture Officielle & Ticket (HD)", file: "assets/images/livre-ticket.jpg" },
                { title: "Logo Vectoriel Ultimate Fight", file: "assets/images/logo-inline.png" }
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
                tag: "ROMAN (206 PAGES)",
                desc: "Édition physique (tranche 20,5 mm), couverture et illustrations par Atelier Hibiki. Frais de port inclus.",
                price: 21.00,
                isAvailable: true,
                paymentLink: "https://buy.stripe.com/8x24gy0wI6sJ5mk79x8Vi02",
                img: "assets/images/livre-ticket.jpg"
            },
            {
                id: "tuf-pack-ultime",
                name: "Pack Ultime (Livre + Goodies + Code VIP)",
                tag: "OFFRE SALON",
                desc: "Tome 1 dédicacé + Marque-page Ticket « Admit One » + Porte-clés acrylique + Tapis de souris.",
                price: 34.00,
                isAvailable: false, 
                paymentLink: "https://buy.stripe.com/7sYcN4cfqg3j6qogK78Vi01",
                img: "assets/images/goodies-pack.jpg"
            }
        ]
    }
};