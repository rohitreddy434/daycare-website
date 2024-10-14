import { redirect } from "next/navigation";

export default function Page() {
  // Redirect to /home when accessing the root route /
  redirect("/home");
}
