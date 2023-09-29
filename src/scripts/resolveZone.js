const $ = selector => document.querySelector(selector);

const $isPrimo = $('#siPrimo')
const $mcd = $('#mcd')
const $totient = $('#totient')
const $combLineal = $('#combLineal')
const $rEqModulares = $('#rEqModulares')
const $resolveZone = $('#resolveZone')

$isPrimo.addEventListener('click', () => {
    // Crear un formulario dentro del div "resolveZone"
    $resolveZone.innerHTML = `
        <form id="primoForm">
            <label for="numero">Ingresa un número entero positivo:</label>
            <input type="number" id="numero" name="numero" required>
            <button class="button" type="submit">Verificar</button>
        </form>
    `;

    // Agregar un manejador de eventos para el formulario
    const primoForm = document.getElementById('primoForm');
    primoForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que se recargue la página
        const numero = parseInt(document.getElementById('numero').value);

        if (Number.isInteger(numero) && numero > 0) {
            // Verificar si el número es primo y mostrar el resultado
            if (isPrimo(numero)) {
                $resolveZone.innerHTML = `${numero} es un número primo.`;
            } else {
                $resolveZone.innerHTML = `${numero} no es un número primo.
                                            <button class="button" id="verFact">Ver factorizacion</button>   
                                        `;

                // Agregar un manejador de eventos para el botón "verFact"
                const $verFact = $('#verFact');
                $verFact.addEventListener('click', () => {
                    let factores = factPrimOf(numero);
                    $resolveZone.innerHTML = `${numero} = ${factores.join(' x ')}`;
                });
            }
        } else {
            $resolveZone.innerHTML = 'Ingresa un número entero positivo válido.';
        }
    });
});

$mcd.addEventListener('click', () => {
    // Crear un formulario dentro del div "resolveZone"
    $resolveZone.innerHTML = `
        <form id="mcdForm">
            <label for="numero1">Ingresa el primer número:</label>
            <input type="number" id="numero1" name="numero1" required>
            <label for="numero2">Ingresa el segundo número:</label>
            <input type="number" id="numero2" name="numero2" required>
            <button class="button" type="submit">Calcular</button>
        </form>
    `;

    // Agregar un manejador de eventos para el formulario
    const mcdForm = document.getElementById('mcdForm');
    mcdForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que se recargue la página
        const numero1 = parseInt(document.getElementById('numero1').value);
        const numero2 = parseInt(document.getElementById('numero2').value);

        if (Number.isInteger(numero1) && Number.isInteger(numero2) && numero1 > 0 && numero2 > 0) {
            // Calcular el MCD y mostrar el resultado
            let mcd = calcMCD(numero1, numero2);
            $resolveZone.innerHTML = `El MCD de ${numero1} y ${numero2} es ${mcd}.`;
        } else {
            $resolveZone.innerHTML = 'Ingresa dos números enteros positivos válidos.';
        }
    });
});

$totient.addEventListener('click', () => {
    // Crear un formulario dentro del div "resolveZone"
    $resolveZone.innerHTML = `
        <form id="totientForm">
            <label for="numero">Ingresa un número entero positivo:</label>
            <input type="number" id="numero" name="numero" required>
            <button class="button" type="submit">Calcular</button>
        </form>
    `;

    // Agregar un manejador de eventos para el formulario
    const totientForm = document.getElementById('totientForm');
    totientForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que se recargue la página
        const numero = parseInt(document.getElementById('numero').value);

        if (Number.isInteger(numero) && numero > 0) {
            // Calcular el totient y mostrar el resultado
            let totient = calcTotient(numero);
            $resolveZone.innerHTML = `El totient de ${numero} es ${totient}.`;
        } else {
            $resolveZone.innerHTML = 'Ingresa un número entero positivo válido.';
        }
    });
});

$combLineal.addEventListener('click', () => {
    // Crear un formulario dentro del div "resolveZone"
    $resolveZone.innerHTML = `
        <form id="combLinealForm">
            <label for="numero1">Ingresa el primer número:</label>
            <input type="number" id="numero1" name="numero1" required>
            <label for="numero2">Ingresa el segundo número:</label>
            <input type="number" id="numero2" name="numero2" required>
            <button class="button" type="submit">Calcular</button>
        </form>
    `;

    // Agregar un manejador de eventos para el formulario
    const combLinealForm = document.getElementById('combLinealForm');
    combLinealForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que se recargue la página
        const numero1 = parseInt(document.getElementById('numero1').value);
        const numero2 = parseInt(document.getElementById('numero2').value);

        if (Number.isInteger(numero1) && Number.isInteger(numero2) && numero1 > 0 && numero2 > 0) {
            // Calcular el MCD y mostrar el resultado
            let combLineal = calcCombLineal(numero1, numero2);
            console.log(combLineal);
            let a = combLineal[0];
            let b = combLineal[1];
            //let gcd = combLineal[2];

            $resolveZone.innerHTML = `El combLineal de ${numero1} y ${numero2} es Combinación lineal: ${b} (${numero2}) + (${a}) (${numero1})`;
        } else {
            $resolveZone.innerHTML = 'Ingresa dos números enteros positivos válidos.';
        }
    });
});

$rEqModulares.addEventListener('click', () => {


    // Crear un formulario dentro del div "resolveZone"
    $resolveZone.innerHTML = `
        <h4>Aun no funciona</h4>
        <form id="rEqModularesForm">
            <input type="number" id="numero1" name="numero1" required>
            <label for="numero1">X</label>
            <label for="numero2">≡</label>
            <input type="number" id="numero2" name="numero2" required>
            <label for="numero3">(MOD </label>
            <input type="number" id="numero3" name="numero3" required>
            <label for="numero3"> )</label>
            <br/>
            <input type="number" id="numero4" name="numero1" required>
            <label for="numero1">X</label>
            <label for="numero2">≡</label>
            <input type="number" id="numero5" name="numero2" required>
            <label for="numero3">(MOD </label>
            <input type="number" id="numero6" name="numero3" required>
            <label for="numero3"> )</label>
            <br/>
            <input type="number" id="numero7" name="numero1" required>
            <label for="numero1">X</label>
            <label for="numero2">≡</label>
            <input type="number" id="numero8" name="numero2" required>
            <label for="numero3">(MOD </label>
            <input type="number" id="numero9" name="numero3" required>
            <label for="numero3"> )</label>
            <button class="button" type="submit">Calcular</button>
        </form>
        <button class="button" type="add">Add</button>
    `;

    /*
    // Agregar un manejador de eventos para el botón "add"
    const $add = $('add');
    $add.addEventListener('click', () => {
        $resolveZone.innerHTML += `
            <input type="number" id="numero" name="numero1" required>
            <label for="numero1">X</label>
            <label for="numero2">≡</label>
            <input type="number" id="numero2" name="numero2" required>
            <label for="numero3">(MOD </label>
            <input type="number" id="numero3" name="numero3" required>
            <label for="numero3"> )</label>
        `;
    }); `*/

    // Agregar un manejador de eventos para el formulario
    const rEqModularesForm = document.getElementById('rEqModularesForm');
    rEqModularesForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que se recargue la página
        const numero1 = parseInt(document.getElementById('numero1').value);
        const numero2 = parseInt(document.getElementById('numero2').value);
        const numero3 = parseInt(document.getElementById('numero3').value);

        if (Number.isInteger(numero1) && Number.isInteger(numero2) && Number.isInteger(numero3) && numero1 > 0 && numero2 > 0 && numero3 > 0) {
            // Calcular el MCD y mostrar el resultado
            let rEqModulares = calcREqModulares(numero1, numero2, numero3);
            $resolveZone.innerHTML = `El rEqModulares de ${numero1}, ${numero2} y ${numero3} es ${rEqModulares}.`;
        } else {
            $resolveZone.innerHTML = 'Ingresa tres números enteros positivos válidos.';
        }
    });
});

function calcCombLineal(numero1, numero2) {
    if (numero2 === 0) {
        const result = [1, 0, numero1];
        return result;
    } else {
        const temp = calcCombLineal(numero2, numero1 % numero2);
        const x = temp[0];
        const y = temp[1];
        const gcd = temp[2];

        const newX = y;
        const newY = x - Math.floor(numero1 / numero2) * y;

        const result = [newX, newY, gcd];
        return result;
    }
}

function calcTotient(numero) {
    let totient = 1;
    let factores = factPrimOf(numero);

    for (let i = 0; i < factores.length; i++) {
        let factor = factores[i];
        totient *= (factor - 1);
    }

    return totient;
}

function calcMCD(numero1, numero2) {
    let mcd = 1;
    let factores1 = factPrimOf(numero1);
    let factores2 = factPrimOf(numero2);

    for (let i = 0; i < factores1.length; i++) {
        let factor = factores1[i];
        if (factores2.includes(factor)) {
            mcd *= factor;
            factores2.splice(factores2.indexOf(factor), 1);
        }
    }

    return mcd;
}

function factPrimOf(numero) {
    let factores = [];
    let n = numero;
    let i = 2;
    while (n > 1) {
        if (n % i === 0) {
            factores.push(i);
            n /= i;
        } else {
            i++;
        }
    }

    return factores;
}

function isPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    
    if (numero % 2 === 0 || numero % 3 === 0) return false;

    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}