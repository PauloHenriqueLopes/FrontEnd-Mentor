import type { MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import { addUser ,findUserByEmailPassword, User } from "../../users";
import {v4 as uuidv4} from 'uuid'
import { useEffect } from "react";

type ActionData = {
  erro?: string;
  user?: User;
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action = async ({ request } : {request : Request}) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if(!email || !password) {
    return Response.json(
      {erro: "Email and password are required"},
      {status: 400}
    );  
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  const existingUser = findUserByEmailPassword(email, password)

  const user = existingUser || newUser

  if(!existingUser) {
    addUser(user);
  }


  return Response.json({user}, {status: 200})

};

export default function Index() {
  const actionData = useActionData<ActionData>();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("userLogged");
    if(storedUser) {
      const user = JSON.parse(storedUser)
      location.pathname = `/profile/${user.id}`;
    }

    if(actionData?.user) {
      localStorage.setItem("userLogged", JSON.stringify(actionData.user))
      navigate(`/profile/${actionData.user.id}`)
    }
  }, [actionData, navigate]);
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-500 to-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-white">Login</h1>
        <Form method="post" className="space-y-6 mt-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input type="text" name="name" id="name" className="mt-2 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm bg-gray-600 focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input type="text" name="email" id="email" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-600 focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input type="password" name="password" id="password" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-600 focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Login</button>
        </Form>
      </div>
    </div>
  );
}