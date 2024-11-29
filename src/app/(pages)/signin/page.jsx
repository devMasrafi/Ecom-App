const Signin = () => {
  return (
    <main>
      <section className="container mx-auto">
        <section className="h-[70vh] w-full flex items-center justify-center">
          <section className="flex flex-col">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Login to E-com</h2>
            </div>
            <section>
              <form action="">
                <section className="space-y-4">
                  <div>
                    <label htmlFor="" className="pr-3">
                      Enter Your Email
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="text-base text-black font-normal outline-none border p-3 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="pr-3">
                      Enter Your Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="text-base text-black font-normal outline-none border p-3 rounded-lg"
                    />
                  </div>
                  <div>
                    <button className="px-3 py-2 bg-blue-500 text-base text-white font-normal rounded-lg cursor-pointer hover:bg-blue-700">
                      Login
                    </button>
                  </div>
                </section>
              </form>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Signin;
