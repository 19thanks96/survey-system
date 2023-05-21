import { Controller, Get } from '@nestjs/common';
import {SurveyService} from './survey.service'

@Controller()
export class SurveyController {
  constructor(private readonly surveyService: SurveyService ) {}

  @Get('survey-result')
  surveyResults(): Array<string> {
    return this.surveyService.surveyResults();
  }
}
