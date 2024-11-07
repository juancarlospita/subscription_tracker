import { moneyFormat } from "../helper";

const SingleItem = ({price, type, id, eliminarItem, editItem}) => {

    const handleDelete = (e) => {
        e.preventDefault();
        const answer = window.confirm(`Borrar Suscripcion a${type}`);
        if (answer){
            eliminarItem(id);
        }
    }

    const handleEdit = e => {
        e.preventDefault ();
        editItem(id);
    }

    const urlImage = `/img/${type}.png`;

    return (
        <div className="single-item">
            <img src = {urlImage} alt="services" />
            <h3>precio:{moneyFormat(Number(price))}</h3>
            <a href="#"  className="delete" onClick={handleDelete}>Borrar</a>
            <a href="#" className="edit" onClick={handleEdit}>Editar</a>
        </div>
    );
}

export default SingleItem;