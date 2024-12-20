"use client";
import { useLoginForm } from '@/features/login/hooks';
import { getInputProps, getFormProps } from '@conform-to/react';
import { FC } from 'react';

export const FormComponent:FC = () => {
    const { form, fields, submitAction, isPending } = useLoginForm();
  return (
    <form action={submitAction} {...getFormProps(form)}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={fields.email.id}>Email</label>
        <input
          {...getInputProps(fields.email, { type: 'email' })}
          className="border border-gray-300 rounded-md p-2"
        />
        {fields.email.errors && <p className="text-red-500" id={`${fields.email.id}-error`}>{fields.email.errors}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor={fields.password.id}>Password</label>
        <input
           {...getInputProps(fields.password, { type: 'password' })}
           className="border border-gray-300 rounded-md p-2"
        />
        {fields.password.errors && <p className="text-red-500" id={`${fields.password.id}-error`}>{fields.password.errors}</p>}
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor={fields.age.id}>Age</label>
        <input
           {...getInputProps(fields.age, { type: 'text' })}
           pattern="\d+"
           inputMode="numeric"
           className="border border-gray-300 rounded-md p-2"
        />
        {fields.age.errors && <p className="text-red-500" id={`${fields.age.id}-error`}>{fields.age.errors}</p>}
        </div>
        <button type="submit" disabled={isPending}>Login</button>
      </div>
      
      </form>
  )
};
