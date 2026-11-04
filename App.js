let hodnota = 0;

const hodnotaEl = document.getElementById('hodnota');
const btnMinus = document.getElementById('btnMinus');
const limitText = document.getElementById('limitText');

function aktualizujUI() {
    // 1. Zobrazenie aktuálnej hodnoty
    hodnotaEl.textContent = hodnota;

    // 4. Ak je hodnota 5 a viac, číslo sčervenie a zobrazí sa text limitu
    if (hodnota >= 5) {
        hodnotaEl.classList.add('red');
        limitText.style.display = 'block';
    } else {
        hodnotaEl.classList.remove('red');
        limitText.style.display = 'none';
    }

    // 5. Ak je hodnota 0, tlačidlo - je neaktívne (disabled)
    if (hodnota === 0) {
        btnMinus.disabled = true;
        btnMinus.style.opacity = 0.5;
    } else {
        btnMinus.disabled = false;
        btnMinus.style.opacity = 1;
    }
}

function zmenHodnotu(cislo) {
    // 2. Podmienka, aby hodnota nikdy nešla pod 0
    if (hodnota + cislo >= 0) {
        hodnota += cislo;
        aktualizujUI();
    }
}

function vynuluj() {
    // 3. Tlačidlo vynulovať
    hodnota = 0;
    aktualizujUI();
}

// Inicializácia pri štarte
aktualizujUI();

