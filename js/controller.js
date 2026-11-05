/**
 * RESPONSABILITÉ : Coordonner les événements utilisateur, interroger les Services et mettre à jour le Store.
 */
class AppController {
    constructor(store, views, data) {
        this.store = store;
        this.views = views;
        this.data = data;

        this.appContainer = document.getElementById('app-view');
        this.navButtons = document.querySelectorAll('#main-nav .nav-btn');

        // Abonnement de la méthode render() au Store (Pattern Observer)
        this.store.subscribe((state) => this.render(state));

        // Initialisation des écouteurs d'événements globaux (Délégation)
        this.bindEvents();

        // Premier rendu initial
        this.render(this.store.getState());
    }

    bindEvents() {
        // Délégation des clics (Navigation, Scroll, Boutons VIP)
        document.addEventListener('click', (e) => {
            const navTarget = e.target.closest('[data-nav]');
            if (navTarget) {
                const targetPage = navTarget.getAttribute('data-nav');
                this.store.setState({ currentPage: targetPage, authError: null });
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            if (e.target.matches('[data-scroll-events]')) {
                const section = document.getElementById('events-section');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
                return;
            }

            if (e.target.matches('#vip-logout-btn')) {
                this.store.setState({ vipUnlocked: false, unlockedCode: null, authError: null });
                return;
            }

            if (e.target.matches('#reroll-canvas-btn')) {
                const canvas = document.getElementById('decrypt-canvas');
                DecryptCanvasService.runDecryption(canvas);
            }

            const addBtn = e.target.closest('[data-add-cart]');
            if (addBtn) {
                const prodId = addBtn.getAttribute('data-add-cart');
                const product = this.data.shop.products.find(p => p.id === prodId);
                if (!product) return;

                const currentCart = [...this.store.getState().cart];
                const existingItem = currentCart.find(item => item.id === prodId);

                if (existingItem) {
                    existingItem.qty += 1;
                } else {
                    currentCart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
                }
                this.store.setState({ cart: currentCart });
                return;
            }

            const removeBtn = e.target.closest('[data-remove-cart]');
            if (removeBtn) {
                const prodId = removeBtn.getAttribute('data-remove-cart');
                const updatedCart = this.store.getState().cart.filter(item => item.id !== prodId);
                this.store.setState({ cart: updatedCart });
                return;
            }

            if (e.target.matches('#checkout-btn')) {
                const { cart } = this.store.getState();
                const { shippingFlatRate, contactOrderEmail } = this.data.shop;
                const subTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
                const total = (subTotal + shippingFlatRate).toFixed(2);

                const lines = cart.map(i => `- ${i.qty}x ${i.name} (${(i.price * i.qty).toFixed(2)} €)`).join('\n');
                const subject = encodeURIComponent(`Commande The Ultimate Fight (${total} €)`);
                const body = encodeURIComponent(
                    `Bonjour Nicolas,\n\nJe souhaite commander les articles suivants :\n${lines}\n\nFrais de port Colissimo : ${shippingFlatRate.toFixed(2)} €\nTOTAL : ${total} €\n\nMes coordonnées de livraison :\n- Nom / Prénom :\n- Adresse postale complète :\n- Dédicace souhaitée (Prénom) :\n`
                );

                window.location.href = `mailto:${contactOrderEmail}?subject=${subject}&body=${body}`;
            }
        });

        // Délégation de la soumission du formulaire Terminal VIP
        document.addEventListener('submit', (e) => {
            if (e.target.matches('#vip-form')) {
                e.preventDefault();
                const inputEl = document.getElementById('vip-code-input');
                const code = inputEl ? inputEl.value.trim().toUpperCase() : '';

                const verification = SecurityService.verifyCode(code, this.data.vip.allowedHashes);
                if (verification.valid) {
                    this.store.setState({
                        vipUnlocked: true,
                        unlockedCode: code,
                        authError: null
                    });
                } else {
                    this.store.setState({ authError: verification.reason });
                }
            }
        });
    }

    render(state) {
        // 1. Mise à jour de l'état actif dans la barre de navigation
        this.navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-nav') === state.currentPage);
        });

        // 2. Rendu dynamique de la vue courante
        const currentPage = state.currentPage;
        if (this.views[currentPage]) {
            this.appContainer.innerHTML = this.views[currentPage](this.data[currentPage], state);
        }

        // 3. Si la zone VIP vient d'être déverrouillée, lancement du décryptage sur <canvas>
        if (currentPage === 'vip' && state.vipUnlocked) {
            const canvas = document.getElementById('decrypt-canvas');
            DecryptCanvasService.runDecryption(canvas);
        }
    }
}

// Démarrage de l'application une fois le DOM prêt
document.addEventListener('DOMContentLoaded', () => {
    new AppController(store, Views, TUF_DATA);
});