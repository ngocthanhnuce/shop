const { pagination } = require("./../index");

test("pagination simple 1", () => {
  const result = pagination({ totalItems: 100, currentPage: 1 });
  expect(result).toEqual({
    totalPage: 20,
    nextPage: 2,
    prevPage: 0,
    items: [1, 2, 3, 4, 5],
  });
});

// test("pagination simple 2", () => {
//   const result = pagination({ totalItems: 5, currentPage: 1 });
//   expect(result).toEqual({
//     totalPage: 1,
//     nextPage: 0,
//     prevPage: 0,
//     items: [1],
//   });
// });

// test("pagination simple 3", () => {
//   const result = pagination({ totalItems: 4, currentPage: 1, pageSize: 3 });
//   expect(result).toEqual({
//     totalPage: 2,
//     nextPage: 2,
//     prevPage: 0,
//     items: [1, 2],
//   });
// });

// test("pagination simple 4", () => {
//   const result = pagination({ totalItems: 6, currentPage: 1, pageSize: 3 });
//   expect(result).toEqual({
//     totalPage: 2,
//     nextPage: 2,
//     prevPage: 0,
//     items: [1, 2],
//   });
// });

// test("pagination simple 5", () => {
//   const result = pagination({ totalItems: 100, currentPage: 2 });
//   expect(result).toEqual({
//     totalPage: 20,
//     nextPage: 3,
//     prevPage: 1,
//     items: [1, 2, 3, 4, 5],
//   });
// });

// test("pagination simple 5_1", () => {
//     const result = pagination({ totalItems: 100, currentPage: 3 });
//     expect(result).toEqual({
//       totalPage: 20,
//       nextPage: 4,
//       prevPage: 2,
//       items: [1, 2, 3, 4, 5],
//     });
//   });
  
// test("pagination simple 5_2", () => {
//   const result = pagination({ totalItems: 99, currentPage: 4 });
//   expect(result).toEqual({
//     totalPage: 20,
//     nextPage: 5,
//     prevPage: 3,
//     items: [2, 3, 4, 5, 6],
//   });
// });

// test("pagination simple 6", () => {
//   const result = pagination({ totalItems: 7, currentPage: 2, pageSize: 3 });
//   expect(result).toEqual({
//     totalPage: 3,
//     nextPage: 3,
//     prevPage: 1,
//     items: [1, 2, 3],
//   });
// });

// test("pagination simple 7_1", () => {
//     const result = pagination({ totalItems: 23, currentPage: 8, pageSize: 3 });
//     expect(result).toEqual({
//       totalPage: 8,
//       nextPage: 0,
//       prevPage: 7,
//       items: [4, 5, 6, 7, 8],
//     });
//   });
  
// test("pagination simple 7_2", () => {
//   const result = pagination({ totalItems: 23, currentPage: 7, pageSize: 3 });
//   expect(result).toEqual({
//     totalPage: 8,
//     nextPage: 8,
//     prevPage: 6,
//     items: [4, 5, 6, 7, 8],
//   });
// });

  
// test("pagination simple 7_3", () => {
//     const result = pagination({ totalItems: 23, currentPage: 6, pageSize: 3 });
//     expect(result).toEqual({
//       totalPage: 8,
//       nextPage: 7,
//       prevPage: 5,
//       items: [4, 5, 6, 7, 8],
//     });
//   });
  
  
// test("pagination simple 7_4", () => {
//     const result = pagination({ totalItems: 23, currentPage: 5, pageSize: 3 });
//     expect(result).toEqual({
//       totalPage: 8,
//       nextPage: 6,
//       prevPage: 4,
//       items: [3, 4, 5, 6, 7],
//     });
//   });
  

// test("pagination simple 8", () => {
//   const result = pagination({ totalItems: 23, currentPage: 5, pageSize: 4, maxDisplay: 7 });
//   expect(result).toEqual({
//     totalPage: 6,
//     nextPage: 6,
//     prevPage: 4,
//     items: [1,2,3,4,5,6],
//   });
// });


// test("pagination simple 8_1", () => {
//     const result = pagination({ totalItems: 24, currentPage: 5, pageSize: 3, maxDisplay: 7 });
//     expect(result).toEqual({
//       totalPage: 8,
//       nextPage: 6,
//       prevPage: 4,
//       items: [2,3,4,5,6,7,8],
//     });
//   });


//   test("pagination simple 8_2", () => {
//     const result = pagination({ totalItems: 24, currentPage: 8, pageSize: 3, maxDisplay: 7 });
//     expect(result).toEqual({
//       totalPage: 8,
//       nextPage: 0,
//       prevPage: 7,
//       items: [2,3,4,5,6,7,8],
//     });
//   });

//   test("pagination simple 8_2", () => {
//     const result = pagination({ totalItems: 40, currentPage: 8, pageSize: 3, maxDisplay: 7 });
//     expect(result).toEqual({
//       totalPage: 14,
//       nextPage: 9,
//       prevPage: 7,
//       items: [5,6,7,8,9,10,11],
//     });
//   });
