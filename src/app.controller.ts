import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { ForeCastItem } from './types/ForeCastItem.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/forecast')
  async getForecast(
    @Req() request: Request,
  ): Promise<{ forecast: ForeCastItem[] }> {
    const forecast = await this.appService.getForecast(
      request.query.date_time as string,
    );
    return { forecast };
  }
}
