import { TERipple } from "tw-elements-react";

export default function Signup() {
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-slate-200 shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">

                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The best
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4">Please register an account</p>
                      {/* <!--Username input--> */}
                      <label htmlFor="Username">Username</label>
                      <input
                        type="text"
                        name="Username"
                        className="mb-4 w-full border-1 border-black py-1"
                      ></input>

                      {/* <!--Password input--> */}
                      <label htmlFor="Password">Password</label>
                      <input
                        type="password"
                        className="mb-4 w-full border-1 border-black py-1"
                      ></input>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="dark" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                "black",
                            }}
                          >
                            Sign up
                          </button>
                        </TERipple>

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Terms and conditions</a>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Have an account?</p>
                        <TERipple rippleColor="dark">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-black px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-black hover:bg-neutral-500 hover:bg-opacity-10 hover:text-black focus:border-black focus:text-danger-600 focus:outline-none focus:ring-0 active:border-black active:text-black dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Login
                          </button>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg bg-slate-600 lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"

                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}