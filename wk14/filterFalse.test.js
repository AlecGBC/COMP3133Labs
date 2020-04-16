const filterFalse = require('./ex3');

describe("Show only authenticated users", () => {
    test("Search false authentication and show only the ones with true value", () => {
        const input = [
            {authenticated: false, user_id: "1234567890"},
            {authenticated: true, user_id: "0987654321"},
            {authenticated: true, user_id: "1234567899"},
            {authenticated: false, user_id: "0987654322"},
            {authenticated: true, user_id: "1234567888"}
        ];

        const output = [
            {authenticated: true, user_id: "0987654321"},
            {authenticated: true, user_id: "1234567899"},
            {authenticated: true, user_id: "1234567888"}
        ];

        expect(filterFalse(input)).toEqual(output);
    });
});