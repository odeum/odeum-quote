process.env.NODE_ENV = 'test'

var monogoose = require("mongoose");
var product = require('../Model/product');
var test = require('./models');

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('/Get Product', ()=> {
    it('it should GET all produckts', (done) => {
        chai.request('http://localhost:3000/product/')
        .get('products/')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.be.eql(test)
        done();
        })
    })
})