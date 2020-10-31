/* eslint-disable */
const withCSS = require("@zeit/next-css");
const production = process.env.NODE_ENV === "production";
const path = require("path");

const isGHAMaster = process.env.GITHUB_REF && process.env.GITHUB_REF.includes("master");
const isGHAStage = process.env.GITHUB_REF && process.env.GITHUB_REF.includes("development");
//const isDev = !process.env.GITHUB_REF
const stage = isGHAMaster ? "prod" : isGHAStage ? "stage" : "dev";

const baseUrls = {
  prod: "https://signalsofhope.buchmesse.de",
  stage: "https://stage-signalsofhope.buchmesse.de",
  dev: "http://localhost:3000",
};
const backendUrls = {
  prod: "https://signalsofhope.buchmesse.de",
  stage: "https://stage-signalsofhope.buchmesse.de", //"https://stage-signalsofhope.buchmesse.de",
  dev: "https://stage-signalsofhope.buchmesse.de", //"http://localhost:1337"
};

module.exports = withCSS({
  env: {
    FRONTEND_URL: baseUrls[stage],
    BACKEND_URL: backendUrls[stage],
    STAGE: stage,
  },
});
