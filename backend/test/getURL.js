let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
var host = "http://0.0.0.0:8090";
const pathActual = "/appuser";
const pathInvalid ="/eiwiwoow"
chai.use(chaiHttp);

describe('Redirecting To Actual URL ',()=>{
	describe('/GET it should not direct URL,', () => {
		it(' it should not redirect,if shortid is incorrect', (done) => {
			chai.request(host)
                .get(pathInvalid)
                .set('Content-Type', 'application/json')
				.then((res) => {
					res.should.have.status(400);
					done();
				}).catch((err) => {
					console.log('err',err);
				done();
			});
		});
	});
	describe('/GET it should redirect to Actual URL', () => {
		it('it should redirect,if shortid is correct', (done) => {
			chai.request(host)
				.get(pathActual)
                .set('Content-Type', 'application/json')
				.then((res) => {
					res.should.have.status(301);
					done();
				}).catch((err) => {
					console.log('err',err);
				done();
			});
		});
	});
});
