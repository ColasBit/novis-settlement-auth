/**
 * RESPONSABILITÉ : Gérer l'état global de l'application via le Pattern Observer.
 */
class AppStore {
    constructor(initialState) {
        this.state = initialState;
        this.observers = [];
    }

    /**
     * Abonne un observateur (fonction) aux changements d'état
     */
    subscribe(observerFn) {
        this.observers.push(observerFn);
    }

    /**
     * Notifie tous les observateurs enregistrés
     */
    notify() {
        this.observers.forEach(observerFn => observerFn(this.state));
    }

    /**
     * Met à jour l'état et déclenche la notification
     */
    setState(partialState) {
        this.state = { ...this.state, ...partialState };
        this.notify();
    }

    getState() {
        return this.state;
    }
}

// Instance unique (Singleton) de l'état de l'application
const store = new AppStore({
    currentPage: 'home',
    vipUnlocked: false,
    unlockedCode: null,
    authError: null,
    cart :[]
});