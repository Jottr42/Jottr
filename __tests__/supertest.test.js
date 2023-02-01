const request = require("supertest");
const server = 'http://localhost:3000';

//testing post route to user/verify
describe('Requests to /user/verify should work', () => {
  test('POST /user/verify', (done) => {
    request(server)
    .post("/user/verify")
    .send({
      name: 'TESTNAME',
      email: 'TESTEMAIL',
      password: 'TESTPASSWORD',
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    })
  });
});

//test get request for user/:user_id
describe('Requests to /user/:user_id should work', () => {
  test('GET /user/user_id', (done) => {
    request(server)
    .get("/user/1")
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    })
  });
});

//testing get route to record/:record_id
describe('Requests to /record/:record_id should work', () => {
  test('GET /record/:record_id', (done) => {
    request(server)
    .post("/record/1")
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    })
  });
});

//testing get route to client/:client_id
describe('Requests to /user/verify should work', () => {
  test('GET /client/:client_id', (done) => {
    request(server)
    .post("/client/1")
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    })
  });
});