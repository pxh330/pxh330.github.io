import SidebarView from "../views/sidebarView";
export default

function Sidebar(props){
    function numChangeACB(nr){ props.model.setNumberOfGuests(nr);}
    /*function removeDish(dish){
        props.model.removeFromMenu(dish);
        //return [...props.dishes]
    }*/
    return <SidebarView number={props.model.numberOfGuests} onNumberChange={numChangeACB} dishes={props.model.dishes}
    />;
}