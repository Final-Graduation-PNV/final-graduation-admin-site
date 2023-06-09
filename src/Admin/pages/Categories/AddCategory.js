import React from "react";
import axios from "axios";
import { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.scss';


function AddCategory({ toggle,setToggle, closeModal }) {
    const [category, setCategory] = useState("");

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setCategory({
    //         ...category,
    //         [name]: value,
    //     });
    //     console.log("category: ", category);

    // };
    const handleSubmit = () => {
        const token = localStorage.getItem("token")
        axios.post("https://codenguoi.site/api/admin/categories", { name: category },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
            .then(function (response) {
                console.log(response);
                setToggle(!toggle);
                closeModal(false);
            })
            .catch(function (error) {
                console.log("Er admin web onwer", error);
            });
    }
console.log()
    return (
        <>
            <div className="add-category">
                <div className='add-category__form'>
                    <div className="add-category__form__header">
                        <label className='add-category__form__header-label'>Input Category Name</label>
                        <FontAwesomeIcon className='add-category__form__header-button' icon={faClose} onClick={() => closeModal(false)} />
                    </div>
                    <input className='add-category__form__input'
                        type='text'
                        name='category'
                        placeholder='Category'
                        value={category.data}
                        onChange={(e)=>{setCategory(e.target.value)}}
                        required="required"
                    />
                    <button className='add-category__form__button' onClick={handleSubmit}> Add new </button>
                </div>
            </div>
        </>

    );
}

export default AddCategory;