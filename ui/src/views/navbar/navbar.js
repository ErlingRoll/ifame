import React from 'react';

// Components
import Button from '../../components/button/button';

// Store
import actions from '../../store/actions';
import selectors from '../../store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import GoogleLoginButton from '../../components/button/login_button/googleLoginButton';

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectors.user.user);
    const NavItem = ({ children }) => <div className={'ml-4'}>{children}</div>;

    return (
        <div className={'absolute w-full top-0 left-0'}>
            <div
                className={
                    'w-full px-4 h-16 bg-green-400 flex justify-between items-center cursor-pointer'
                }>
                <div>
                    <a href={'/'}>
                        <h3 className={'text-2xl'}>Matprat</h3>
                    </a>
                </div>
                <div className={'h-full flex items-center'}>
                    {user.isLoggedIn ? (
                        <React.Fragment>
                            <NavItem>{user.data.displayName}</NavItem>
                            <NavItem>
                                <Button
                                    type={'danger'}
                                    onClick={() =>
                                        dispatch(actions.user.signOut())
                                    }>
                                    Logout
                                </Button>
                            </NavItem>
                        </React.Fragment>
                    ) : (
                        <NavItem>
                            <GoogleLoginButton />
                        </NavItem>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
