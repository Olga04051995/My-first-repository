'use strict';

QUnit.test('1. Correct result (task3)', function(assert) {
    var result = calculateTriangleArea(10, 15, 13);     
    assert.equal(result, 64.06246951218786, 'Passed!');
});

QUnit.test('2. Correct result (task3)', function(assert) {
    var result = calculateTriangleArea(4.5, 6.432, 3.21);     
    assert.equal(result, 6.69717715047459, 'Passed!');
});

QUnit.test('3. Correct result (task3)', function(assert) {
    var result = task3([{vertices: 'ABC', a: 2, b: 3, c: 4}, 
                        {vertices: 'ABD', a: 3, b: 4, c: 5}, 
                        {vertices: 'DBC', a: 6, b: 7, c: 8}]);     
    assert.deepEqual(result, ["ABC", "ABD", "DBC"], 'Passed!');
});

QUnit.test('4. Correct result (task3)', function(assert) {
    var result = task3([{vertices: 'ABC', a: 10, b: 20, c: 22.36}, 
                        {vertices: 'ABD', a: 7, b: 9, c: 15.36}, 
                        {vertices: 'DBC', a: 4, b: 5, c: 6}]);     
    assert.deepEqual(result, ["DBC", "ABD", "ABC"], 'Passed!');
});
