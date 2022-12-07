 const chai=window.chai
 const expect=chai.expect

 describe('sum',()=>{
    it('should return the sum of each elements in the array',()=>{
        expect(sum([3,4,5,6])).to.deep.equal(18);
    })
 })
 describe('multiply',()=>{
    it('should return the multiplication of each elements in the array',()=>{
        expect(multiply([3,4,5])).to.deep.equal(60);
    })
 })
 describe('reverse',()=>{
    it('should return the reversed string of the given string',()=>{
        expect(reverse("Haftish")).to.deep.equal("hsitfaH");
    })
 })
 describe('filterLongWords',()=>{
    it('should return the word greater than the given integer',()=>{
        assert.deepEqual(['Arsu', 'Dani','Sami'], filterLongWords(['JI', 'ok', 'god', 'hip','Arsu', 'Dani','Sami'], 3));
    })
 })
