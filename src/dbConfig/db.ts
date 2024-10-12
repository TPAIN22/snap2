import mongoose from "mongoose";
/**
 * Connects to the MongoDB database.
 * @returns {Promise<void>}
 */
export async function connect(): Promise<void> {
    try {
        // Connect to the MongoDB database
        mongoose.connect(process.env.MONGO_URL!)
        // Get the connection object
        const connection = mongoose.connection;
        // Listen for the connected event
        connection.on("connected", () => {
            console.log("MongoDB connected successfully"); 
        })

        // Listen for the error event
        connection.on('error' , (err) =>{
            console.log(`monngodb is not connected {err}`);
            process.exit();
        })
    } catch (error) {
        // Log any errors that occur
        console.log(error)
    }
}
