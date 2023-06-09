import { Module } from '@nestjs/common';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';

@Module({
  imports: [],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
