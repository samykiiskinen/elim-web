import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1 className="text-3xl font-bold mb-5">HEMSIDA</h1>
      <h1>{session && <span>Hej {session.user!.name}!</span>}</h1>
    </main>
  );
}
