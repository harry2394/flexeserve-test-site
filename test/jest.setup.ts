// #region Global Imports
import dotenv from "dotenv";
import nock from "nock";
import "jest-styled-components";
import "@testing-library/jest-dom";
// #endregion Global Imports

dotenv.config({ path: ".env.test" });

nock("http://localhost:3000")
    .get("/api/200")
    .reply(200, { success: true });

nock("http://localhost:3000")
    .get("/api/404")
    .reply(404, { success: false });
