function add(x, y) {
  return x + y;
}
describe('Add', () => {
  it('should be 2 if 1 add 1', () => {
    //arrange

    //act
    let result = add(1, 1);
    //assert
    expect(result).toBe(2);
  })
})