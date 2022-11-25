import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';

const isProd = process.env.NODE_ENV === 'production';


const prettifyLogs = LoggerModule.forRoot({
  pinoHttp: {
    transport: {
      target: 'pino-pretty',
      options: {
        singleLine: true,
      },
    },
  },
});


@Module({
  imports: [
    !isProd ? prettifyLogs : null
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
