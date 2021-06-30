const functions = require('./functions')

//  toBe
test('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4)
})

//  not
test('adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5)
})

/**
 * Check for truthy and falsy values
 * 
 * toBeNull matches only null
 * toBeUndefined matches only undefined
 * toBeDefined is the opposite of toBeUndefined
 * toBeTruthy matches anything that an if statement treats as true
 * toBeFalsy matches anything that an if statement treats as false
 */

 //  toBeNull
 test('should be null', () => {
     expect(functions.isNull()).toBeNull()
 })

//  toBeFalsy
 test('should be falsy', () => {
     expect(functions.checkValue(null)).toBeFalsy()
 })
 
//  toEqual
//  toBe is for primite values
test('user should be pratt vaidya object', () => {
     expect(functions.createUser(null)).toEqual({firstName: 'Pratt', lastName: 'Vaidya'})
 })

//  less than and greater than
test('should be under 1600', () => {
    const load1 = 800
    const load2 = 700
    expect(load1 + load2).toBeLessThan(1600)
    // expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// regex
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

//arrays
test('admin should be in usernames', () => {
    usernames = ['john','karen','admin']
    expect(usernames).toContain('admin')
})

// Working with async data
// Promise
// test('User name fetched should be Leanne Graham', () => {
//     expect.assertions(1)    // expect to have 1 assertion in this test
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham')
//         })
// })

// Async Await
test('User name fetched should be Leanne Graham', async () => {
    expect.assertions(1)    // expect to have 1 assertion in this test
    const data = await functions.fetchUser(1)
    expect(data.name).toEqual('Leanne Graham')    
})

test('Handle exceptions for fetchUser', async () => {
    expect.assertions(1)    // expect to have 1 assertion in this test
    const err = await functions.fetchUser(0)
    expect(err).toBe('error')    
})