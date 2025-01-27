import mongoose, { ConnectOptions } from "mongoose";
import { InternalServerError } from "../../core/errors/Errors";

const options = {} as ConnectOptions;
const uri = process.env.MONGODB_URL as string;

class MongoDB {
  private static instance: MongoDB;

  private constructor() {}

  public static getInstance(): MongoDB {
    if (!MongoDB.instance) {
      MongoDB.instance = new MongoDB();
    }
    return MongoDB.instance;
  }

  async connect(): Promise<void> {
    try {
      await mongoose.connect(uri, options);

      this.isConnected() === true
        ? console.log("Database connecting")
        : console.log("Database not connecting");
    } catch (error) {
      if (error instanceof mongoose.Error) {
        console.log(`Error connecting to database: ${error.message}`);
        throw new InternalServerError("Internal server error");
      } else {
        console.log(`Unknown error: ${error}`);
        throw new InternalServerError("Internal server error");
      }
    }
  }

  public isConnected(): boolean {
    return mongoose.connection.readyState === 1;
  }

  public async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }
}

export { MongoDB };
