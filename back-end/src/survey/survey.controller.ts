import { Controller, Get } from '@nestjs/common';
import {SurveyService} from './survey.service'
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from 'src/auth/auth.guard';
import { Public } from 'src/auth/auth.module';
@Controller()
export class SurveyController {
  constructor(private readonly surveyService: SurveyService ) {}

  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  @Get('survey-result')
  surveyResults(): Array<string> {
    return this.surveyService.surveyResults();
  }
}
