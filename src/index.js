module.exports = function check(str, bracketsConfig) {
    let symbols = str.split('');
    let result = [];

    for (let i = 0; i < symbols.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            const lastSymbol = result[result.length-1];
            const isConfigSymbolsEqual = bracketsConfig[j][0] === bracketsConfig[j][1];
            const isConfigSymbolEqualToLastSymbol = bracketsConfig[j][0] === lastSymbol;

            if (symbols[i] === bracketsConfig[j][0]) {
                if (isConfigSymbolsEqual && isConfigSymbolEqualToLastSymbol) {
                   result.pop();
                } else {
                    result.push(symbols[i]);
                }
                break;
            } else if (symbols[i] === bracketsConfig[j][1]) {
                const pair = bracketsConfig[j][0];

                if (lastSymbol === pair) {
                    result.pop();
                }
            }
        }
    } 
    
    if (result.length === 0) {
        return true;
    } else {
        return false;
    }
}
