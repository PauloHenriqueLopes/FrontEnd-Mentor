import type { MetaFunction } from "@remix-run/node";
import { TodoHeader } from "~/components/TodoHeader";

export const meta: MetaFunction = () => {
    return [
        { title: "TodoApp" },
    ];
};


export default function Index() {
    return <TodoHeader/>;
}