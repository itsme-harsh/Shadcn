import * as React from "react";
import { Input } from "./ui/input";

export function Signin() {

    return (
        <div className="pt-28 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full dark:bg-black border">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 dark:text-white">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-white">Email</label>
                        <Input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg p-2" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-white">Password</label>
                        <Input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-lg p-2" />
                    </div>
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-sm text-red-500">Forgot password?</a>
                        <button type="submit" className="border bg-gradient-to-r from-gray-400 to-gray-900 text-white hover:from-gray-800 hover:to-black py-2 px-4 rounded">Login</button>
                    </div>
                </form>
                <p className="text-sm text-gray-300 mt-4">Don't have an account? <a href="#" className="text-blue-500">Sign up</a></p>
            </div>
        </div>
    );
}

export default Signin;