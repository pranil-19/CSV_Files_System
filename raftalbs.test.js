

// import math file
const {findBooksAndMagsByAuthor} = require('./raftlabs');

test('Finding a book by isbn', () =>{
	const result = [];
	expect(findBookOrMag(books, magazines, "2221-5548-8585")).toEqual(result)
})

// describe('raftlabs.js tests', () => {
//     describe('run.add() Test', () => {
//         it('should equal 2', () => {
//             const result = math.add(1, 1);
//             expect(result).to.equal(2);
//         });
//         it('should equal 4', () => {
//             const result = math.add(2, 2);
//             expect(result).to.equal(4);
//         });
//     });