function bracketValidation(input) {
  const inputSplit = input.split("");
  let brackets = [];
  for (let element of inputSplit) {
    if (element === "[" || element === "{" || element === "(") {
      brackets.push(element);
    } else if (element === "]" || element === "}" || element === ")") {
 
      const firstBracket = brackets.pop();

      if (
        (element === "}" && firstBracket !== "{") ||
        (element === ")" && firstBracket !== "(") ||
        (element === "]" && firstBracket !== "[")
      ) {
        return "invalid";
      }
    }
  }
  if (brackets.length > 0){
    return "invalid";
  }

  return "valid"
}

console.log(bracketValidation("(ew[)]"))