import { useAuth } from "@clerk/clerk-react"
import LoaderPage from "@/routes/loader-page"
import { Navigate } from "react-router-dom"
const ProtectedRoutes = ({children}:{children:React.ReactNode}) => {
    const { isSignedIn, isLoaded } = useAuth()
    if (!isLoaded){
        return <LoaderPage/>
    }
    if (!isSignedIn) {
       return (<Navigate to="/signin" replace />)
    }
    return children;
}
export default ProtectedRoutes