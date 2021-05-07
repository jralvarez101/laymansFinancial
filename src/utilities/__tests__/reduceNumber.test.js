import reduceNumber from '../reduceNumber'

describe('reduceNumber',()=>{
    it ('reduces number by 1000',()=>{
        expect(reduceNumber(2000)).toBe(2)
    })
    it ('returns 0 is value is undefined',()=>{
        expect(reduceNumber(undefined)).toBe(0)
    })
    it ('reduces number by 1000 on positive number',()=>{
        expect(reduceNumber(4000)).toBe(4)
    })
    it ('returns 0 if the value is 0',()=>{
        expect(reduceNumber(0)).toBe(0)
    })
    it ('returns 0 if the value is a string',()=>{
        expect(reduceNumber('0')).toBe(0)
    })
    it ('reduces value by 1000 if the value is a negative number',()=>{
        expect(reduceNumber(-5000)).toBe(-5)
    })
    
})