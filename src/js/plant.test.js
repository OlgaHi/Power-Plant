const rewire = require("rewire")
const plant = rewire("./plant")
const storeState = plant.__get__("storeState")
// @ponicode
describe("storeState", () => {
    test("0", () => {
        let callFunction = () => {
            storeState()
        }
    
        expect(callFunction).not.toThrow()
    })
})
