function fibonacci(n, list) {
  if (list === false) {
    let result;
    let x = 1;
    let y = 0;
    for (let i = 0; i < n; i++) {
      result = x + y;
      y = x;
      x = result;
    }
    return result;
  } else {
    //return a list
    let result;
    let x = 1;
    let y = 0;
    let resultList = [];
    for (let i = 0; i < n; i++) {
      result = x + y;
      y = x;
      x = result;
      resultList.push(result);
    }
    return resultList;
  }
}

function fibonacciR(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacciR(n - 2) + fibonacciR(n - 1);
  }
}

function fibDraw(n, scale) {
    if(scale === undefined) {
        scale = 1;
    }
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  let canvasStartX = 500;
  let canvasStartY = 500;
  context.beginPath();
  let pi = Math.PI;
  let angleS = 1.5;
  let angleE = 1;
  let result;
  let x = 1;
  let y = 0;
  let counter = 4;

  for (let i = 0; i < n; i++) {
    result = x + y;
    const newFibMinusOldFib = (result - x) * scale;
    y = x;
    x = result;
    angleS = angleS - 0.5;
    angleE = angleE - 0.5;
    if (angleE < 0) {
      angleE = 1.5;
    }
    if (angleS < 0) {
      angleS = 1.5;
    }
    switch (counter) {
      case 1:
        //shift y-axis up
        canvasStartY = canvasStartY + newFibMinusOldFib;
        break;
      case 2:
        canvasStartX = canvasStartX - newFibMinusOldFib;
        break;
      case 3:
        canvasStartY = canvasStartY - newFibMinusOldFib;
        break;
      case 4:
        canvasStartX = canvasStartX + newFibMinusOldFib;
        break;

      default:
        break;
    }
    context.arc(
      canvasStartX,
      canvasStartY,
      result*scale,
      angleS * pi,
      angleE * pi,
      true
    );
    context.stroke();
    // counter++;
    // if (counter > 4) {
    //   counter = 1;
    // }
    counter--;
    if (counter < 1) {
      counter = 4;
    }
  }
}
fibDraw(15,1);
