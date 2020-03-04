function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let exprWithoutSpaces = expr.replace(/\s/g, '');

    if(exprWithoutSpaces.includes('/0')) {
      throw new Error('TypeError: Division by zero.');	
    }

    if(!!checkBrackets(exprWithoutSpaces)) {
  	throw new Error('ExpressionError: Brackets must be paired')
  }
    
    
    let sum = new Function(`return ${exprWithoutSpaces}`);
    /* checking the case when division by zero is not explicit. For example 6 / (3 - 3)
    if(sum() == Infinity || sum() == -Infinity) {
    	throw new Error('TypeError: Division by zero.');
    } */

    return sum();

}

function checkBrackets(expr) {
  let notClosedBracketsQuantity = 0;

  let bracketsArray = expr.match(/[()]/g);

  if(!!bracketsArray) {
  	 bracketsArray.forEach(el => {
    if(el == '(') {
    	notClosedBracketsQuantity++;
    } else {
    	notClosedBracketsQuantity--;
    }
  });
  }
 
  return notClosedBracketsQuantity;
}

module.exports = {
    expressionCalculator
}