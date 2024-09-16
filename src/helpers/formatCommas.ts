export function formatCommas (x: string | number): string | number  {
  console.log(typeof x);
 
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");

  
    console.log(x);
    return x;
};