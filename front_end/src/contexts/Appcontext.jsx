import  { createContext } from "react";

// this is the global context for whole app
 export const AppContext=createContext();

export  const AppContextProvider=(props)=>{
    const works = [
        {
            name: "E-Kart",
            image: "https://images.pexels.com/photos/25972557/pexels-photo-25972557/free-photo-of-trees-on-rocks-on-sea-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            client: "Flipkart",
            type: "E-commerce",
            github: "https://github.com/username/ekart",
            url: "https://www.flipkart.com",
        },
        {
            name: "MyGov India",
            image: "https://images.pexels.com/photos/27062071/pexels-photo-27062071/free-photo-of-cow-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            client: "Government of India",
            type: "Citizen",
            github: "https://github.com/username/mygov-india",
            url: "https://www.mygov.in",
        },
        {
            name: "Zomato Clone",
            image: "https://images.pexels.com/photos/27788841/pexels-photo-27788841/free-photo-of-two-children-sitting-on-a-bench-looking-out-at-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            client: "Personal",
            type: "Food Delivery",
            github: "https://github.com/username/zomato-clone",
            url: "https://zomato-clone.example.com",
        },
        {
            name: "BookMyShow",
            image: "https://images.pexels.com/photos/26926241/pexels-photo-26926241/free-photo-of-bird-of-prey-on-post-with-building-silhouette-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            client: "BookMyShow",
            type: "Online Ticketing",
            github: "https://github.com/username/bookmyshow-clone",
            url: "https://www.bookmyshow.com",
        },
    ];
    
    const contextValue={
        works
    }
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}