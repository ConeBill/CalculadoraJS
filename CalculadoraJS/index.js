function Calculadora(n1, op, n2) {
    this.display = document.querySelector('.span');
    this.num = 0;
    this.nums = 0;
    this.equals = '';

    this.iniciar = () => {
        this.pickClick();
    };
    this.pickClick = (e) => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            //captura qual botão foi clicado
            if (el.classList.contains('numbers')) {
                if (el.innerText == '1') this.getNum(el);
                if (el.innerText == '2') this.getNum(el);
                if (el.innerText == '3') this.getNum(el);
                if (el.innerText == '4') this.getNum(el);
                if (el.innerText == '5') this.getNum(el);
                if (el.innerText == '6') this.getNum(el);
                if (el.innerText == '7') this.getNum(el);
                if (el.innerText == '8') this.getNum(el);
                if (el.innerText == '9') this.getNum(el);
                if (el.innerText == '0') this.getNum(el);
            }
            if (el.classList.contains('clear')) this.clearDisplay();
            if (el.classList.contains('sing')) {
                if (el.innerText == '-') this.calculador(el);
                if (el.innerText == '(') this.getNum(el);
                if (el.innerText == ')') this.getNum(el);
                if (el.innerText == 'x') this.calculador(el);
                if (el.innerText == '/') this.calculador(el);
                if (el.innerText == '+') this.calculador(el);
            } 
            if (el.classList.contains('comma')) this.addNumDisplay(el);
            if (el.classList.contains('equals')) this.resultSum(this.num, this.nums, this.equals);
        });
    };
    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
    };
    this.addResultDisplay = (el) => {
        this.display.value = el;
    };
    this.getNum = (n) => {
        if(this.checkNumber == false) {
        this.num += n.innerText;
        this.addNumDisplay(n);
        } else if (this.checkNumber == true) {
            this.nums += n.innerText;
            this.addNumDisplay(n);
        } else console.error(`Numero: ${n}, incorreto.`);
    };
    this.clearDisplay = () => {
        this.display.value = '';
        this.equals = '';
        this.checkNumber = false;
    };
    this.calculador = (eq) => {
        const checkNumber = false;
        
        if(this.equals == '') {
            equals = eq;
            checkNumber = true;
        } else if (eq != '') {
            equals = eq;
            checkNumber = true;
            console.log(`Operador: (${eq})`);
        }
    };
    this.resultSum = (v1, v2, eq) => {
        if (v1, v2, eq != null) {
            if(eq = '/') {
                let resultado = parseFloat(v1) / parseFloat(v2);
                this.clearDisplay();
                this.addResultDisplay(resultado);
                console.log(eq);
                console.log(resultado);
            } else if (eq = '*') {
                let resultado = parseFloat(v1) / parseFloat(v2);
                this.clearDisplay();
                this.addResultDisplay(resultado);
                console.log(eq);
                console.log(resultado);
            } else if (eq = '+') {
                let resultado = parseFloat(v1) / parseFloat(v2);
                this.clearDisplay();
                this.addResultDisplay(resultado);
                console.log(eq);
                console.log(resultado);
            } else if (eq = '-') {
                let resultado = parseFloat(v1) / parseFloat(v2);
                this.clearDisplay();
                this.addResultDisplay(resultado);
                console.log(eq);
                console.log(resultado);
            } else {

            }
        }
    
    };
    
}
const calculadora = new Calculadora();
calculadora.iniciar();