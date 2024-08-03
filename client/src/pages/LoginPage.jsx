export default function LoginPage() {
    return (
        <div>
        <h2>Login</h2>
        <form>
            <label>
            Full Name:
            <input type="text" />
            </label>
            <label>
            email:
            <input type="email" />
            </label>
            <br />
            <label>
            Password:
            <input type="password" />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>

        <h2>Sign Up</h2>
        <form>
            <label>
            email:
            <input type="email" />
            </label>
            <br />
            <label>
            Password:
            <input type="password" />
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
    }