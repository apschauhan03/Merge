import EmailLogin from "./EmailLogin"

function Login() {
  return (
    <div className=" flex flex-col justify-center items-center shadow-sm shadow-white text-white border p-4 rounded-md border-white md:w-1/5">
        <h5 className=" text-lg font-semibold">Login on Merge</h5>
        <EmailLogin/>
    </div>
  )
}

export default Login
