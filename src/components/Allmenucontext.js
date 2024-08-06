import { useEffect, useState } from "react";
import React from "react";
import Iphone from "../asetes/Iphone-spinner-2.gif";

export const Allmenucontexts = React.createContext();

export const Allmenu = (props) => {
    // State
    const [menu, setmenu] = useState([]);
    const [loading, setloading] = useState(true); // Start with loading true
    const [error, setError] = useState(null); // State for error handling

    // Fetch Menu
    async function getmenu() {
        try {
            setloading(true);
            const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
            let response = await fetch(API_URL);

            // Check if response is ok
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let data = await response.json();

            // Check if data has the expected structure
            if (data && data.meals) {
                setmenu(data.meals);
                setError(null); // Clear error if data is fetched successfully
            } else {
                throw new Error('Unexpected data format');
            }
        } catch (error) {
            console.error('Error fetching menu data:', error);
            setError('Failed to load menu data. Please try again later.');
        } finally {
            setloading(false);
        }
    }

    useEffect(() => {
        getmenu();
    }, []);

    return (
        <Allmenucontexts.Provider value={menu}>
            {loading ? (
                <div className="loader z-20">
                    <img
                        src={Iphone}
                        className="loader-img"
                        alt="Loading spinner"
                    />
                    <h2 className="font-serif text-2xl">Loading...</h2>
                </div>
            ) : error ? (
                <div className="error-message text-center text-red-500">
                    <h2 className="font-serif text-2xl">Error loading data</h2>
                    <p>{error}</p>
                    <button
                        onClick={getmenu}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Retry
                    </button>
                </div>
            ) : (
                props.children
            )}
        </Allmenucontexts.Provider>
    );
};
