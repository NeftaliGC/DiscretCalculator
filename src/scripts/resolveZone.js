const $ = selector => document.querySelector(selector);
const $isPrimo = $('#siPrimo')
const $mcd = $('#mcd')
const $totient = $('#totient')
const $combLineal = $('#combLineal')
const $rEqModulares = $('#rEqModulares')
const $resolveZone = $('#resolveZone')
const $encript = $('#encript')

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
        <h4>Creo que ya funciona</h4>
        <form id="EqSistemForm">
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
            <button class="button" id="submit">Calcular</button>
        </form>
        <button class="button" id="add">Add</button>
        <p>Por el momento solo se pueden de a 3</p>
    `;

    
    // Agregar un manejador de eventos para el botón "add"
    const add = document.getElementById('add');
    const EqSistemForm = document.getElementById('EqSistemForm');
    add.addEventListener('click', () => {
        EqSistemForm.innerHTML += `
            <br/>
            <input type="number" id="numero" name="numero1" required>
            <label for="numero1">X</label>
            <label for="numero2">≡</label>
            <input type="number" id="numero2" name="numero2" required>
            <label for="numero3">(MOD </label>
            <input type="number" id="numero3" name="numero3" required>
            <label for="numero3"> )</label>
        `;
    });

    // Agregar un manejador de eventos para el formulario
    //const rEqModularesForm = document.getElementById('rEqModularesForm');
    EqSistemForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que se recargue la página
        const numero1 = parseInt(document.getElementById('numero1').value);
        const numero2 = parseInt(document.getElementById('numero2').value);
        const numero3 = parseInt(document.getElementById('numero3').value);
        const numero4 = parseInt(document.getElementById('numero4').value);
        const numero5 = parseInt(document.getElementById('numero5').value);
        const numero6 = parseInt(document.getElementById('numero6').value);
        const numero7 = parseInt(document.getElementById('numero7').value);
        const numero8 = parseInt(document.getElementById('numero8').value);
        const numero9 = parseInt(document.getElementById('numero9').value);

        if (Number.isInteger(numero1) && Number.isInteger(numero2) && Number.isInteger(numero3) && numero1 > 0 && numero2 > 0 && numero3 > 0
            && Number.isInteger(numero4) && Number.isInteger(numero5) && Number.isInteger(numero6) && numero4 > 0 && numero5 > 0 && numero6 > 0
            && Number.isInteger(numero7) && Number.isInteger(numero8) && Number.isInteger(numero9) && numero7 > 0 && numero8 > 0 && numero9 > 0    
        ) {
            let coeficientes = [numero1, numero4, numero7];
            console.log(coeficientes);
            let numeros = [numero2, numero5, numero8];
            console.log(numeros);
            let modulos = [numero3, numero6, numero9];
            console.log(modulos);

            // Calcular el rEqModulares y mostrar el resultado
            let rEqModulares = calcREqModulares(coeficientes, numeros, modulos);
            //$resolveZone.innerHTML = `El rEqModulares de ${numero1}, ${numero2} y ${numero3} es ${3}.`;
        } else {
            $resolveZone.innerHTML = 'Ingresa números enteros positivos válidos.';
        }
    });
});

$encript.addEventListener('click', () => {
    // Crear un formulario dentro del div "resolveZone"
    $resolveZone.innerHTML = `
        <p> Abecedario de encriptacion: </p>
        <p> A = 00, B = 01, C = 02, D = 03, E = 04, F = 05, G = 06, H = 07, I = 08, J = 09, K = 10, L = 11, M = 12, N = 13, O = 14, P = 15, Q = 16, R = 17, S = 18, T = 19, U = 20, V = 21, W = 22, X = 23, Y = 24, Z = 25, " " = 26 </p>
        <button class="button" id="rsa">Metodo RSA</button>
        <button class="button" id="expo">Metodo exponencial</button>
    `;

    // Agregar un manejador de eventos para el botón "rsa"
    const rsa = document.getElementById('rsa');
    rsa.addEventListener('click', () => {
        $resolveZone.innerHTML = `
            <form id="rsaForm">
                <label for="p">Ingrese P:</label>
                <input type="number" id="p" name="p" required>
                <label for="q">Ingrese Q:</label>
                <input type="number" id="q" name="q" required>
                <label for="n">Ingrese N (o deje en blanco si no lo sabe):</label>
                <input type="number" id="n" name="n">
                <label for="e">Ingrese e:</label>
                <input type="number" id="e" name="e" required>
                <label for="message">Ingrese el mensaje:</label>
                <input type="text" id="message" name="message" required>
                <button class="button" type="submit">Calcular</button>
            </form>
        `;

        const pInput = document.getElementById("p");
        const qInput = document.getElementById("q");
        const nInput = document.getElementById("n");

        nInput.addEventListener("input", function () {
            const nValue = nInput.value.trim(); // Obtener el valor de 'n' sin espacios en blanco

            // Habilitar o deshabilitar los campos 'p' y 'q' en función de 'n'
            if (nValue === "") {
                pInput.removeAttribute("disabled");
                qInput.removeAttribute("disabled");
            } else {
                pInput.setAttribute("disabled", true);
                qInput.setAttribute("disabled", true);
            }
        });

        // Agregar un manejador de eventos para el formulario
        const rsaForm = document.getElementById('rsaForm');
        rsaForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evitar que se recargue la página
            const p = parseInt(document.getElementById('p').value);
            const q = parseInt(document.getElementById('q').value);
            let nan = parseInt(document.getElementById('n').value);
            const e = parseInt(document.getElementById('e').value);
            const message = document.getElementById('message').value;
            console.log(nan);
            if (isNaN(nan)) {
                // Si nan es NaN, asignarle el valor de p * q
                nan = p * q;
            }
            console.log(nan);

            const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " "];
            const encriptAlfabet = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20','21', '22', '23', '24', '25', '26'];

                // Calcular el rEqModulares y mostrar el resultado
                if(isPrimo(p) && isPrimo(q) || nan != null && Number.isInteger(nan) && n > 0 && isPrimo(nan) && calcMCD(e, nan-1) === 1) {
                    let n = nan;
                    let totient = calcTotient(n);
                    let d = calcInversoModulo(e, totient);

                    $resolveZone.innerHTML += `n = ${n}, totient = ${totient}, d = ${d}<br/>`;

                    
        
                    let mensaje = message.toUpperCase();
                    let mensajeBloques = splitInBlocksString(mensaje);
                    let mensajeCodificado = [];
                    let mensajeEncriptado = [];
                    mensajeBloques.forEach(element => {
                        let codificado = '';
                        for (let i = 0; i < element.length; i++) {
                            let letra = element[i];
                            let index = alfabeto.indexOf(letra);
                            codificado += encriptAlfabet[index];
                            console.log(`${letra} = ${index} = ${encriptAlfabet[index]}`);
                        }
                        mensajeCodificado.push(codificado);
                    });


                    console.log(mensajeCodificado);
                    console.log(mensajeBloques);
                    console.log(mensajeEncriptado);
                    
                    mensajeBloques.forEach(element => {
                        $resolveZone.innerHTML += `${element}-`;
                    });

                    $resolveZone.innerHTML += '<br/>';
                    $resolveZone.innerHTML += '<p>Mensaje codificado:</p>';
                    mensajeCodificado.forEach(element => { 
                        $resolveZone.innerHTML += `${element} `;
                    });
                    
                    $resolveZone.innerHTML += '<p>Mensaje encriptado:</p>';
                    $resolveZone.innerHTML += '<br/>';
                    console.log(`${Math.pow(1103, 7)}, ${Math.pow(1103, 7) % 2867}`);
                    mensajeCodificado.forEach(element => {
                        let num = BigInt(element);
                        let p = num ** BigInt(e);
                        let encriptado = p % BigInt(n);
                        console.log(`${num}^${e} mod ${n} = ${encriptado}`);
                        mensajeEncriptado.push(encriptado);
                        $resolveZone.innerHTML += `${encriptado} `;
                    });
                    $resolveZone.innerHTML += '<p>Copea este mensaje encriptado y pegalo en el boton de desencriptar</p>';

                } else {
                    $resolveZone.innerHTML = 'Ingresa números enteros positivos válidos.  p, q deben ser primos, e debe ser coprimo con (p-1)(q-1)';
                }
        });
    });

    // Agregar un manejador de eventos para el botón "expo"
    const expo = document.getElementById('expo');
    expo.addEventListener('click', () => {
        $resolveZone.innerHTML = `
            <form id="expoForm">
                <label for="p">Ingrese P:</label>
                <input type="number" id="p" name="p" required>
                <label for="exponente">Ingrese e:</label>
                <input type="number" id="exponente" name="exponente" required>
                <label for="message">Ingrese el mensaje:</label>
                <input type="text" id="message" name="message" required>
                <button class="button" type="submit">Calcular</button>
            </form>
        `;

        // Agregar un manejador de eventos para el formulario
        const expoForm = document.getElementById('expoForm');
        expoForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evitar que se recargue la página
            const p = parseInt(document.getElementById('p').value);
            const exponente = parseInt(document.getElementById('exponente').value);
            const message = document.getElementById('message').value;

            const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " "];
            const encriptAlfabet = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20','21', '22', '23', '24', '25', '26'];


            console.log(`P=${p}, e=${exponente}, m=${message}`);

            if (Number.isInteger(p) && Number.isInteger(exponente) && p > 0 && exponente > 0) {
                // Calcular el rEqModulares y mostrar el resultado
                if(isPrimo(p) && calcMCD(exponente, p-1) === 1) {
                    let mensaje = message.toUpperCase();
                    let mensajeBloques = splitInBlocksString(mensaje);
                    let mensajeCodificado = [];
                    let mensajeEncriptado = [];

                    mensajeBloques.forEach(element => {
                        $resolveZone.innerHTML += `${element}-`;
                    });

                    mensajeBloques.forEach(element => {
                        let codificado = '';
                        for (let i = 0; i < element.length; i++) {
                            let letra = element[i];
                            let index = alfabeto.indexOf(letra);
                            codificado += encriptAlfabet[index];
                            console.log(`${letra} = ${index} = ${encriptAlfabet[index]}`);
                        }
                        mensajeCodificado.push(codificado);
                    });

                    console.log(mensajeCodificado);

                    $resolveZone.innerHTML += '<p>Mensaje codificado:</p>';
                    mensajeCodificado.forEach(element => { 
                        $resolveZone.innerHTML += `${element} `;
                    });

                    $resolveZone.innerHTML += '<p>Mensaje encriptado:</p>';
                    $resolveZone.innerHTML += '<br/>';

                    mensajeCodificado.forEach(element => {
                        let num = BigInt(element);
                        let k = num ** BigInt(exponente);
                        let encriptado = k % BigInt(p);
                        console.log(`${num}^${exponente} mod ${p} = ${encriptado}`);
                        mensajeEncriptado.push(encriptado);
                        $resolveZone.innerHTML += `${encriptado} `;
                    });

                    $resolveZone.innerHTML += '<p>Copea este mensaje encriptado y pegalo en el boton de desencriptar</p>';
                }
            }
        });

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

        const result = [newX, newY];
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

function calcREqModulares(coeficientes, numeros, modulos) {
    let cof = coeficientes;
    let num = numeros;
    let mod = modulos;

    if (isPrimo(modulos[0]) && isPrimo(modulos[1]) && isPrimo(modulos[2])) {
        //  Teorema chino del residuo
        for(let i = 0; i < coeficientes.length; i++) {
            if (coeficientes[i] != 1) {
                for(let j = 1; j < modulos[i]; j++) {
                    if ((coeficientes[i] * j) % modulos[i] == 1) {
                        cof[i] = 1;
                        num[i] = (numeros[i] * j) % modulos[i];
                        mod[i] = modulos[i];
                        break;
                    } 
                }
            } else {
                cof[i] = 1;
                num[i] = numeros[i];
                mod[i] = modulos[i];
            }
        }
        console.log(cof);
        for (let i = 0; i < cof.length; i++) {
            $resolveZone.innerHTML += `${cof[i]}X ≡ ${num[i]} (MOD ${mod[i]})<br/>`;
            
        }

        let n;
        let q = [];
        let r = [];
        n = mod[0] * mod[1] * mod[2];
        q[0] = n / mod[0];
        q[1] = n / mod[1];
        q[2] = n / mod[2];

        for (let index = 0; index < q.length; index++) {
            let temp = calcCombLineal(q[index], mod[index]);

            let m1 = temp[0] % mod[index];
            let m2 = temp[1] % mod[index];

            if (m1 < 0) {
                m1 += mod[index];
            }
            if (m2 < 0) {
                m2 += mod[index];
            }

            if((m1 * q[index]) % mod[index] == 1) {
                r[index] = m1;
            } else {
                r[index] = m2;
            }
            
            /* este for no sirve, por que?, no se, pero no sirve 
            Este for aunque su estructura es correcta, pero se buguea al no encontrar el valor de m
            en la primera iteracion no hace la segunda iteracion y si intento corregir manualmente la variable de iteracion z
            entra en un bucle infinito 

            for (let z = 0; z < 2; z++) {
                console.log(`inicial ${z}`);
                if (temp[z] < mod[z]) {
                    let m = temp[z] % mod[z];
                    console.log(`m = ${temp[z]} % ${mod[z]} = ${m}`);
                    if (m < 0) {
                        m += mod[index];
                    }
                    if((m * q[index]) % mod[index] == 1) {
                        console.log(`estado definitivo m = ${m}`);
                        r[index] = m;
                        break;
                    }
                    console.log(`estado transitivo m = ${m}`);
                    console.log(`iteracion ${z}`);
                }
            } */
        }
        $resolveZone.innerHTML += `N = ${n}<br/> Q1 = ${q[0]}, Q2 = ${q[1]}, Q3 = ${q[2]}<br/> r1 = ${r[0]}, r2 = ${r[1]}, r3 = ${r[2]}<br/>`;

        let x = num[0] * q[0] * r[0] + num[1] * q[1] * r[1] + num[2] * q[2] * r[2];
        let resto = x % n;

        $resolveZone.innerHTML += `X ≡ ${resto}(MOD ${n})<br/> Solucion general: X = K·${n} + ${resto}<br/>`;


    } else {
        for(let i = 0; i < coeficientes.length; i++) {
            if (coeficientes[i] != 1) {
                for(let j = 1; j < modulos[i]; j++) {
                    if ((coeficientes[i] * j) % modulos[i] == 1) {
                        cof[i] = 1;
                        num[i] = (numeros[i] * j) % modulos[i];
                        mod[i] = modulos[i];
                        break;
                    } 
                }
            } else {
                cof[i] = 1;
                num[i] = numeros[i];
                mod[i] = modulos[i];
            }
        }
    
        console.log(cof);
        for (let i = 0; i < cof.length; i++) {
            $resolveZone.innerHTML += `${cof[i]}X ≡ ${num[i]} (MOD ${mod[i]})<br/>`;
            
            
        }
    }
}

function splitInBlocksString(mensaje) {
    let blocks = [];
    let block = '';
    for (let i = 0; i < mensaje.length; i++) {
        block += mensaje[i];
        if (i % 2 === 1) {
            blocks.push(block);
            block = '';
        }
    }
    if (block.length > 0) {
        while (block.length < 2) {
            block += ' ';
        }
        blocks.push(block);
    }

    return blocks;
}

function calcInversoModulo(q, mod) {
        let temp = calcCombLineal(q, mod);

        let m1 = temp[0] % mod;
        let m2 = temp[1] % mod;

        if (m1 < 0) {
            m1 += mod;
        }
        if (m2 < 0) {
            m2 += mod;
        }

        if((m1 * q) % mod == 1) {
            return m1;
        } else {
            return m2;
        }
}
