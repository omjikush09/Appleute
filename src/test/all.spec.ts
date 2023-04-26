import chai, { expect } from "chai";
import chatHttp from "chai-http";

import server from "../index";
chai.use(chatHttp);

let token: string;

describe("User API test", () => {
  it("Create User", (done: any) => {
    chai
      .request(server)
      .post("/api/user")
      .send({
        email: "omjikush09@gmail.com",
        password: "232343",
      })
      .end((err, response) => {
        expect(response.status).to.be.equal(200);
        expect(response.body).to.have.all.keys("status", "jwtToken");
        done();
      });
  });

  it("Login User", (done: any) => {
    chai
      .request(server)
      .post("/api/login")
      .send({
        email: "omjikush09@gmail.com",
        password: "232343",
      })
      .end((err, response) => {
        token = response.body.jwt_token;
        expect(response.status).to.be.equal(200);
        expect(response.body).to.have.all.keys("status", "jwtToken");
        done();
      });
  });
});
