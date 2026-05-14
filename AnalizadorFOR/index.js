import AnalizadorFORLexer from "./generated/AnalizadorFORLexer.js";
import AnalizadorFORParser from "./generated/AnalizadorFORParser.js";
import CustomAnalizadorFORVisitor from "./CustomAnalizadorFORVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push(`Línea ${line}:${column} - ${msg}`);
    }
}

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrónica.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    const lexerErrorListener = new CustomErrorListener();
    let inputStream = CharStreams.fromString(input);
    let lexer = new AnalizadorFORLexer(inputStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrorListener);

    //Verificar si el lexer está generando tokens 
    console.log("1. Análisis Léxico - Verificando tokens generados...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    //Mostrar la tabla de tokens y lexemas
    console.log("\n2. Tabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    // Recorrer todos los tokens generados por el lexer
    for (let token of tokens) {
        // Obtener el nombre simbólico del token
        const tokenType = AnalizadorFORLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text; // Obtener el lexema (texto del token)
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

    /* Vuelve a procesar la entrada, obtener el lexer, el código tokenizado y el parser */
    inputStream = CharStreams.fromString(input);
    lexer = new AnalizadorFORLexer(inputStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrorListener);

    let tokenStream = new CommonTokenStream(lexer);
    let parser = new AnalizadorFORParser(tokenStream);

    const parserErrorListener = new CustomErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(parserErrorListener);

    let tree = parser.prog();

    const allErrors = lexerErrorListener.errors.concat(parserErrorListener.errors);

    // Verificar si se produjeron errores sintácticos o léxicos
    if (allErrors.length > 0) {
        console.error("\n[!] 1. Se encontraron errores en la entrada (Análisis Léxico/Sintáctico):");
        for (const err of allErrors) {
            console.error(` - ${err}`);
        }
    } else {
        console.log("\n[OK] 1. La entrada es correcta (sin errores léxicos ni sintácticos).");

        console.log("\n3. Árbol de derivación:");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(cadena_tree);

        console.log("\n4. Interpretación (Traducción y Ejecución):");
        const visitor = new CustomAnalizadorFORVisitor();
        const jsCode = visitor.visit(tree);

        console.log("\n--- Código Traducido a JavaScript ---");
        console.log(jsCode);
        console.log("-------------------------------------");

        console.log("\n--- Resultado de la Ejecución ---");
        try {
            eval(jsCode);
        } catch (e) {
            console.error("Error al ejecutar el código traducido:", e);
        }
        console.log("---------------------------------");
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();
