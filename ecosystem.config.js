module.exports = {
  apps: [
    {
      name: "nodemongodbdocker",
      script: "./src/index.js",
      exec_interpreter: "babel-node",
      watch: true,
      ignore_watch: ["node_modules"],
      watch_options: { followSymlinks: false },
      env: {
        NODE_ENV: "production",
        MONGODB_URL: "mongodb://mongo:27017/nodemongodbdocker",
        EMAIL_HOST: "mx.something.com",
        EMAIL_PORT: "25",
        EMAIL_USER: "user",
        EMAIL_PASS: "youpasshere"
      }
    }
  ]
};
