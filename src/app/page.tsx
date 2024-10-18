import { AddData, Charts, List } from "@/components";
export default function Home() {
  return (
    <>
      <h1 className="my-10 text-center text-3xl font-bold text-white">
        Mi Billetera
      </h1>
      <Charts />
      <List />
      <AddData />
    </>
  );
}
