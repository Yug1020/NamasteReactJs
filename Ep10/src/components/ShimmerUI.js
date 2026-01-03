const ShimmerUI = ()=>{
    
    const Shimmecard = []
    
    for ( let i=0; i<12; i++){
        Shimmecard.push(<div key={i} className="bg-gray-200 h-100 w-59 m-0.12"></div>)
    }
    debugger;
    return (
        <div> 
            <button className="flex justify-between h-1 w-100% bg-gray-200"></button> 
            <button className="border-none h-5 w-38"></button> 
            <div className="flex row wrap-normal">
                {Shimmecard}
            </div>
        </div>
    )
    
}

export default ShimmerUI;