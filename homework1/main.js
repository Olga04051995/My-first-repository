try {
    // task1
    console.log("Task 1 render chessboard");
    console.log(drawChessboard(5, 5, "*"));

    // task2
    console.log("Analyze envelopes");
    console.log(analyzeEnvelopes({ a: 3, b: 4 }, { c: 2, d: 3 }));

    // task3
    var triangle1 = { vertices: "CDE", a: 4, b: 6, c: 3 };
    var triangle2 = { vertices: "BCD", a: 3, b: 2, c: 4 };
    var triangle3 = { vertices: "ABC", a: 3, b: 5, c: 3 };

    console.log("Sort triangles");
    console.log(sortTriangles([triangle1, triangle2, triangle3]));

    // task 4
    console.log("Check if number is palindromic");
    console.log(isNumberPalindromic(19339443773));

    // task 5
    console.log("Find what approach of ticket finding occurs more often");
    console.log(luckyTickets({ min: "100000", max: "500000" }))

    // task 6
    console.log("Numeric sequence generation");
    console.log(numericSequence(100, 50));

    // task 7
    console.log("Generate fibonacci sequence with limits");
    console.log(fibonacci({ min: 0, max: 100 }));

} catch (ex) {
    console.log({ status: "failed", reason: ex.message });
}
