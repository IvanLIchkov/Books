const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require ('./server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Books API', ()=>{
    let bookId;
})