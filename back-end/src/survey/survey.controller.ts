import { Controller, Get } from '@nestjs/common';
import {SurveyService} from './survey.service'
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller()
export class SurveyController {
  constructor(private readonly surveyService: SurveyService ) {}

  @Roles(Role.Admin)
  @Get('survey-result')
  surveyResults(): Array<string> {
    return this.surveyService.surveyResults();
  }
}
