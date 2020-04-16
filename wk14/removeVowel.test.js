const removeVowel = require('./removeVowel');

describe("Remove vowels", () => {
    test("Search for and replace vowels with a space", () => {
        const input = "A dog is a friendly pet if it’s trained properly";

        const output = "  d g is   fr  ndly p t  f  t’s tr  n d pr p rl ";
        expect(removeVowel(input)).toEqual(output);
    });
});