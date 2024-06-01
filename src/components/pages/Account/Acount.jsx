import React from 'react'

const Account = () => {
  return (
    <main>
      <section>
      <div className="h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login to Your Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 hover:underline">Forgot your password?</a>
          </div>
          <div className="mt-4 text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </div>
        </form>
      </div>
    </div>
      </section>
    </main>
  )
}

export default Account
