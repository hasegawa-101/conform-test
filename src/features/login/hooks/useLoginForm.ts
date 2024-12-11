"use client";

import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';
import { login } from '@/app/actions';
import { loginSchema } from '@/schemas/schemas';

export const useLoginForm = () => {

  const [state, submitAction, isPending] = useActionState(login, undefined);

  const [form, fields] = useForm({
    lastResult: state,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },
    shouldValidate: "onBlur",
  });

  return { submitAction, isPending, form, fields };
};