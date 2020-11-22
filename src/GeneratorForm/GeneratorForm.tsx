import React, { Suspense } from 'react';
import { Formik, Field, FormikProps } from 'formik';
import * as Yup from 'yup';
const GeneratedPassword = React.lazy(() => import('../GeneratedPassword/GeneratedPassword'));
import { FormWrapper, Button, InputGroup, ErrorDisplay } from './style';
import { generatePassword } from './utils';
import Checkbox from '../Checkbox/Checkbox';

interface Values {
    length: number;
    inputLetters: boolean;
    inputNumbers: boolean;
    inputSymbols: boolean;
    password: string;
}

const LengthSchema = Yup.object().shape({
    length: Yup.number()
        .min(1, 'Number must be bigger or equal 1')
        .max(25, 'Number must be less or equal 25'),
});

const GeneratorForm: React.FC = () => {
    return (
        <Formik
            initialValues={{
                length: 6,
                inputLetters: true,
                inputNumbers: false,
                inputSymbols: false,
                password: '',
            }}
            validationSchema={LengthSchema}
            onSubmit={(values, { setFieldValue }) => {
                setFieldValue('password', generatePassword(values));
            }}
        >
            {({
                values: { password, inputLetters, inputNumbers, inputSymbols },
                errors,
                touched,
            }: FormikProps<Values>) => {
                const isDisabled =
                    !inputLetters && !inputNumbers && !inputSymbols;
                return (
                    <FormWrapper>
                        <InputGroup>
                            <label htmlFor='length'>Length</label>
                            <Field name='length' type='number' />
                        </InputGroup>
                        {errors.length && touched.length ? (
                            <ErrorDisplay>{errors.length}</ErrorDisplay>
                        ) : null}
                        <Checkbox
                            type='checkbox'
                            name='inputLetters'
                            label='Use Letters'
                        />
                        <Checkbox
                            type='checkbox'
                            name='inputNumbers'
                            label='Use Numbers'
                        />
                        <Checkbox
                            type='checkbox'
                            name='inputSymbols'
                            label='Use Symbols'
                        />

                        <Button disabled={isDisabled} type='submit'>
                            Generate
                        </Button>

                        {password && !isDisabled && (
                            <Suspense fallback={<></>}>
                                <GeneratedPassword
                                    name='password'
                                    type='text'
                                />
                            </Suspense>
                        )}
                    </FormWrapper>
                );
            }}
        </Formik>
    );
};

export default GeneratorForm;
