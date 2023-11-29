import { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Movie() {
    const { identificador } = useParams();
    useEffect(() => {
            document.title = `Movie ${identificador}`;
    }, [identificador])
    return (
        <div>
            <h1>Movie {identificador}

            </h1>
        </div>

    );
}