// Generated from c:/Users/juani/OneDrive/Desktop/utn 2026/sintaxis y semantica de los lenguajes/AnalizadorFOR/AnalizadorFOR.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorFORListener from './AnalizadorFORListener.js';
import AnalizadorFORVisitor from './AnalizadorFORVisitor.js';

const serializedATN = [4,1,18,59,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,3,2,28,8,2,1,2,1,2,3,2,32,8,2,1,2,4,2,35,8,2,11,2,12,2,36,1,2,1,2,3,
2,41,8,2,1,3,1,3,3,3,45,8,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,53,8,4,1,5,1,5,3,
5,57,8,5,1,5,0,0,6,0,2,4,6,8,10,0,0,60,0,13,1,0,0,0,2,17,1,0,0,0,4,19,1,
0,0,0,6,44,1,0,0,0,8,46,1,0,0,0,10,54,1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,
0,14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,1,1,0,0,0,17,18,3,4,2,0,18,
3,1,0,0,0,19,20,5,1,0,0,20,21,5,12,0,0,21,22,5,2,0,0,22,23,5,13,0,0,23,24,
5,3,0,0,24,25,5,13,0,0,25,27,5,4,0,0,26,28,5,17,0,0,27,26,1,0,0,0,27,28,
1,0,0,0,28,29,1,0,0,0,29,31,5,5,0,0,30,32,5,17,0,0,31,30,1,0,0,0,31,32,1,
0,0,0,32,34,1,0,0,0,33,35,3,6,3,0,34,33,1,0,0,0,35,36,1,0,0,0,36,34,1,0,
0,0,36,37,1,0,0,0,37,38,1,0,0,0,38,40,5,6,0,0,39,41,5,17,0,0,40,39,1,0,0,
0,40,41,1,0,0,0,41,5,1,0,0,0,42,45,3,8,4,0,43,45,3,10,5,0,44,42,1,0,0,0,
44,43,1,0,0,0,45,7,1,0,0,0,46,47,5,7,0,0,47,48,5,8,0,0,48,49,5,14,0,0,49,
50,5,9,0,0,50,52,5,10,0,0,51,53,5,17,0,0,52,51,1,0,0,0,52,53,1,0,0,0,53,
9,1,0,0,0,54,56,5,11,0,0,55,57,5,17,0,0,56,55,1,0,0,0,56,57,1,0,0,0,57,11,
1,0,0,0,8,15,27,31,36,40,44,52,56];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorFORParser extends antlr4.Parser {

    static grammarFileName = "AnalizadorFOR.g4";
    static literalNames = [ null, "'para'", "'desde'", "'hasta'", "'hacer'", 
                            "'{'", "'}'", "'imprimir'", "'('", "')'", "';'", 
                            "'salir;'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "ID", "NUMERO", "CADENA", 
                             "CARACTER", "LETRA", "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "instruccion", "conteo", "sentencia", "salida", 
                         "terminar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorFORParser.ruleNames;
        this.literalNames = AnalizadorFORParser.literalNames;
        this.symbolicNames = AnalizadorFORParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorFORParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.instruccion();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorFORParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.conteo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conteo() {
	    let localctx = new ConteoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorFORParser.RULE_conteo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(AnalizadorFORParser.T__0);
	        this.state = 20;
	        this.match(AnalizadorFORParser.ID);
	        this.state = 21;
	        this.match(AnalizadorFORParser.T__1);
	        this.state = 22;
	        this.match(AnalizadorFORParser.NUMERO);
	        this.state = 23;
	        this.match(AnalizadorFORParser.T__2);
	        this.state = 24;
	        this.match(AnalizadorFORParser.NUMERO);
	        this.state = 25;
	        this.match(AnalizadorFORParser.T__3);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 26;
	            this.match(AnalizadorFORParser.NEWLINE);
	        }

	        this.state = 29;
	        this.match(AnalizadorFORParser.T__4);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 30;
	            this.match(AnalizadorFORParser.NEWLINE);
	        }

	        this.state = 34; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 33;
	            this.sentencia();
	            this.state = 36; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===7 || _la===11);
	        this.state = 38;
	        this.match(AnalizadorFORParser.T__5);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 39;
	            this.match(AnalizadorFORParser.NEWLINE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorFORParser.RULE_sentencia);
	    try {
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.salida();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorFORParser.RULE_salida);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(AnalizadorFORParser.T__6);
	        this.state = 47;
	        this.match(AnalizadorFORParser.T__7);
	        this.state = 48;
	        this.match(AnalizadorFORParser.CADENA);
	        this.state = 49;
	        this.match(AnalizadorFORParser.T__8);
	        this.state = 50;
	        this.match(AnalizadorFORParser.T__9);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 51;
	            this.match(AnalizadorFORParser.NEWLINE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorFORParser.RULE_terminar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(AnalizadorFORParser.T__10);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 55;
	            this.match(AnalizadorFORParser.NEWLINE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorFORParser.EOF = antlr4.Token.EOF;
AnalizadorFORParser.T__0 = 1;
AnalizadorFORParser.T__1 = 2;
AnalizadorFORParser.T__2 = 3;
AnalizadorFORParser.T__3 = 4;
AnalizadorFORParser.T__4 = 5;
AnalizadorFORParser.T__5 = 6;
AnalizadorFORParser.T__6 = 7;
AnalizadorFORParser.T__7 = 8;
AnalizadorFORParser.T__8 = 9;
AnalizadorFORParser.T__9 = 10;
AnalizadorFORParser.T__10 = 11;
AnalizadorFORParser.ID = 12;
AnalizadorFORParser.NUMERO = 13;
AnalizadorFORParser.CADENA = 14;
AnalizadorFORParser.CARACTER = 15;
AnalizadorFORParser.LETRA = 16;
AnalizadorFORParser.NEWLINE = 17;
AnalizadorFORParser.WS = 18;

AnalizadorFORParser.RULE_prog = 0;
AnalizadorFORParser.RULE_instruccion = 1;
AnalizadorFORParser.RULE_conteo = 2;
AnalizadorFORParser.RULE_sentencia = 3;
AnalizadorFORParser.RULE_salida = 4;
AnalizadorFORParser.RULE_terminar = 5;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorFORParser.RULE_prog;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorFORVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorFORParser.RULE_instruccion;
    }

	conteo() {
	    return this.getTypedRuleContext(ConteoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorFORVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConteoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorFORParser.RULE_conteo;
    }

	ID() {
	    return this.getToken(AnalizadorFORParser.ID, 0);
	};

	NUMERO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorFORParser.NUMERO);
	    } else {
	        return this.getToken(AnalizadorFORParser.NUMERO, i);
	    }
	};


	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorFORParser.NEWLINE);
	    } else {
	        return this.getToken(AnalizadorFORParser.NEWLINE, i);
	    }
	};


	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.enterConteo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.exitConteo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorFORVisitor ) {
	        return visitor.visitConteo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorFORParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorFORVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorFORParser.RULE_salida;
    }

	CADENA() {
	    return this.getToken(AnalizadorFORParser.CADENA, 0);
	};

	NEWLINE() {
	    return this.getToken(AnalizadorFORParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorFORVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorFORParser.RULE_terminar;
    }

	NEWLINE() {
	    return this.getToken(AnalizadorFORParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorFORListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorFORVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorFORParser.ProgContext = ProgContext; 
AnalizadorFORParser.InstruccionContext = InstruccionContext; 
AnalizadorFORParser.ConteoContext = ConteoContext; 
AnalizadorFORParser.SentenciaContext = SentenciaContext; 
AnalizadorFORParser.SalidaContext = SalidaContext; 
AnalizadorFORParser.TerminarContext = TerminarContext; 
