'use strict';

/* Filters */

adeModule.filter('percent', function() {
    return function(input) {
        var clean = parseFloat(input),
            output = '';

        if (!isNaN(clean)) { output = clean + '\u0025' }

        return output;
    };
});

