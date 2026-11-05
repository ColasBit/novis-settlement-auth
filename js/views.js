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
        const videoHtml = data.videoSection ? `
            <div class="video-container">
                <video 
                    class="teaser-video" 
                    controls 
                    preload="metadata" 
                    poster="${data.videoSection.posterImg || ''}"
                >
                    <source src="${data.videoSection.videoSrc}" type="video/mp4">
                    Votre navigateur ne supporte pas la lecture vidéo HTML5.
                </video>
            </div>
            ${data.videoSection.badge ? `<span class="badge">${data.videoSection.badge}</span>` : ''}
            ${data.videoSection.title ? `<h3>${data.videoSection.title}</h3>` : ''}
            ${data.videoSection.desc ? `<p style="margin-bottom: 0;">${data.videoSection.desc}</p>` : ''}
        ` : '';

        const sectionsHtml = (data.sections && data.sections.length > 0) ? data.sections.map(section => {
            if (!section.items || section.items.length === 0) return '';

            const itemsHtml = section.items.map(item => {
                if (item.img) {
                    return `
                        <article class="media-card">
                            <img src="${item.img}" alt="${item.title || ''}" class="media-card-img">
                            <div class="media-card-body">
                                <div>
                                    ${item.tag ? `<span class="badge badge-cyan">${item.tag}</span>` : ''}
                                    ${item.title ? `<h3>${item.title}</h3>` : ''}
                                    ${item.desc ? `<p>${item.desc}</p>` : ''}
                                </div>
                            </div>
                        </article>
                    `;
                } else {
                    return `
                        <div class="card">
                            ${item.tag ? `<span class="badge">${item.tag}</span>` : ''}
                            ${item.title ? `<h3>${item.title}</h3>` : ''}
                            ${item.desc ? `<p>${item.desc}</p>` : ''}
                        </div>
                    `;
                }
            }).join('');

            return `
                <section style="margin-bottom: 2rem;">
                    ${section.title ? `<h2>${section.title}</h2>` : ''}
                    <div class="${section.grid || 'grid-2'}">
                        ${itemsHtml}
                    </div>
                </section>
            `;
        }).join('') : '';

        return `
            <section class="hero-box">
                ${data.badge ? `<span class="badge">${data.badge}</span>` : ''}
                ${data.mainTitle ? `<h2>${data.mainTitle}</h2>` : ''}
                ${data.intro ? `<p>${data.intro}</p>` : ''}
                ${videoHtml}
            </section>

            ${sectionsHtml}
        `;
    },

    lore(data) {
        const sectionsHtml = (data.sections && data.sections.length > 0) ? data.sections.map(section => {
            if (!section.items || section.items.length === 0) return '';

            const itemsHtml = section.items.map(item => `
                <div class="card">
                    ${item.role ? `<span class="badge badge-cyan">${item.role}</span>` : ''}
                    ${item.name ? `<h3>${item.name}</h3>` : ''}
                    ${item.desc ? `<p>${item.desc}</p>` : ''}
                </div>
            `).join('');

            return `
                <section style="margin-bottom: 2rem;">
                    ${section.title ? `<h2>${section.title}</h2>` : ''}
                    <div class="${section.grid || 'grid-2'}">
                        ${itemsHtml}
                    </div>
                </section>
            `;
        }).join('') : '';

        return `
            <section class="hero-box">
                ${data.badge ? `<span class="badge badge-cyan">${data.badge}</span>` : ''}
                ${data.title ? `<h2>${data.title}</h2>` : ''}
                ${data.matriculeRule ? `<p style="color: var(--text-main); font-family: var(--font-mono); font-size: 0.9rem;">${data.matriculeRule}</p>` : ''}
            </section>
            ${sectionsHtml}
        `;
    },

    vip(data, state) {
        if (!state.vipUnlocked) {
            return `
                <section class="terminal-window">
                    <p class="terminal-prompt">> TERMINAL IMPÉRIAL TUF-OS v2.6</p>
                    ${data.promptText ? `<p class="terminal-prompt">> ${data.promptText}</p>` : ''}
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
                    ${state.authError ? `<p style="color: var(--tuf-red); margin-top: 1rem;">[ERREUR] ${state.authError}</p>` : ''}
                    ${data.hintText ? `<p style="margin-top: 1.25rem; font-size: 0.8rem; color: var(--text-muted);">${data.hintText}</p>` : ''}
                </section>
            `;
        }

        const archives = data.secretArchives || {};

        const sectionsHtml = (archives.sections && archives.sections.length > 0) ? archives.sections.map(section => {
            if (!section.items || section.items.length === 0) return '';

            const itemsHtml = section.items.map(item => `
                <div class="card" style="${item.code ? 'border-color: var(--terminal-green);' : ''}">
                    ${item.code ? `<span class="badge" style="color: var(--terminal-green); border-color: var(--terminal-green); background: rgba(0,255,102,0.1);">${item.code}</span>` : ''}
                    ${item.badge ? `<span class="badge badge-cyan">${item.badge}</span>` : ''}
                    ${item.title ? `<h3>${item.title}</h3>` : ''}
                    ${item.content ? `<p>${item.content}</p>` : ''}
                    ${item.details ? `<p>${item.details}</p>` : ''}
                    ${item.wallpapers && item.wallpapers.length > 0 ? `
                        <div style="margin-top: 1rem;">
                            <strong style="color: var(--text-main); font-size: 0.85rem; display: block;">Fonds d'écran & Visuels HD :</strong>
                            ${item.wallpapers.map(w => `
                                <a href="${w.file || '#'}" download class="nav-btn" style="text-decoration: none; display: inline-block; margin-right: 0.5rem; margin-top: 0.5rem;">
                                    ⬇ Télécharger : ${w.title || 'Visuel'}
                                </a>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            `).join('');

            return `
                <section style="margin-bottom: 1.5rem;">
                    ${section.title ? `<h2>${section.title}</h2>` : ''}
                    <div class="${section.grid || 'grid-2'}">
                        ${itemsHtml}
                    </div>
                </section>
            `;
        }).join('') : '';

        return `
            <section class="terminal-window">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                    <p class="terminal-prompt">> ACCRÉDITATION CONFIRMÉE : [${state.unlockedCode || ''}]</p>
                    <button id="vip-logout-btn" class="nav-btn">Verrouiller le terminal</button>
                </div>

                <div class="canvas-box">
                    <canvas id="decrypt-canvas" width="520" height="130"></canvas>
                </div>
            </section>

            ${sectionsHtml}
        `;
    },

    shop(data) {
        const productsHtml = (data.products && data.products.length > 0) ? data.products.map(prod => `
            <article class="media-card" style="${!prod.isAvailable ? 'opacity: 0.7;' : ''}">
                ${prod.img ? `<img src="${prod.img}" alt="${prod.name || ''}" class="media-card-img">` : ''}
                <div class="media-card-body">
                    <div>
                        ${prod.tag ? `<span class="badge">${prod.tag}</span>` : ''}
                        ${prod.name ? `<h3>${prod.name}</h3>` : ''}
                        ${prod.desc ? `<p>${prod.desc}</p>` : ''}
                    </div>
                    <div style="margin-top: 1rem; border-top: 1px solid var(--border-light); padding-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                        ${prod.price !== undefined ? `<strong style="font-size: 1.25rem; color: var(--text-main); font-family: var(--font-mono);">${prod.price.toFixed(2)} €</strong>` : ''}
                        
                        ${prod.isAvailable ? `
                            <a href="${prod.paymentLink || '#'}" target="_blank" class="cta-btn" style="padding: 0.5rem 1rem; font-size: 0.85rem; text-decoration: none;">
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
        `).join('') : '';

        return `
            <section class="hero-box">
                ${data.badge ? `<span class="badge">${data.badge}</span>` : ''}
                ${data.title ? `<h2>${data.title}</h2>` : ''}
                <p>Paiement 100% sécurisé via Stripe • Expédition sous enveloppe bulle via Colissimo ou remise en main propre dans l'Hérault (Mèze, Frontignan, Montpellier).</p>
            </section>

            ${productsHtml ? `
                <div style="max-width: 900px; margin: 0 auto;">
                    <div class="grid-2">
                        ${productsHtml}
                    </div>
                </div>
            ` : ''}
        `;
    }
};