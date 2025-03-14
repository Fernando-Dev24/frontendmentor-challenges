"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { login } from "@/actions";
import { useRouter } from "next/navigation";

interface FormState {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormState>();
  const router = useRouter();

  /* STATES */
  const [viewPassword, setViewPassword] = useState(false);

  // Amazon realiza un regex para contraseña de al menos 6 caracteres de longitud
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const onSubmit = async (values: FormState) => {
    const { ok } = await login(values);
    if (ok) router.replace("/notes");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sign In
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
              placeholder="your@email.com"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={viewPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
                placeholder="••••••••"
                {...register("password", {
                  required: true,
                  pattern: passwordRegex,
                })}
              />
              <button
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-600"
                type="button"
                onClick={() => setViewPassword(!viewPassword)}
              >
                {!viewPassword ? (
                  <IoEyeOutline size={20} />
                ) : (
                  <IoEyeOffOutline size={20} />
                )}
              </button>
            </div>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
