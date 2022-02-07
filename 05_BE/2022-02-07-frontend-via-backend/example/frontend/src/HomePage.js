import { useState } from "react";
import './HomePage.css';
import Card from "./components/Card";
import { Link } from "react-router-dom";

function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = event => setEmail(event.target.value);
  const handleChangePassword = event => setPassword(event.target.value);

  const handleSignIn = event => {
    event.preventDefault();
    alert("TODO: sign in");
  }

  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <h1>Sign in</h1>
      </header>
      <main className="HomePage-main">
        <section>
          <Card>
            <form onSubmit={handleSignIn}>
              <label htmlFor="email">Email Address</label>
              <input type="text" id="email" placeholder="Your email address" required value={email} onChange={handleChangeEmail} />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Your password" required value={password} onChange={handleChangePassword} />

              <input type="submit" value="Sign in" />
            </form>
            <Link to="/another-page">Another Page</Link>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
