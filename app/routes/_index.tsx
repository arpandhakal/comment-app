import {
  ActionFunctionArgs,
  json,
  redirect,
  type MetaFunction,
} from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/Button";
import { CommentInput } from "~/components/CommentInput";
import { Comments } from "~/components/Comments";
import { CommentService } from "~/services/commentService";
import { requireUserToken } from "~/utils/session.server";

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

    const result = commentService.postComments({ comment }, userId);

    return result;
  } catch (err) {
    return "error";
  }
};

export const loader = async ({ request }: ActionFunctionArgs) => {
  const userId = await requireUserToken(request);
  const comments = await commentService.getComments(5, userId);
  return { access_token: userId, data: comments };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  return (
    <div className="bg-white dark:bg-white-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
            Comments - {data?.data?.totalData ? data?.data?.totalData : "-"}
          </h2>
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-slate-950" />
        <form className="mb-6" method="post" action="?index">
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
      </div>
    </div>
  );
}
