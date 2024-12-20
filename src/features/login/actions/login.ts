"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { loginSchema } from "@/schemas/schemas";

// サーバー側でもバリデーションを行う
// バリデーションが成功したらリダイレクトする
// バリデーションが失敗したら submission.reply() を返す
export async function login(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  });

  console.log(submission);

  if (submission.status !== "success") {
    // reply()の結果は useActionState の state に渡される
    return submission.reply();
  }

  redirect("/dashboard");
}