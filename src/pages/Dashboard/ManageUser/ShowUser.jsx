import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const ShowUser = ({ userInfo, handleDelete, makeInstructor }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, email, role } = userInfo;
    return (
        <tr>
            <td>
                <h1>{name}</h1>
            </td>
            <td>
                <h1>{email}</h1>
            </td>
            <td>
                <h1>{role}</h1>
            </td>
            <td>
                {role != "instructor" && user.email != email &&
                    <button onClick={() => makeInstructor(_id, 'instructor')} className="btn text-white btn-sm bg-pink-700">
                        Make Instructor
                    </button>
                }
                {role != "admin" && user.email != email &&
                    <button onClick={() => makeInstructor(_id, 'admin')} className="btn text-white btn-sm bg-pink-700">
                        Make Admin
                    </button>
                }
                {user.email != email &&
                    <button onClick={() => handleDelete(_id)} className="btn ml-2 text-white btn-sm bg-pink-700">
                        Delete
                    </button>
                }
            </td>
        </tr>
    );
};

export default ShowUser;