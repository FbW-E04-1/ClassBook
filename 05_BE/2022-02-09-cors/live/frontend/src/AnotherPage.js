import './AnotherPage.css';
import { Link } from "react-router-dom";

function AnotherPage() {
    return (
        <div className="AnotherPage">
            <header className="AnotherPage-header">
                <h1>Hi there!</h1>
                <Link to="/">Home</Link>
            </header>
        </div>
    );
}

export default AnotherPage;
