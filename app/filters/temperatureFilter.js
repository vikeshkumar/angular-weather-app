app.filter('temp', function() {
    return function(input, from, to) {
        input = parseFloat(input);
        if (from === 'K' || from === 'k') {
            if (to === 'C' || to === 'c') {
                return input - 273.15;
            }
            else if (to === 'F' || to === 'f') {
                 return (9/5)*(input - 273.15) + 32;
            }
            else {
                return from;
            }
        }
        else if (from === 'C' || from === 'c') {
            if (to === 'K' || to === 'k') {
                return input + 273.15;
            }
            else if (to === 'F' || to === 'f') {
                return  from * (9/5 + 32);
            }
            else {
                return from;
            }
        }
        else if (from === 'F' || from === 'f') {
            if (to === 'C' || to === 'c') {
                return (from - 32) * 5/9;
            }
            else if (to === 'K' || to === 'k') {
                return 273.15 + (from - 32) * 5/9;
            }
            else {
                return from;
            }
        }
    };
});