import { Link } from "react-router-dom";
import { useResMenu } from "./hooks/useResMenu";

const Resmenu = () => {
// simple way to directly call local data file
    // const { res_id } = useParams();
    // const resInfo = res_menu[ res_id ];

    // useEffect(()=>{
    //     console.log(resInfo)
    // },[])

    //In next line i use custome hook to fetch the data from from "res_menu"
    const resInfo = useResMenu()

    if(!resInfo){
            return(
            <div className="flex font-semibold text-3xl justify-center">
                {/* <div className="menupage_child_div"> */}
                    <h1 >restaurant is offline</h1>
                {/* </div> */}
            </div>
            )
        }
        
    const { name, rating, location, menuItems } = resInfo

// try to call data file by useState and useEffect

    // const [ resInfo, setResInfo ] = useState(null)

    // useEffect( ()=> {
    //     fetchdata();
    //     console.log(reslist)
    // },[])

    // const fetchdata = async() => {
    //     reslist = res_menu
    //     setResInfo(reslist);
    // }

    return(
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col w-[30%]">
                <h1 className="text-3xl font-semibold my-5">{name}</h1>
                <h2 className="text-3xl font-semibold my-5">{rating}</h2>
                <h2 className="text-3xl font-semibold my-5">{location.locality},</h2>
                {location.locality !== location.areaName && <h3>{location.areaName}</h3>}
                <h2 className="text-3xl font-semibold">Menu</h2>
                {
                    menuItems.map((item) =>
                        (   <ul key={item.id} className="flex flex-row justify-between ml-10">
                                <li className="my-5">{item.name}</li>
                                <li className="my-5">{item.price}</li>
                            </ul>
                        )
                    )
                }
                <Link to="/" className="my-5"> <h3> ⬅  back to the home page </h3> </Link>    
            </div>
        </div>
        
    )
}

export default Resmenu;