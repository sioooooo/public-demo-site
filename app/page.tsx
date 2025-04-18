import { fetchTitle } from "@/lib/microcms-client";

export default async function Home() {
  const { contents: title } = await fetchTitle();
  console.log(title);

  const list = title.map((item) => {
    return <li key={item.id}>{item.title}</li>;
  });
  return (
    <div>
      hello
      <ul>{list}</ul>
    </div>
  );
}
