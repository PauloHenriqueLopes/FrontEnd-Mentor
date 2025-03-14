import type { MetaFunction } from "@remix-run/node";
import { Header } from "../components/Header";
import { Article } from "../components/Article";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header/>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <Article/>
      </main>
    </div>
  );
}