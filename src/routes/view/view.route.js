import { useContext } from "react";
import { DataContext } from "../../context";


export default function ViewRouteComponent() {
   const [context, setContext] = useContext(DataContext);

    return (
        <div>
            <h1>Hello world</h1>
            <DataContext>
                <h1>{ context }</h1>
            </DataContext>
        </div>
    );
}
