function EmailLogin() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
    <form className="w-full">
      <div className=" flex flex-col p-2 border-b my-2">
        {/* <label htmlFor="email" className=" ml-2 font-extralight text-sm">Email</label> */}
        <input required type="email" name="email" id="email" placeholder="Email" className=" outline-none   bg-transparent text-white border-none w-full rounded-sm px-2 py-1" />
      </div>
      <div className=" flex flex-col p-2 my-2 border-b">
        {/* <label className=" ml-2 font-extralight text-sm">Password</label> */}
        <input required type="password" name="password" id="password" placeholder="Password" className="outline-none bg-transparent text-white rounded-sm px-2 py-1" />
      </div>
      <div className=" ">
        <button className=" bg-foreground-color w-full p-2 my-4 rounded-sm ">Log In</button>
      </div>
      </form>
      <div className="flex flex-col items-center justify-center">
        <span>Or</span>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default EmailLogin;
