'use strict';

QUnit.test('1. Type of result is string (task6)', function(assert) {
    var result = task6(6, 50);     
    assert.equal(typeof result, 'string', 'Passed!');
});