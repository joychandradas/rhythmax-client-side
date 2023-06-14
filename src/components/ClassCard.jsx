import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const ClassCard = ({ classData }) => {
    const { user } = useContext(AuthContext);
    const {_id, photo, className, seats, price, instructorName } = classData;
    return (
        <div className="card w-96 bg-base-100 my-8 shadow-2xl">
            <figure><img src={photo} alt="class image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <div className="flex">
                    <p className="font-semibold text-pink-600">Available seats : {seats}</p>
                    <p className="font-semibold mb-4 text-pink-700 ml-24">Price: ${price}</p>
                </div>
                <div className="flex justify-center items-center gap-2 font-bold">
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div>
                    <p>{instructorName}</p>
                    <Link to={`/classes/${_id}`}><button className="btn btn-sm bg-pink-600 text-white">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;