import {
  ActionFunctionArgs,
  json,
  redirect,
  type MetaFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import {
  Outlet,
  useActionData,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "@remix-run/react";
import { l } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import { useEffect, useState } from "react";
import { Button } from "~/components/Button";
import { CommentInput } from "~/components/CommentInput";
import { Comments } from "~/components/Comments";
import { Divider } from "~/components/Divider";
import { CommentService } from "~/services/commentService";
import { logout, requireUserToken } from "~/utils/session.server";

const commentService = new CommentService();

export const meta: MetaFunction = () => {
  return [
    { title: "Comment App" },
    { name: "description", content: "Welcome to Comment App" },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const form = await request.formData();
    const userId = await requireUserToken(request);
    const comment = form.get("comment");
    const logoutdata = form.get("logout");

    const _action = form.get("_action");
    if (_action === "LOGOUT") {
      await logout(request);
      return null;
    }

    const result = commentService.postComments({ comment }, userId);
    return result;
  } catch (err) {
    return "error";
  }
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await requireUserToken(request);
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit") || "5";
  const comments = await commentService.getComments(parseInt(limit), userId);
  const mycomments = await commentService.getMyComments(userId);
  return {
    access_token: userId,
    data: comments,
    limit: limit,
    mycomments: mycomments,
  };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const limit = data.limit;
  const navigate = useNavigate();
  const handleNavigation = (e: any) => {
    const { target } = e;
    navigate(`/?limit=${parseInt(data.limit) + 5}`);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full justify-between">
      <div className="lg:w-8/12">
        <div className="bg-white dark:bg-white-900 py-8 lg:py-16">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
                Comments - {data?.data?.totalData ? data?.data?.totalData : "-"}
              </h2>
            </div>
            <Divider />
            <form name="comment" className="mb-6" method="post" action="?index">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                <CommentInput required={true} id="comment" name="comment" />
              </div>
              <Button buttonText="Post" type="submit" />
            </form>
            {data?.data?.data.map((comment: any, index: number) => {
              return (
                <Comments
                  name={comment.commentedBy}
                  date={comment.createdAt}
                  content={comment.comment}
                  key={comment?.id ?? index}
                />
              );
            })}
            {data?.data?.totalData > data?.data?.data?.length && (
              <a
                className="text-indigo-700  hover:text-indigo-500 cursor-pointer rounded-full flex justify-end"
                onClick={handleNavigation}
              >
                See More
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="lg:w-4/12">
        <div className="bg-slate-300 h-full  py-8 lg:py-16">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
                My Activity -{" "}
                {data?.mycomments ? data?.mycomments?.length : "-"}
              </h2>
              <form method="post" action="/logout">
                <Button
                  name={"_action"}
                  buttonText="logout"
                  type="submit"
                  value="LOGOUT"
                />
              </form>
            </div>

            <Divider />

            {data?.mycomments?.map((comment: any, index: number) => {
              return (
                <Comments
                  name={comment.commentedBy}
                  date={comment.createdAt}
                  content={comment.comment}
                  key={comment?.id ?? index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
