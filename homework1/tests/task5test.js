'ude strict';

QUnit.test('1. Find winner (task5)', function(assert) {
    var result = task5({min:'100000', max:'400000'});     
    assert.deepEqual(result, {easyMethod: 16786, complexMethod: 7965, winner: "easyMethod"}, 'Passed!');
});

QUnit.test('2. Count by easyMethod (task5)', function(assert) {
    var result = easyMethod('121121');     
    assert.equal(result, true, 'Passed!');
});

QUnit.test('3. Count by easyMethod (task5)', function(assert) {
    var result = easyMethod('121120');     
    assert.equal(result, false, 'Passed!');
});

QUnit.test('4. Count by complexMethod (task5)', function(assert) {
    var result = complexMethod('143143');     
    assert.equal(result, true, 'Passed!');
});

QUnit.test('5. Count by complexMethod (task5)', function(assert) {
    var result = complexMethod('123456');     
    assert.equal(result, false, 'Passed!');
});

QUnit.test('6. Count sum of numbers (task5)', function(assert) {
    var result = sumOfStringNumbers('112');     
    assert.equal(result, 4, 'Passed!');
});

QUnit.test('7. Is number even (task5)', function(assert) {
    var result = isEven(2);     
    assert.equal(result, true, 'Passed!');
});
