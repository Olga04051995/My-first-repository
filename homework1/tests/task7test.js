'use strict';

QUnit.test('1. True result (task7)', function(assert) {
    var result = task7({min: 1, max: 500});     
    assert.deepEqual(result, [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377], 'Passed!');
});