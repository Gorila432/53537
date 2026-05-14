grammar AnalizadorFOR;

//Gramatica
prog: instruccion+;

instruccion: conteo;

conteo: 'para' ID 'desde' NUMERO 'hasta' NUMERO 'hacer' NEWLINE? '{' NEWLINE? sentencia+ '}' NEWLINE?;

sentencia: salida | terminar;

salida: 'imprimir' '(' CADENA ')' ';' NEWLINE?;

terminar: 'salir;' NEWLINE?;



ID : CARACTER (CARACTER | NUMERO)*;
NUMERO : [0-9]+;
CADENA : '"' [A-Za-z0-9 .,;:!?]* '"';
CARACTER : LETRA | '.' | ',' | ';' | ':' | '!' | '?'  ;
LETRA : [a-zA-Z];


NEWLINE:'\r'? '\n';
WS: [ \t]+ -> skip;

