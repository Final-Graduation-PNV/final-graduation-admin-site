import React from "react";
import axios from "axios";
import { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.scss';


function EditCategory({ data, toggle,setToggle, closeModal }) {
    const [category, setCategory] = useState({
        name: data.name,
        id: data.id,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({
            ...category,
            [name]: value,
        });
        console.log("category: ", category.name);

    };
    const handleSubmit = () => {
        const token = localStorage.getItem("token")
        axios.patch("http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/admin/categories/"+data.id, { name: category.name },
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
                        name='name'
                        placeholder='Category'
                        value={category.name}
                        onChange={handleChange}
                        required="required"
                    />
                    <button className='add-category__form__button' onClick={handleSubmit}> Save </button>
                </div>
            </div>
        </>

    );
}

export default EditCategory;