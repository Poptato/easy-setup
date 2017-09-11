const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
const request = require("request-promise-native");

const expect = chai.expect;
chai.use(sinonChai);

const discoveryService = "http://localhost:4001";

describe("Application Flow", function() {
    describe("get order receipt", function() {
        it("should return the order's receipt", async function() {
            let mockReceipt = require("../assets/mock-receipt.json");

            let res = await request.get(
                `${discoveryService}/os/orders/17eebf76-a81a-446b-9465-d0713d3c4377/receipt`,
                {json: true});

            expect(res).to.deep.equal(mockReceipt);
        });
    });
});
