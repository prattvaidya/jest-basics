const isAnagram = require('./anagram')

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('Database initialized')
// const closeDatabase = () => console.log('Database closed')

const anagramCheck = () => console.log("checking name")

// using beforeEach inside describe that it's executed for tests inside this block only
describe('checking anagrams', () => {
    beforeEach(() => anagramCheck())

    test('simple test', () => {
        const user = 'jeff'
        expect(user).toBe('jeff')
    })
    
    test('simple test 2', () => {
        const user = 'Karen'
        expect(user).toBe('Karen')
    })
})

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function')
})

test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test('"dormitory" is an anagram of "dirty room##"', () => {
    expect(isAnagram('dormitory', 'dirty room##')).toBeTruthy()
})

test('"hello" is NOT an anagram of "aloha"', () => {
    expect(isAnagram('hello', 'aloha')).toBeFalsy()
})

