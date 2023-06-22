import React from "react";
import { useImitator } from "../../util/useImitator";

const HomePage: React.FC = () => {

    //TOFIX - should be in App.tsx
    useImitator();

    return <><div>Home Page</div>
    </>
}

export default HomePage;


