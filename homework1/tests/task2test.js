'use strict';

QUnit.test('1. Attachment is possible (task2)', function(assert) {
    var result = task2({a: 2.456, b: 4.545}, {a: 3.455, b: 10.557});
    assert.equal(result, 1, 'Passed!');
});

QUnit.test('2. Attachment is possible (task2)', function(assert) {
    var result = task2({a: 3, b: 4}, {a: 4, b: 5});
    assert.equal(result, 1, 'Passed!');
});

QUnit.test('3. Attachment is possible (task2)', function(assert) {
    var result = task2({a: 4.192, b:5.345 }, {a: 1.342, b: 2.632});
    assert.equal(result, 2, 'Passed!');
});

QUnit.test('4. Attachment is possible (task2)', function(assert) {
    var result = task2({a: 4, b: 5}, {a: 2, b: 3});
    assert.equal(result, 2, 'Passed!');
});

QUnit.test('5. Attachment is not possible (task2)', function(assert) {
    var result = task2({a: 4, b: 3}, {a: 3, b: 4});
    assert.equal(result, 0, 'Passed!');
});


