import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Measure } from "./entity/measure";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  host: process.env.TYPEORM_HOST || "localhost",
  port: Number(process.env.TYPEORM_PORT) || 5432,
  username: process.env.TYPEORM_USERNAME || "admin",
  password: process.env.TYPEORM_PASSWORD || "admin",
  database: process.env.TYPEORM_DATABASE || "test-shopper",
  synchronize: true,
  logging: false,
  entities: [Measure],
  migrations: ["dist/database/migrations/*.js"],
  subscribers: [],
});
