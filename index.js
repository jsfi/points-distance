/*
 * points-distance
 * https://github.com/jsfi/points-distance
 *
 * Copyright (c) 2015 Martin Sachse
 * Licensed under the MIT license.
 */

'use strict';

//d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
module.exports = function(p1, p2) {
    let x = Math.pow(p1[0] - p2[0], 2);
    let y = Math.pow(p1[1] - p2[1], 2);
    let z = (2 in p1 && 2 in p2) ? Math.pow(p1[2] - p2[2], 2) : 0;

    return Math.sqrt(x + y + z);
}
