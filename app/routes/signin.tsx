import { ActionFunctionArgs, json } from "@remix-run/node";
import { useActionData, useNavigate } from "@remix-run/react";
import { Button } from "~/components/Button";
import { FormInput } from "~/components/FormInput";
import { AuthService } from "~/services/authService";
import { createUserSession } from "~/utils/session.server";

const authService = new AuthService();

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const redirectTo = "/";
  try {
    const user = await authService.login({ email, password });
    return createUserSession(user.access_token, redirectTo);
  } catch (err) {
    return "error";
  }
};

export default function SignIn() {
  const navigate = useNavigate();
  const actionData = useActionData<typeof action>();
  console.log(actionData);
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to Comment
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <FormInput id="email" name="email" type="email" required />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between ">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <FormInput
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-1">
            <Button type="submit" buttonText="Login" />
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Or create an account{" "}
          <a
            onClick={() => {
              navigate("/signup");
            }}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            sign-up
          </a>
        </p>
      </div>
    </div>
  );
}
