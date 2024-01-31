import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.local.env'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory:(configService:ConfigService)=>({uri:configService.get("MONGO_URI")}),
      inject: [ConfigService],
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
