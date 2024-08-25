import {useState} from 'react';
import {useMutation} from '@apollo/client';
import {ADD_USER} from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = (props) => {
    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const [addUser, {error, data}] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const {data} = await addUser({
                variables: {...formState},
            });
            console.log('User added:', data);
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error('Error during signup:', JSON.stringify(e));
            console.error('GraphQL error:', JSON.stringify(e.graphQLErrors, null, 2));
            console.error('Network error:', e.networkError);
        }

        setFormState({
            fullName: '',
            email: '',
            password: '',
        });
    };

    return (
        <div className='signup'>
            <form onSubmit={handleFormSubmit}>
                <input
                    className="form-input"
                    placeholder="Your full name"
                    name="fullName"
                    type="text"
                    value={formState.fullName}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                />
                <button
                    className="submit-btn"
                    style={{cursor: 'pointer'}}
                    type="submit"
                >
                    Submit
                </button>
            </form>
            {error && <div>Sign up failed</div>}
        </div>
    );
}

export default Signup;