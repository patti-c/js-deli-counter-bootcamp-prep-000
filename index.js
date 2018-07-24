var katzDeli = [];

var i = 1;

function takeANumber(katzDeli) {
  katzDeli.push(i);
  i++;
  return `Welcome, you are ticket number ${i - 1} in line.`;
}

console.log(takeANumber(katzDeli));
console.log(takeANumber(katzDeli));

function nowServing(katzDeli) {
  if(katzDeli.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

console.log(nowServing(katzDeli));
console.log(takeANumber(katzDeli));

function currentLine(katzDeli) {
  
  const lineLength = katzDeli.length
  
  if(lineLength === 0) {
    return 'The line is currently empty.';
  } else {
    
    var list = `The line is currently: 1. ${katzDeli[0]}, `;
    
    for(let i = 1 ; i < lineLength - 1 ; i++) {
      list = list + `${i+1}. ${katzDeli[i]}, `;
    }
    
    list = list + `${lineLength}. ${katzDeli[lineLength - 1]}`;
    return list;
  }
}