import { Outlet } from "react-router-dom";
const AuthenticationLayout = () => {
  return (
    <div className='w-screen h-screen overflow-hidden flex items-center justify-center relative'>
        <img src="/assets/img/bg.png" className="w-full h-full absolute object-cover opacity-20"/>
        <Outlet/>
    </div>
  )
}

export default AuthenticationLayout