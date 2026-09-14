const { describe } = require("mocha");
const assert = require("assert");
const { expect } = require("chai");

let token;

describe("API Test", function () {
  it("Add User Valid", async function () {
    const response = await fetch(
      "https://belajar-bareng.onrender.com/api/add-user",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzg5Mzc5Mjc5LCJleHAiOjE3ODkzODI4Nzl9.3dBt3L8L5NsGLCu-MwZbv_ZDnDMtOtokD2Wo68AzmcQ`,
        },
        method: "POST",
        body: JSON.stringify({
          username: "kamisama",
          age: 35,
        }),
      }
    );

    expect(response.status).to.equal(201);

    const data = await response.json();

    expect(data.message).to.include("User successfully added");

    token = data.token;

  });

  it("Add User Invalid", async function () {
    const response = await fetch(
      "https://belajar-bareng.onrender.com/api/add-user",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzg5Mzc5Mjc5LCJleHAiOjE3ODkzODI4Nzl9.3dBt3L8L5NsGLCu-MwZbv_ZDnDMtOtokD2Wo68AzmcQ`,
        },
        method: "POST",
        body: JSON.stringify({
          username: "kamisama",
          age: "35",
        }),
      }
    );

    expect(response.status).to.equal(400);

    const data = await response.json();

    expect(data.message).to.include("Age must be numeric, not text!");

    token = data.token;

  });

  it("Get User", async function () {
    const start = Date.now();
    const response = await fetch(
      "https://belajar-bareng.onrender.com/api/users",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzg5Mzc4MzQxLCJleHAiOjE3ODkzODE5NDF9.yT2mZUGaYv5E5SNt--qTjhVe-1j9wbNvcVniJrnZkDw`,
        },
      }
    );

    expect(response.status).to.equal(200);

    const data = await response.json();
    expect(data.users[1].username).to.equal("Rafis");
   
    const duration = Date.now() - start;
    expect(duration).to.be.below(700)
  });
});