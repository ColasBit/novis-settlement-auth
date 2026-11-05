const Views = {
    home(data) {
        const eventsHtml = data.events.map(ev => `
            <div class="card">
                <span class="badge badge-cyan">${ev.city}</span>
                <h3>${ev.name}</h3>
                <p>${ev.info}</p>
            </div>
        `).join('');

        return `
            <section class="hero-box">
                <span class="badge">${data.badge}</span>
                <div class="hero-dilemma">${data.dilemma}</div>
                <p>${data.synopsis}</p>
                
                <div class="grid-2" style="margin-top: 2rem; align-items: center;">
                    <div>
                        <h2>${data.bookSpecs.title}</h2>
                        <p>${data.bookSpecs.details}</p>
                        <p><strong>${data.bookSpecs.illustrator}</strong></p>
                        <p style="color: #fff; margin: 1rem 0;">
                            • ${data.bookSpecs.priceSolo}<br>
                            • ${data.bookSpecs.pricePack}
                        </p>
                        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                            <button class="cta-btn" data-nav="shop">Commander en ligne</button>
                            <button class="nav-btn" data-scroll-events="true">Voir les salons (Hérault)</button>
                        </div>
                    </div>

                    <!-- Photo du Livre avec le Ticket Admit One qui dépasse -->
                    <div class="card book-showcase" style="border-color: rgba(255,69,0,0.4); margin-bottom: 0;">
                        <img 
                            src="${data.bookSpecs.coverImage}" 
                            alt="${data.bookSpecs.coverAlt}" 
                            class="book-showcase-img"
                        >
                        <button class="nav-btn nav-vip" data-nav="vip">
                            J'ai un code Ticket « Admit One » →
                        </button>
                    </div>
                </div>
            </section>

            <section id="events-section">
                <h2>Prochaines Dédicaces & Salons (Hérault)</h2>
                <div class="grid-3">${eventsHtml}</div>
            </section>
        `;
    },

    manifesto(data) {
        const pillarsHtml = data.pillars.map(p => `
            <div class="card">
                <span class="badge">${p.tag}</span>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            </div>
        `).join('');

        const goodiesHtml = data.goodiesGallery.map(g => `
            <article class="media-card">
                <img src="${g.img}" alt="${g.title}" class="media-card-img">
                <div class="media-card-body">
                    <div>
                        <span class="badge badge-cyan">${g.tag}</span>
                        <h3>${g.title}</h3>
                        <p>${g.desc}</p>
                    </div>
                </div>
            </article>
        `).join('');

        return `
            <section class="hero-box">
                <span class="badge">${data.badge}</span>
                <h2>${data.title}</h2>
                <p>${data.intro}</p>

                <!-- Lecteur Vidéo pour le Teaser de Numanne -->
                <div class="video-container">
                    <video 
                        class="teaser-video" 
                        controls 
                        preload="metadata" 
                        poster="${data.videoSection.posterImg}"
                    >
                        <source src="${data.videoSection.videoSrc}" type="video/mp4">
                        Votre navigateur ne supporte pas la lecture vidéo HTML5.
                    </video>
                </div>
                <span class="badge">${data.videoSection.badge}</span>
                <h3>${data.videoSection.title}</h3>
                <p style="margin-bottom: 0;">${data.videoSection.desc}</p>
            </section>

            <section class="grid-2" style="margin-bottom: 1.5rem;">
                ${pillarsHtml}
            </section>

            <section>
                <h2>Le Merchandising & l'Objet Livre (Création Inkscape & Scribus)</h2>
                <div class="grid-3">
                    ${goodiesHtml}
                </div>
            </section>
        `;
    },

    lore(data) {
        const charsHtml = data.characters.map(c => `
            <div class="card">
                <span class="badge badge-cyan">${c.role}</span>
                <h3>${c.name}</h3>
                <p>${c.desc}</p>
            </div>
        `).join('');

        return `
            <section class="hero-box">
                <span class="badge badge-cyan">${data.badge}</span>
                <h2>${data.title}</h2>
                <p style="color: #fff; font-family: var(--font-mono); font-size: 0.9rem;">${data.matriculeRule}</p>
            </section>
            <section class="grid-2">
                ${charsHtml}
            </section>
        `;
    },

    vip(data, state) {
        if (!state.vipUnlocked) {
            return `
                <section class="terminal-window">
                    <p class="terminal-prompt">> TERMINAL IMPÉRIAL TUF-OS v2.6</p>
                    <p class="terminal-prompt">> ${data.promptText}</p>
                    <form id="vip-form" class="terminal-form">
                        <input
                            type="text"
                            id="vip-code-input"
                            class="terminal-input"
                            placeholder="XX-XXXX"
                            maxlength="7"
                            autocomplete="off"
                            required
                        />
                        <button type="submit" class="terminal-btn">DÉCRYPTER</button>
                    </form>
                    ${state.authError ? `<p style="color: #ff4500; margin-top: 1rem;">[ERREUR] ${state.authError}</p>` : ''}
                    <p style="margin-top: 1.25rem; font-size: 0.8rem; color: #64748b;">${data.hintText}</p>
                </section>
            `;
        }

        const dossiersHtml = data.secretArchives.dossiers.map(d => `
            <div class="card" style="border-color: var(--terminal-green);">
                <span class="badge" style="color: var(--terminal-green); border-color: var(--terminal-green); background: rgba(0,255,102,0.1);">${d.code}</span>
                <h3>${d.title}</h3>
                <p>${d.content}</p>
            </div>
        `).join('');

        const wallpapersHtml = data.secretArchives.wallpapers.map(w => `
            <a href="${w.file}" download class="nav-btn" style="text-decoration: none; display: inline-block; margin-right: 0.5rem; margin-top: 0.5rem;">
                ⬇ Télécharger : ${w.title}
            </a>
        `).join('');

        return `
            <section class="terminal-window">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                    <p class="terminal-prompt">> ACCRÉDITATION CONFIRMÉE : [${state.unlockedCode}]</p>
                    <button id="vip-logout-btn" class="nav-btn">Verrouiller le terminal</button>
                </div>

                <div class="canvas-box">
                    <canvas id="decrypt-canvas" width="520" height="130"></canvas>
                    <div style="margin-top: 0.5rem;">
                        <button id="reroll-canvas-btn" class="nav-btn">Relancer un tirage aléatoire (1-9999)</button>
                    </div>
                </div>
            </section>

            <section style="margin-top: 1.5rem;">
                <h2>Dossiers Classifiés & Bonus Numériques</h2>
                <div class="grid-2">
                    ${dossiersHtml}
                    <div class="card">
                        <span class="badge badge-cyan">ANIMATION 2D</span>
                        <h3>${data.secretArchives.animatorDesk.title}</h3>
                        <p>${data.secretArchives.animatorDesk.details}</p>
                    </div>
                    <div class="card">
                        <span class="badge">LABORATOIRE D'ALTON</span>
                        <h3>${data.secretArchives.altonReports.title}</h3>
                        <p>${data.secretArchives.altonReports.details}</p>
                        <div style="margin-top: 1rem;">
                            <strong style="color: #fff; font-size: 0.85rem; display: block;">Fonds d'écran & Visuels HD :</strong>
                            ${wallpapersHtml}
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    shop(data, state) {
        const productsHtml = data.products.map(prod => `
            <article class="media-card" style="${!prod.isAvailable ? 'opacity: 0.7;' : ''}">
                <img src="${prod.img}" alt="${prod.name}" class="media-card-img">
                <div class="media-card-body">
                    <div>
                        <span class="badge">${prod.tag}</span>
                        <h3>${prod.name}</h3>
                        <p>${prod.desc}</p>
                    </div>
                    <div style="margin-top: 1rem; border-top: 1px solid var(--border-light); padding-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                        <strong style="font-size: 1.25rem; color: var(--text-main); font-family: var(--font-mono);">${prod.price.toFixed(2)} €</strong>
                        
                        ${prod.isAvailable ? `
                            <a href="${prod.paymentLink}" target="_blank" class="cta-btn" style="padding: 0.5rem 1rem; font-size: 0.85rem; text-decoration: none;">
                                Acheter →
                            </a>
                        ` : `
                            <span class="badge" style="background: rgba(172,0,0,0.15); color: var(--tuf-red); border-color: var(--tuf-red); margin-bottom: 0; padding: 0.5rem 1rem;">
                                ÉPUISÉ
                            </span>
                        `}
                    </div>
                </div>
            </article>
        `).join('');

        return `
            <section class="hero-box">
                <span class="badge">${data.badge}</span>
                <h2>${data.title}</h2>
                <p>Paiement 100% sécurisé via Stripe • Expédition sous enveloppe bulle via Colissimo ou remise en main propre dans l'Hérault (Mèze, Frontignan, Montpellier).</p>
            </section>

            <div style="max-width: 900px; margin: 0 auto;">
                <div class="grid-2">
                    ${productsHtml}
                </div>
            </div>
        `;
    }
};