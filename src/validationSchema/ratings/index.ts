import * as yup from 'yup';

export const ratingValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  comment: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
