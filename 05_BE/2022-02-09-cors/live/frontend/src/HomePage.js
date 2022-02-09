import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './components/Card';
import Photographers from './components/Photographers';
import './HomePage.css';

// change the default of axios so that cookies are sent with each request

// thanks to David:
// https://stackoverflow.com/questions/42182577/is-it-possible-to-use-dotenv-in-a-react-project
// React makes variables defined in an `.env`-file available if they start with `REACT_APP_`:

axios.defaults.withCredentials = true; // => send cookies along requests
axios.defaults.baseURL = process.env.REACT_APP_SERVER_BACKEND; 

function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [photographers, setPhotographers] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = event => setEmail(event.target.value);
  const handleChangePassword = event => setPassword(event.target.value);

  async function handleLogin(event) {
    event.preventDefault();

    const user = {
      email,
      password,
    }

    try {
      const response = await axios.post('/api/auth/', user);
      console.log(response);
      setIsAuthenticated(true);
    } catch (errors) {
      console.error(errors);
    }
  }

  async function handleLogout(event) {
    event.preventDefault();

    try {
      const response = await axios.delete('/api/auth/');
      console.log(response);
      setIsAuthenticated(false);
    } catch (errors) {
      console.error(errors);
    }
  }

  async function handleListPhotographers(event) {
    event.preventDefault();

    try {
      const response = await axios.get('/api/photographers/');
      
      let list = response.data;

      if (list) setPhotographers(list);

    } catch (errors) {
      console.error(errors);
    }
  }

  let content;
  if (isAuthenticated) {
    content =
    <main>
        <Card>
          <span>
            <a href='/' onClick={handleListPhotographers}>List Photographers</a>
          </span>
          <br />
          <span>
            <a href='/' onClick={handleLogout}>Logout</a>
            </span>
        </Card>
        <Photographers photographers={photographers}/>

    </main>;
  } else {
    content = <><header className="HomePage-header">
    <h1>Login</h1>
    </header>
    <main className="HomePage-main">
      <section>
        <Card>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" placeholder="Your email address" required value={email} onChange={handleChangeEmail} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Your password" required value={password} onChange={handleChangePassword} />

          <input type="submit" value="Login" />
        </form>
        <Link to="/another-page">Another Page</Link>
        </Card>
      </section>
    </main>'
    </>
  }

  return (
    <div className="HomePage">
      {content}
    </div>
  );
}

export default HomePage;
