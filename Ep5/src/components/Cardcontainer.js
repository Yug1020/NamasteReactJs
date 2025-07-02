import resObj from "./utils/mock_data";
import Card from "./Card";

const Cardcontainer = () => {
    return(
        <div className="Cardcontainer">
            {resObj.array.map((res, index) => (
                <Card key={index} resData={res.card.card.info} />
            ))}
        </div>
    )
}

export default Cardcontainer;