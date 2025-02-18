import { redirect } from "next/navigation";

export default function RedirectAuthPage() {
  redirect("/auth/login");
}
