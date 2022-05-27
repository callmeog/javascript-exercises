const add = function(a,b) {
	return a + b;
};
add(0,0);

const add1 = function(c,d) {
	return c + d;
};
add1(2,2);

const add2 = function(e,f) {
	return e + f;
};
add2(2,6);

const subtract = function(g,h) {
	return g - h;
};
subtract(10,4);

const sum = function(sumNumbers) {
  let x = sumNumbers.reduce(function(i, j) {
   return i + j;
  },0);
   return x;
}
sum([]);

const sum1 = function(sumK) {
  let y = sumK.reduce(function(k) {
    return k;
  },)
  return y;
} 
sum1([7]);

const sum3 = function(sumManyNum) {
  const many = sumManyNum.reduce(function(u,w) {
    return u + w ;
  });
  return many;
}
sum3([1,3,5,7,9]);


const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
