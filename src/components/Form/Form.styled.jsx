import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)``;

export const FormField = styled.label``;

export const ErrorMessage = styled(FormikError)`
  color: red;
`;
