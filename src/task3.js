var task3 = sortTriangles; 
function sortTriangles(triangles) {
    function calculateTriangleArea(a, b, c) {
        var p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }

    var sortedTriangles = triangles.sort(function(firstElement, secondElement) {
        var firstElementArea = calculateTriangleArea(firstElement.a, firstElement.b, firstElement.c);
        var secondElementArea = calculateTriangleArea(secondElement.a, secondElement.b, secondElement.c);

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
