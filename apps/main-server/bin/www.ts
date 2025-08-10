import http from "http";
import { config } from "dotenv";
import { dotEnvOptions } from "~/libs/dotenv";

import app from "../src/app";

config(dotEnvOptions);

const PORT = process.env.PORT;

if (!PORT) {
    throw new Error("PORT is not defined in the environment variables.");
}

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
