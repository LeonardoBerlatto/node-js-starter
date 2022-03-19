import { sum } from "../../src/service/sum.service";


it('should sum', ()=> {
    expect(sum(1,2)).toEqual(3)
})