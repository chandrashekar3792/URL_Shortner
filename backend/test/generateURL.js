let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);
var host = "http://0.0.0.0:8090";
var path = "/api/v1/shorturl/new";
describe('URL Shortner',()=>{
	describe('/POST it should not generate Short URL', () => {
		it('If Actual URL is empty, it should not generate ShortURL', (done) => {
			chai.request(host)
                .post(path)
                .set('Content-Type', 'application/json')
                .send({})
				.then((res) => {
					res.should.have.status(404);
					done();
				}).catch((err) => {
					console.log('err',err);
					err.should.have.status(500);
				done();
			});
		});
	});
	describe('/POST it should generate Short URL', () => {
		it('If Actual URL is not empty, it should generate ShortURL', (done) => {
			chai.request(host)
				.post(path)
				.set('Content-Type', 'application/json')
				.send({ originalUrl:"https://www.google.com"})
				.then((res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('status').eq(true);
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('originalUrl');
                    res.body.data.should.have.property('shortid');
					res.body.data.originalUrl.should.be.eql('https://www.google.com');
					done();
				}).catch((err) => {
					console.log('err',err);
					err.should.have.status(500);
				done();
			});
		});
	});
	describe('/POST it should generate Short URL', () => {
		it('If Both Actual URL and Custom path not empty, it should generate ShortURL', (done) => {
			chai.request(host)
				.post(path)
				.set('Content-Type', 'application/json')
				.send({ 
                    originalUrl:"https://www.facebook.com",
                    shortid:"appuser"
                })
				.then((res) => {
                    res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('status').eq(true);
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('originalUrl');
                    res.body.data.should.have.property('shortid');
                    res.body.data.originalUrl.should.be.eql('https://www.facebook.com');
                    res.body.data.shortid.should.be.eql('appuser');
					done();
				}).catch((err) => {
					err.should.have.status(500);
				done();
			});
		});
	});
});
