import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config';
import { ConfigType } from '@nestjs/config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { connection, user, password, cluster, mongoDbName } =
          configService.database;
        return {
          uri: `${connection}://${user}:${password}@${cluster}.q040o.mongodb.net/?retryWrites=true&w=majority`,
          user,
          pass: password,
          dbName: mongoDbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
})
export class DatabasesModule {}
