import { api, HydrateClient } from "~/trpc/server";
import { SignInComponent } from "./_components/SignInComponent";

export default async function Home() {
  // Fetch the latest posts
  const posts = await api.post.getLatest();

  return (
    <>
      <HydrateClient>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        {/* <SignInComponent /> */}
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 text-white">
          {/* Display the posts */}
          {posts?.map((post) => (
            <div
              key={post.id}
              className="m-2 flex w-full max-w-2xl flex-col items-center justify-center rounded-lg bg-rose-200 p-4 shadow-lg"
            >
              <div className="text-lg font-semibold">{post.content}</div>
              <div className="text-sm text-gray-600">
                Posted at: {new Date(post.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </HydrateClient>
    </>
  );
}
