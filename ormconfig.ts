
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'db',
    entities: ['src/**/**/*.entity.js'],
    synchronize: true,
    logging: true,
}

export default config;
