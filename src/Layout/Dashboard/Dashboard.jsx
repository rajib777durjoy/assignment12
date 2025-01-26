
import useAxios from "../../hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import Admin from "../../Pages/DashbordItem/Admin/Admin";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { Link} from "react-router-dom";
import { Spinner } from "flowbite-react";
import Trainer from "../../Pages/DashbordItem/Trainer/Trainer";
import Member from '../../Pages/DashbordItem/Member/Member'
const Dashboard = () => {
    const { user } = useAuth()
    const axiosSecure = useAxios()
    const { data: userCheck = [],isPending } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/userCheck/${user?.email}`)
            return res.data;
        }
    })
    if(isPending){
        return <div className="text-center translate-y-40"><Spinner aria-label="Large spinner example" size="lg" /></div>
    }
    const admin = userCheck?.user === 'admin';
    const trainer= userCheck?.user === "trainer";
    const member = userCheck?.user === 'member'
    return (
        <div className='w-[100%] min-h-screen flex justify-between bg-slate-700'>
            <Helmet>
                <title>FitnessZone-Dashboard</title>
            </Helmet>
            <div className='w-[20%] border border-red-300'>
                <h1 className="text-white flex items-center gap-1 my-2">
                    <img src={user?.photoURL} alt="" className="hidden lg:block w-[50px] rounded-full" />
                    <div className="">
                        <h1>{user?.displayName}</h1>
                        <h1>{user?.email}</h1>
                    </div>
                </h1>
                <div className='w-[100%] h-auto  mt-5 '>    
                            {admin && <Admin></Admin>}
                            {trainer && <Trainer></Trainer>}
                            {member && <Member></Member>}
                </div>
                <Link to='/' ><div className='text-white text-xl ms-5 w-[90%] '>Home</div></Link>
            </div>
            <div className='w-[80%] border border-green-400'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;