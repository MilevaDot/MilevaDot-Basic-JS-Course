Boolean(); // false
Boolean(0); // false
Boolean(null); // false
Boolean(NaN); // false
Boolean(undefined); // false
Boolean(false); // false
Boolean(""); // false
Boolean(" "); // true
Boolean("a"); // true
Boolean(1); // true
Boolean([]); // true // array
Boolean({}); // true // objeto
Boolean(function(){}); // true
Boolean(true); // true