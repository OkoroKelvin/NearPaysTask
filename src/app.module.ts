import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/User';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { ShoppingModule } from './shopping/shopping.module';
import { ItemsModule } from './items/items.module';
import { Shopping } from './shopping/Shopping';
import { Item } from './items/Item';


@Module({
  imports: [UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [User,Shopping,Item],
          synchronize: true,
    }),
    inject: [ConfigService],
}),
    AuthModule,
    ShoppingModule,
    ItemsModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {constructor(private dataSource: DataSource) {}}
