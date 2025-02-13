import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService} from '@nestjs/config';

import * as Joi from 'joi';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { DatabaseModule } from './common/database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
       // This will load the .env file and make it available to the app
       ConfigModule.forRoot({
        isGlobal: true,
        validationSchema: Joi.object({
          MONGODB_URI: Joi.string().required(),
        }),
      }),
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        // This will automatically generate the schema.gql file
        autoSchemaFile: true,
      }),
      DatabaseModule,
      UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
