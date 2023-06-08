import operate from "logic/operate";

describe('Testing Operation', () => {
    test('operate', () => {
        const data = operate('2','4','+')
        expect(data).toBe('6');
    })

    test('operate', () => {
        const data = operate('8','4','-')
        expect(data).toBe('4');
    })
    test('operate', () => {
        const data = operate('8','4','x')
        expect(data).toBe('32');
    })
    test('operate', () => {
        const data = operate('8','4','÷')
        expect(data).toBe('2');
    })
})