export default async function Post() {
  const response = await fetch(`${process.env.BASE_URL}/posts`, {
    cache: "no-store",
  });
  const responseJson = (await response.json()) as {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];

  return (
    <section>
      <div className="container p-4">
        {responseJson.map((post) => (
          <ul key={post.id} className="flex flex-col gap-2">
            <li>{post.title}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}
