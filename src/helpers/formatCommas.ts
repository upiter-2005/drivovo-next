export function formatCommas (x: string | number): string | number  {
    
    if (typeof x === 'number'){
        x.toString();
    }
    if(typeof x === 'string'){
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    }
  

    return x;
};