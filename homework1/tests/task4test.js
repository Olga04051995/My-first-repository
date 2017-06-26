'use strict';

QUnit.test('1. Is number Palindrome (task4)', function(assert) {
    var result = isNumberPalindromic(404);     
    assert.equal(result, 404, 'Passed!');
});

QUnit.test('2. Is number Palindrome (task4)', function(assert) {
    var result = isNumberPalindromic(71233218);     
    assert.equal(result, 123321, 'Passed!');
});

QUnit.test('3. Is number Palindrome (task4)', function(assert) {
    var result = isNumberPalindromic(1);     
    assert.equal(result, false, 'Passed!');
});

QUnit.test('4. Is number Palindrome (task4)', function(assert) {
    var result = isNumberPalindromic(12345);     
    assert.equal(result, false, 'Passed!');
});