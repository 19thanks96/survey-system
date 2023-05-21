import { Injectable } from '@nestjs/common';

@Injectable()
export class SurveyService {
  surveyResults(): Array<string> {
    return ['big', 'pipiska', 'ne moya']
  }
}

