'use strict';

QUnit.test('1. Type of result is string (task1)', function(assert) {
    var result = task1(5, 5, "*");     
    assert.equal(typeof result, 'string', 'Passed!');
});