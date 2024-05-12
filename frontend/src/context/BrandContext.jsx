'use client'
const { useRouter } = require("next/navigation");
const { createContext, useState, useEffect, useContext, children } = require("react");

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {

    const [currentBrand, setCurrentBrand] = useState(
        JSON.parse(localStorage.getItem('brand'))
    );

    const router = useRouter();

    useEffect(() => {
        // Retrieve data from local storage and parse it
        const storedBrand = localStorage.getItem('brand');
        if (storedBrand) {
            try {
                const parsedBrand = JSON.parse(storedBrand);
                setCurrentBrand(parsedBrand);
            } catch (error) {
                console.error("Error parsing brand data:", error);
                // Handle parsing error (e.g., clear invalid data)
                localStorage.removeItem('brand');
            }
        }
    }, []);

    const [brandLoggedIn, setBrandLoggedIn
    ] = useState(currentBrand !== null)

    const brandLogout = () => {
        localStorage.removeItem('brand');
        setBrandLoggedIn(false);
        router.push('/');
    }

    return <BrandContext.Provider value={{
        brandLoggedIn,
        setBrandLoggedIn,
        currentBrand,
        setCurrentBrand,
        brandLogout
    }}>
        {children}
    </BrandContext.Provider>
};

const useBrandContext = () => useContext(BrandContext);

export default useBrandContext;