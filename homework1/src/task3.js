'use strict'; 

function task3 (triangles) {
    let result = 0;

    try {
        preValidateTask3(triangles);
        result = sortTriangles(triangles);
    } catch (ex) {
        console.log({status: "failed", reason: ex.message});
    }  

    return result;
}

function preValidateTask3 (triangles) {
    if (!(triangles instanceof Array)) {
        throw new Error('Entered argument should be array type')
    } 
}

function sortTriangles (triangles) {
    let sortedTriangles = [];

    sortedTriangles = triangles.sort (function (first, second) {
        let firstArea = calculateTriangleArea(first.a, first.b, first.c),
            secondArea = calculateTriangleArea(second.a, second.b, second.c);

        return firstArea - secondArea;
    });

    return sortedTriangles.map(function (element) {
    	return element.vertices;
    });
}

function calculateTriangleArea (a, b, c) {
        let p = (a + b + c) / 2;

        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }
