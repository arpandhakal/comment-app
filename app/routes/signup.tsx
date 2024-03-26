import { useNavigate } from "@remix-run/react";
import { Button } from "~/components/Button";
import { FormInput } from "~/components/FormInput";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Signup to Comment
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
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <FormInput id="email" name="email" type="email" required />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
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
          <div className="flex items-center justify-center">
            <Button type="submit" buttonText="Signup" />
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <a
            onClick={() => {
              navigate("/signin");
            }}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            login
          </a>
        </p>
      </div>
    </div>
  );
}
