import { FormComponent } from "@/features/login/components/FormComponent/FormComponent";

export default function Login() {
  return (
    <div className="max-w-3xl px-4 mx-auto">
      <h1 className="text-2xl font-bold mb-4">JavaScriptをオフにしても動作するログインフォーム</h1>
      <FormComponent />
    </div>
  );
}