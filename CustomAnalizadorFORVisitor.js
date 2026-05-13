import AnalizadorFORVisitor from './generated/AnalizadorFORVisitor.js';

class CustomAnalizadorFORVisitor extends AnalizadorFORVisitor {
    constructor() {
        super();
    }

    visitProg(ctx) {
        let code = "";
        if (ctx.children) {
            for (const child of ctx.children) {
                const childCode = this.visit(child);
                if (childCode) {
                    code += childCode;
                }
            }
        }
        return code;
    }

    visitInstruccion(ctx) {
        return this.visitChildren(ctx);
    }

    visitConteo(ctx) {
        const varName = ctx.ID().getText();
        const desde = ctx.NUMERO(0).getText();
        const hasta = ctx.NUMERO(1).getText();

        let code = `for (let ${varName} = ${desde}; ${varName} <= ${hasta}; ${varName}++) {\n`;
        const sentencias = ctx.sentencia();
        if (sentencias) {
            for (const sentencia of sentencias) {
                const sentCode = this.visit(sentencia);
                if (sentCode) {
                    code += "    " + sentCode;
                }
            }
        }
        code += `}\n`;
        return code;
    }

    visitSentencia(ctx) {
        return this.visitChildren(ctx);
    }

    visitSalida(ctx) {
        let cadena = ctx.CADENA().getText();
        return `console.log(${cadena});\n`;
    }

    visitTerminar(ctx) {
        return `// salir;\n`;
    }
}

export default CustomAnalizadorFORVisitor;
