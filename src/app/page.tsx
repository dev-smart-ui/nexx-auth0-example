import { auth0 } from "../../lib/auth0"; // Adjust path if your auth0 client is elsewhere

export default async function Home() {
  const session = await auth0.getSession();
    console.log(session)
  if (!session) {
    return (
        <main>
          <a href="/auth/login?screen_hint=signup">Sign up</a>
          <a href="/auth/login">Log in</a>

        </main>
    );
  }

  return (
      <main>
        <h1>Welcome, {session.user.name}!</h1>
          <a href="/auth/logout">Log out</a>
      </main>
  );
}