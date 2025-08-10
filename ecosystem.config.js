module.exports = {
    apps: [
        {
            name: "main-server",
            script: "apps/main-server/bin/www",
            interpreter: "ts-node",
            watch: ["apps/main-server/src"],
            env: {
                NODE_ENV: "development",
                PORT: 3000,
            },
        },
        {
            name: "points-relay-server",
            script: "apps/points-relay-server/bin/www",
            interpreter: "ts-node",
            watch: ["apps/points-relay-server/src"],
            env: {
                NODE_ENV: "development",
                PORT: 4000,
            },
        },
    ],
};
