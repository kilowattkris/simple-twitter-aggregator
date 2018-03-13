const config = {
  API_URL: (typeof process.env.API_URL !== "undefined" ? process.env.API_URL : "http://localhost:3030")
};

export default config;