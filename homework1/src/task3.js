'use strict'; 
function task3 (triangles) {
    let result = 0;

    try{
        preValidateTask3(triangles);
        result = sortTriangles(triangles);
    } catch (ex) {
        console.log({status: "failed", reason: ex.message});
    }  

    return result;
}

function preValidateTask3 (triangles) {
    if (!(triangles instanceof Array)) {
        throw new Error ('Entered argument should be array type')
    } 
}

function sortTriangles (triangles) {
    let sortedTriangles = [];

    sortedTriangles = triangles.sort (function (firstElement, secondElement) {
        let firstElementArea = calculateTriangleArea(firstElement.a, firstElement.b, firstElement.c);
        let secondElementArea = calculateTriangleArea(secondElement.a, secondElement.b, secondElement.c);

        if (firstElementArea < secondElementArea) {
            return 1;
        }

        if (firstElementArea > secondElementArea) {
            return -1;
        }

        return 0;
    });

    return sortedTriangles.map(function (element) {
    	return element.vertices;
    });

    function calculateTriangleArea (a, b, c) {
        let p = (a + b + c) / 2;

        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }
}
