"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { login } from "@/app/actions";
import { loginSchema } from "@/schemas/schemas";
import { useActionState } from "react";

export default function Home() {
  const [state, action,isPending] = useActionState(login, undefined);
  const [form, fields] = useForm({
    lastResult: state,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },
    shouldValidate: "onBlur",
  });

  return (
    <div className="max-w-3xl mx-auto">
    <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={fields.email.id}>Email</label>
        <input
          type="email"
          name={fields.email.name}
          id={fields.email.id}
          className="border border-gray-300 rounded-md p-2"
          autoComplete="email"
          aria-invalid={!!fields.email.errors}
          aria-describedby={
            !!fields.email.errors
              ? `${fields.email.id}-error`
              : undefined
          }
        />
        <p className="text-red-500" id={`${fields.email.id}-error`}>{fields.email.errors}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor={fields.password.id}>Password</label>
        <input
          type="password"
          name={fields.password.name}
          id={fields.password.id}
          className="border border-gray-300 rounded-md p-2"
          autoComplete="password"
          aria-invalid={!!fields.password.errors}
          aria-describedby={
            !!fields.password.errors
              ? `${fields.password.id}-error`
              : undefined
          }
        />
        <p className="text-red-500" id={`${fields.password.id}-error`}>{fields.password.errors}</p>
        </div>
        <button type="submit" disabled={isPending}>Login</button>
      </div>
      </form>
    </div>
  );
}