import { useState, useRef } from "react";

const FormAddSubs = ({setType, setPrice, type, price, setSubs, subs, editId, setEditId, spent, count}) => {
    const [error, setError] = useState(false)
    const [errorMoney, setErrorMoney] = useState(false);
    const priceInputRef = useRef(null);

    const handleSubs = e =>{
        e.preventDefault();
        if (price === "" || Number(price)< 0 || type ===""){
            setError(true)
            return;
        }
        if(count - spent < Number(price)){
            setErrorMoney(true);
            return;
        }
        setError(false);
        setErrorMoney(false);
        if(editId !== ""){
            setEditId("");
            const newSubs = subs.map(item => {
                if(item.id === editId){
                    item.type = type;
                    item.price = price;
                }
                return item;
            })
            setSubs(newSubs);
        }
        else {
            const data = {
                type: type,
                price: price,
                id: Date.now()
        }
        setSubs([...subs, data]);
    }
    setPrice("");
    setType("");
    //console.log(subs);
}

const handleSelectChange = (e) => {
    setType(e.target.value); // Establecemos el valor del tipo de servicio
    if (e.target.value !== "") {
        setTimeout(() => {
            priceInputRef.current.focus(); // Mueve el foco al campo de "Cantidad"
        }, 0);
    }
};

    return (  
        <div className="add-subscription">
            <h3>Agregar subscripciones</h3>
            <form onSubmit={handleSubs}>
                <p>Servicio</p>
                <select onChange={handleSelectChange} value={type}>
                    <option value="">-- elegir --</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyPlus">Disney Plus</option>
                    <option value="hboMax">HBO Max</option>
                    <option value="StarPlus">Star Plus</option>
                    <option value="PrimeVideo">Prime Video</option>
                    <option value="spotify">Spotify</option>
                    <option value="appleTv">Apple tv</option>
                </select>
                <p>Cantidad</p>
                <input type="number" placeholder="20$" onChange={e => setPrice(e.target.value)} value={price} ref={priceInputRef}/>
                
                {editId !== "" ? <input type="submit" value="Guardar"/> 
                : <input type="submit" value="Agregar"/>}
            </form>
            {error ? <p className="error">Campos invalidos</p> : null}
            {errorMoney ? <p className="error">No Tienes</p> : null}
        </div>
    );
}

export default FormAddSubs;