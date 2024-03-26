import { ActionFunctionArgs, json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireUserToken } from "~/utils/session.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: ActionFunctionArgs) => {
  const userId = await requireUserToken(request);
  return { access_token: userId, data: json({}) };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  console.log(data);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
