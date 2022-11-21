// import { useState, useEffect } from "react";
// import getData from "../api/api";
// export default function useFetch(url) {
//     const [data, setData] = useState();
//     const [error, setError] = useState(null);
//     const [status, setStatus] = useState("idle");
//     useEffect(() => {
//         let doUpdate = true;
//         setStatus("loading");
//         setData(undefined);
//         setError(null);
//         getData(url)
//             .then((data) => {
//                 if (doUpdate) {
//                     setData(data);
//                     setStatus("success");
//                 }
//             })
//             .catch((error) => {
//                 if (doUpdate) {
//                     setError(error);
//                     setStatus("error");
//                 }
//             });
//         return () => doUpdate = false;
//     }, [url]);
//     return { data, status, error };
// }


export default function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("fetch failed")
                } else {
                    return res.json()
                }
            })
            .then((data) => resolve(data))
            .catch((error) => {
                reject(error);
            });
    })
}