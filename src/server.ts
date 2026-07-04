import app from "./app.js";
import { Config } from "./config/index.js";
import logger from "./config/logger.js";

const startserver = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => {
             logger.info('server is listing on port :', {PORT})
             logger.error('internal server error : ');
        })
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

startserver();