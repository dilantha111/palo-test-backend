import { IsString } from 'class-validator';

export class GetForecastQuery {
  // TODO: add custom regex validation
  @IsString()
  date_time: string;
}
