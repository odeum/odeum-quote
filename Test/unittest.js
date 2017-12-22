var products = require('./models');
var quotation = require('./quotationModel');
var mongoose = require('../mongoDb/connection')
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
chai.use(chaiHttp);

describe('/Get Product', () => {
    it('it should GET all produckts', (done) => {
        chai.request('http://localhost:8080/')
        .get('api/product/products')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.be.eql(products)
        done();
        })
    })
})

describe('/Qoute', () => {
    after(() => {
        mongoose.mongoose.connection.db.dropCollection('Quotation')
    })
    it('it should create a quotation', (done) => {
        chai.request('http://localhost:8080/')
        .post('api/quotation/post')
        .set('content-type', 'application/json')
        .send(qoutation)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
        done()
        })
    })
    it('it should Get all quotations', (done) => {
        chai.request('http://localhost:8080/')
        .get('api/quotation/quotations')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            res.body.quotation.should.have.lengthOf(1);
        done();
        })
    })
})

