import { useEffect, useState } from "react";

function Data() {
    const [ans, ansset] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                ansset(data);
                console.log(data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            {ans.map((a, i) => (
                <p key={i}>{a.name}</p>
                
            ))}
        </div>
    );
}

export default Data;