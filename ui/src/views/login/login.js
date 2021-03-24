import React from 'react';

// Components
import GoogleLoginButton from '../../components/button/login_button/googleLoginButton';

const Login = () => {
    return (
        <div className={'h-full flex flex-col bg-gray-200'}>
            <div className={'h-full flex items-center justify-center'}>
                <div
                    className={
                        'border-2 border-gray-400 rounded bg-white flex items-center justify-center'
                    }
                    style={{
                        width: '30vw',
                        height: '60vh',
                        minWidth: '300px',
                    }}>
                    <GoogleLoginButton />
                </div>
            </div>
        </div>
    );
};

export default Login;
