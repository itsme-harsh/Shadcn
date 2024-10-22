// src/pages/Home.js
import React from 'react';
import Layout from './Layout'; // Import Layout
// import {LoginForm} from "../components/LoginForm"
import Signin from '@/components/Signin';

const Login = () => {
    return (
        <Layout>
            <Signin/>
        </Layout>
    );
};

export default Login;
