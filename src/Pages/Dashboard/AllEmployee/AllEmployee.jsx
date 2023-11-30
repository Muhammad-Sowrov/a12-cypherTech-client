import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const AllEmployee = () => {
    const axiosSecure = useAxiosSecure();
    axiosSecure.get('/users')
    .then(res => {
        console.log(res.data);
    })
    return (
        <div>
            
        </div>
    );
};

export default AllEmployee;