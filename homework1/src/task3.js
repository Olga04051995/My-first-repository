'use strict'; 
let task3 = sortTriangles; 
function sortTriangles (triangles) {
    let sortedTriangles = [],
        firstElementArea = 0,
        secondElementArea = 0;

    function calculateTriangleArea (a, b, c) {
        let p = (a + b + c) / 2;
        return Math.sqrt (p * (p - a) * (p - b) * (p - c));
    }

    sortedTriangles = triangles.sort(function (firstElement, secondElement) {
        firstElementArea = calculateTriangleArea(firstElement.a, firstElement.b, firstElement.c);
        secondElementArea = calculateTriangleArea(secondElement.a, secondElement.b, secondElement.c);

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

}
