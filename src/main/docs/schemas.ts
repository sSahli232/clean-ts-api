
import {
  accountSchema,
  loginParamsSchema,
  errorSchema,
  surveySchema,
  surveysSchema,
  surveyAnswerSchema,
  signUpParamsSchema,
  addSurveyParamsSchema,
  saveSurveyParamsSchema,
  surveyResultSchema
} from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  addSurveyParams: addSurveyParamsSchema,
  error: errorSchema,
  survey: surveySchema,
  surveys: surveysSchema,
  surveyAnswer: surveyAnswerSchema,
  saveSurvey: saveSurveyParamsSchema,
  surveyResult: surveyResultSchema
}
