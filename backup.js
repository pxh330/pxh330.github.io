
import {sortDishes, menuPrice, dishType} from "../utilities";

function SidebarView(props){
    function buttonMinusACB(){props.onNumberChange(props.number-1)}
    function buttonPlusACB(){props.onNumberChange(props.number+1)}
    return <div>
        <button onClick={buttonMinusACB}
                disabled={ props.number === 1}
        >-</button>
        {props.number}
        <button onClick={buttonPlusACB}>+</button>
        {renderSideBar( props.dishes, props.number, props)}
    </div>
}

function renderSideBar(props, dishes, people){

    function dishTableRowCB(dish){
        //function buttonRemoveDish(){props.toRemoveDish(dish)}



        return <tr key={dish.id}>
            <td><button>x</button></td>
            <td><a href="#">{dish.title}</a></td>
            <td>{dishType(dish)} </td>
            <td class="rightAlign">{(dish.pricePerServing*people).toFixed(2)} </td>
        </tr>
    }

    return <table>
        <tbody>
        {sortDishes(dishes).map(dishTableRowCB)}

        <tr>
            <td> </td>
            <td>Total:</td>
            <td> </td>
            <td class="rightAlign">{(menuPrice(dishes)*people).toFixed(2)} </td>
        </tr>

        </tbody>
    </table>
}


export {renderSideBar};
export default SidebarView;