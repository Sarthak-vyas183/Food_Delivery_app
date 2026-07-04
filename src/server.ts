import app from "./app.js";
import { Config } from "./config/index.js";

const startserver = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => console.log("server is listing on port " + PORT))
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

startserver();