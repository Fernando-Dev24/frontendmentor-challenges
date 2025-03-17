import { login } from "@/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormState {
  email: string;
  password: string;
}

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  const router = useRouter();

  /* STATES */
  const [viewPassword, setViewPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Amazon realiza un regex para contraseña de al menos 6 caracteres de longitud
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const onSubmit = async (values: FormState) => {
    setErrorMessage("");
    const { ok, message } = await login(values);

    if (!ok) {
      setErrorMessage(message);
      return;
    }

    router.replace("/notes");
  };

  return {
    register,
    handleSubmit,
    errors,
    viewPassword,
    passwordRegex,
    setViewPassword,
    errorMessage,
    onSubmit,
  };
};
