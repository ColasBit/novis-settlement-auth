/**
 * RESPONSABILITÉ 1 : Validation de format et vérification par hachage des codes VIP.
 */
class SecurityService {
    static CODE_REGEX = /^[A-Z]{2}-\d{4}$/;
    static SALT = "TUF_IMPERIAL_SALT_2026";

    static isValidFormat(input) {
        return this.CODE_REGEX.test(input.trim().toUpperCase());
    }

    /**
     * Fonction de hachage déterministe 32-bit (FNV-1a salé)
     * Avantage : fonctionne même en local (file://) où WebCrypto (crypto.subtle) est désactivé par le navigateur.
     */
    static computeHash(input) {
        const str = `${this.SALT}:${input.trim().toUpperCase()}`;
        let hash = 0x811c9dc5;
        for (let i = 0; i < str.length; i++) {
            hash ^= str.charCodeAt(i);
            hash = Math.imul(hash, 0x01000193);
        }
        return (hash >>> 0).toString(16).padStart(8, '0');
    }

    static verifyCode(input, allowedHashes) {
        if (!this.isValidFormat(input)) {
            return { valid: false, reason: "Format invalide. Attendu : 2 lettres, tiret, 4 chiffres (ex: BR-5701)." };
        }
        const hashedInput = this.computeHash(input);
        const isMatch = allowedHashes.includes(hashedInput);
        return {
            valid: isMatch,
            reason: isMatch ? null : "Accréditation refusée : Matricule inconnu des registres impériaux."
        };
    }
}

// Pré-calcul dynamique des hashes autorisés au chargement pour garantir la correspondance
TUF_DATA.vip.allowedHashes = [
    SecurityService.computeHash("AL-0591"),
    SecurityService.computeHash("MA-5601"),
    SecurityService.computeHash("AL-1123"),
    SecurityService.computeHash("ST-6382"),
    SecurityService.computeHash("HE-7719"),
    SecurityService.computeHash("RO-0473")

];

/**
 * RESPONSABILITÉ 2 : Animation de décryptage aléatoire (1 à 9999) sur <canvas>.
 */
class DecryptCanvasService {
    static runDecryption(canvasElement, onComplete) {
        if (!canvasElement) return;
        const ctx = canvasElement.getContext('2d');
        const width = canvasElement.width;
        const height = canvasElement.height;
        const duration = 1100; // 1.1 seconde d'animation
        const startTime = performance.now();

        function renderFrame(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Nettoyage
            ctx.fillStyle = '#070a0e';
            ctx.fillRect(0, 0, width, height);

            // Grille décorative cyberpunk
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.1)';
            ctx.beginPath();
            ctx.moveTo(0, height / 2);
            ctx.lineTo(width, height / 2);
            ctx.stroke();

            // Tirage d'un nombre aléatoire entre 1 et 9999
            const randomNum = Math.floor(Math.random() * 9999) + 1;
            const formattedNum = String(randomNum).padStart(4, '0');

            // Affichage du statut
            ctx.font = '700 12px "JetBrains Mono", monospace';
            ctx.fillStyle = progress < 1 ? '#ff4500' : '#00ff66';
            ctx.textAlign = 'center';
            ctx.fillText(
                progress < 1 ? 'DÉCRYPTAGE DU SÉQUENÇAGE IMPÉRIAL...' : 'SÉQUENCE VALIDÉE — ARCHIVES DÉVERROUILLÉES',
                width / 2,
                32
            );

            // Barre de progression
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.fillRect(40, 105, width - 80, 6);
            ctx.fillStyle = progress < 1 ? '#ff4500' : '#00ff66';
            ctx.fillRect(40, 105, (width - 80) * progress, 6);

            if (progress < 1) {
                requestAnimationFrame(renderFrame);
            } else if (typeof onComplete === 'function') {
                onComplete(formattedNum);
            }
        }

        requestAnimationFrame(renderFrame);
    }
}