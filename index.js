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
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}
