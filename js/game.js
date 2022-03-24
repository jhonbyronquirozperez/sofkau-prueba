//Declarando variables  globales que vamos a utilizar extraidas del DOM

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = []


//  las 25 preguntas y respuestas con su respectivo nivel

let questions = [
    {
        question: "¿Qué es OOPS?",
        choice1: 'Sistema de Programación Orientada a Objetos (Object Oriented Programming system)',
        choice2: 'Orientación de progrmacion y objetos',
        choice3: 'organization of publics systems',
        choice4: 'Ninguna de las anteriores',
        level: '1',
        answer: 1
    },
    {
        question: "¿Cuales son conceptos básicos de OOPS?",
        choice1: 'sistema de produccion y desarrollo',
        choice2: 'polimorfismo y pluralismo',
        choice3: 'Encapsulación, Herencia, Polimorfismo, Abstracción.',
        choice4: 'Ninguna de las anteriores',
        level: '1',
        answer: 3
    },
    {
        question: "¿Qué es una clase?",
        choice1: 'Es un objeto social',
        choice2: 'Es la representación de un cierto tipo de objeto. Es el plan que define las características de un objeto.',
        choice3: 'metodos que se usan para programar',
        choice4: 'son variables agrupadas en un objeto',
        level: '1',
        answer: 2
    },
    {
        question: "¿Qué es un objeto?",
        choice1: 'Es una variable',
        choice2: 'Parametro que se le pasa a una función',
        choice3: 'Es parte de una clase. Tiene su propio estado, comportamiento y definición.',
        choice4: 'Es un arreglo de datos',
        level: '1',
        answer: 3
    },
    {
        question: "¿Qué es la encapsulación?",
        choice1: 'Proceso quimico de creación de farmacos',
        choice2: 'Instanciación de una clase y el uso de esta',
        choice3: 'Es pasar parametros a una función',
        choice4: 'Es una característica del objeto y guarda todos los datos ocultos. Estos datos (ocultos) pueden estar limitados para los que forman esa clase. Sus niveles son, internos, protegidos, públicos,  protegidos internos, y privados',
        level: '1',
        answer: 4
    },
    {
        question: "¿Qué es el polimorfismo?",
        choice1: 'Tener varios cuerpos',
        choice2: 'Es la asignación de un valor que se da a una subclase, o que se había declarado ya en la clase principal.',
        choice3: 'Es la creación de varias clases bajo la misma estructura de datos y variables',
        choice4: 'Ninguna de las anteriores',
        level: '2',
        answer: 4
    },
    {
        question: "¿Qué es la herencia?",
        choice1: 'es el concepto con el cual se aclara que una clase divide la estructura y comportamiento definidos en otra clase. ',
        choice2: 'Es los bienes y beneficios que dejan tus familiares al fallecer',
        choice3: 'Tomar conceptos, funciones y variables de una función y pasarlas a otra',
        choice4: 'Todas las anteriores',
        level: '2',
        answer: 1
    },
    {
        question: "¿Qué son los manipuladores (manipulators)?",
        choice1: 'Son los que definen las alzas y las bajas en los mercados',
        choice2: 'Son helpers que nos ayudaran a llevar una mejor loogica en el codigo',
        choice3: 'Son  las funciones que se utilizan junto con operadores de inserción (<<) y extracción (>>) en un objeto.',
        choice4: 'Funciones desarrolladas con fines cientificos',
        level: '2',
        answer: 3
    },
    {
        question: " ¿Como se define un constructor?",
        choice1: 'Se define como una función para escalar una aplicación',
        choice2: 'Se define así al método que se utiliza para iniciar el estado de un objeto',
        choice3: 'Se define a traves de variables y funciones autoejecutables',
        choice4: 'Ninguna de las anteriores',
        level: '2',
        answer: 2
    },
    {
        question: "¿Que reglas puede tener un constructor?",
        choice1: 'El constructor tiene un nombre, que debe ser el mismo nombre de la clase',
        choice2: 'El constructor no puede tener ningún tipo de retorno',
        choice3: 'Solo existe en Javascript',
        choice4: 'Las dos primeras opciones son correctas',
        level: '2',
        answer: 4
    },
    {
        question: "¿Qué es una función en línea (inline)?",
        choice1: 'Función modificada desde la nube y puede ser utilizada en todo momento',
        choice2: 'Es la técnica usada por  compiladores y que  indica que introduzcas el cuerpo entero de la función, siempre que la función se use  el código que es fuente del programa.',
        choice3: 'Arquitectura de software utilizada por grandes compañias',
        choice4: 'Funcion despegable y reutilizable',
        level: '3',
        answer: 2
    },
    {
        question: "¿Qué es una clase abstracta?",
        choice1: 'Es aquella clase que no se comprende',
        choice2: 'Es aquella clase que no tiene forma',
        choice3: 'Es aquella clase que no puede ser instanciada',
        choice4: 'Es aquella clase que puedes instanciar',
        level: '3',
        answer: 3
    },
    {
        question: "¿Qué es un operador ternario (ternary)?",
        choice1: 'Es el que toma dos argumentos',
        choice2: 'Es el que toma tres argumentos',
        choice3: 'Es el que no puede ser cambiado',
        choice4: 'Es aquel operador donde puedes hacer varias operaciones',
        level: '3',
        answer: 2
    },
    {
        question: "¿Que hace la palabra clave super?",
        choice1: 'Es la que se utiliza para llamar el método overridden',
        choice2: 'La palabra clave deja entrar a métodos sobrescritos y a miembros escondidos de la superclase',
        choice3: 'Reenvía una llamada de un constructor a otro constructor',
        choice4: 'Todas las anteriores',
        level: '3',
        answer: 4
    },
    {
        question: "¿Qué es una interfaz?",
        choice1: 'Es la colección que tiene el método abstracto.',
        choice2: 'Es lo que el usuario final visualiza',
        choice3: 'Es una herramienta de programación',
        choice4: 'Es una función autoejecutable',
        level: '3',
        answer: 1
    },
    {
        question: "¿Qué es una abstracción?",
        choice1: 'Es tomar las caracteristicas y metodos necesarios de una clase para hacer funcionar esta',
        choice2: 'Es instanciar una clase',
        choice3: 'Es una de la característica de OOPS que muestra solamente los detalles y que necesita el cliente de un objeto',
        choice4: 'Es hacer uso de la herencia',
        level: '4',
        answer: 3
    },
    {
        question: "¿Qué es el puntero 'this'?",
        choice1: ' this, define al objeto actual de una clase',
        choice2: 'this, es una palabra en ingles',
        choice3: 'this, no existe en la programación',
        choice4: 'this, es un acronimo',
        level: '4',
        answer: 1
    },
    {
        question: "¿Qué son modificadores sellados?",
        choice1: 'Son aquellos que no pueden ser editados en ningún momento',
        choice2: 'Son los modificadores de acceso a los cuales no se les permiten ser heredados por los métodos',
        choice3: 'Son los modificadores de una funcion',
        choice4: 'Es un concepto ligado a la programación funcional',
        level: '4',
        answer: 2
    },
    {
        question: "¿Qué es el polimorfismo dinámico o de runtime?",
        choice1: 'Son las distintas formas que puede tomar una funcion',
        choice2: 'Es la herencia en varias clases',
        choice3: 'Es el método de cancelación en el cual la llamada a una función anulada se resolverá durante el tiempo de ejecución',
        choice4: 'Es un objeto indefinido',
        level: '4',
        answer: 3
    },
    {
        question: "¿Qué es un constructor copy?",
        choice1: 'Es un concepto en la programación estructurada',
        choice2: 'Es un constructor que copia solo las variables de la clase heredada',
        choice3: 'Es copiar las funcionalidades y parametros de una función',
        choice4: 'Es un constructor especial, el cual se usa para crear un nuevo objeto como copia de un objeto que ya existe.',
        level: '4',
        answer: 4
    },
    {
        question: "¿Qué es una clase base?",
        choice1: 'Es la más generalizada, igualmente se dice que es una clase raíz.',
        choice2: 'Es una clase en la cual todo el sistema se basa',
        choice3: 'Clase que no se puede instanciar',
        choice4: 'Clase que no puede ser heredada',
        level: '5',
        answer: 1
    },
    {
        question: "¿Que es una subclase?",
        choice1: 'Es la que antepone la clase principal',
        choice2: 'Clase heredada varias veces',
        choice3: 'Es la que hereda de una o más clases base',
        choice4: 'Ninguna de las anteriores',
        level: '5',
        answer: 3
    },
    {
        question: "¿Que es super clase?",
        choice1: 'Clase que tiene muchos metodos y variables',
        choice2: 'Es la padre de la cual va a heredar otra clase',
        choice3: 'Clase que carece de metodos y variables',
        choice4: 'Clase con mas de un constructor',
        level: '5',
        answer: 2
    },
    {
        question: "¿Cuántas instancias se pueden crear para una clase abstracta?",
        choice1: 'Se puede instanciar una vez',
        choice2: 'Se puede instanciar mas de una vez',
        choice3: 'Se puede instanciar dos veces',
        choice4: 'No se puede crear ninguna instancia.',
        level: '5',
        answer: 4
    },
    {
        question: "¿Cuál es el especificador de acceso predeterminado en una definición de clase?",
        choice1: 'El especificador de acceso multiple (multiple access).',
        choice2: 'El especificador de acceso vacio (void access).',
        choice3: 'El especificador de acceso privado (private access).',
        choice4: 'El especificador de acceso publico (public access)',
        level: '5',
        answer: 3
    },
]

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 25; // cambiar a 5 de cada nivel y volver a preguntar

//funcion para iniciar el juego y que se actualicen las preguntas

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};
//respuestas correctas e incorrectas y temporizador para cambiar de pregunta

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
       
        const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

      if (classToApply === "correct") {
        incrementScore(CORRECT_BONUS);
      }


    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);

        getNewQuestion();
    });

    //incremento de puntaje
    incrementScore = num => {
        score += num;
        scoreText.innerText = score;
    };    
});

startGame();