"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { FC } from "react";
import { ActionResult, handleLogin } from "./actions";
import { useFormState, useFormStatus } from "react-dom";

interface FormLoginProps {}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-full">
          loading...
        </Button>
      ) : (
        <Button className="w-full" type="submit">
          Submit
        </Button>
      )}
    </>
  );
};

const FormLogin: FC<FormLoginProps> = ({}) => {
  const [state, formAction] = useFormState(handleLogin, initialFormState);

  return (
    <div className="w-full h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        {state.errorTitle !== null && (
          <div className="mx-auto mt-7 bg-red-500 w-[400px] p-4 rounded-lg text-white">
            <div className="font-bold mb-4">{state.errorTitle}</div>

            <ul className="list-disc list-inside">
              {state.errorDesc?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={formAction} className="space-y-6">
            <Input type="email" placeholder="Email..." name="email" />
            <Input type="password" placeholder="Password..." name="password" />
            <SubmitBtn />
          </form>
        </div>
      </div>
      LoginPage
    </div>
  );
};

export default FormLogin;
