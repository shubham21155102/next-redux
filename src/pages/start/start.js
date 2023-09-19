import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { updateFormField, resetForm } from "../../slices/formSlices" // Import your Redux actions
import { useSelector, useDispatch } from 'react-redux';
import { loadFormDataFromLocalStorage, saveFormDataToLocalStorage } from '../../slices/formSlices';
import "./styles/start.module.css"

const Starting = ({ form, updateFormField, resetForm }) => {
    const form1 = useSelector((state) => state.form);
  const dispatch = useDispatch();
  useEffect(() => {
    // Load data from localStorage when the component mounts (client-side)
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      dispatch(loadFormDataFromLocalStorage(JSON.parse(savedFormData)));
    }
  }, [dispatch]);

  useEffect(() => {
    // Save data to localStorage whenever the form data changes (client-side)
    localStorage.setItem('formData', JSON.stringify(form));
  }, [form1]);
    const [name1, setName] = useState('');
    const [email1, setEmail] = useState('');
    const [phone1, setPhone] = useState('');
    const [address1, setAddress] = useState('');
    const [streetAdress, setStreetAdress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState(['']);
    const { name, email, phone, address } = form;
    // Define a function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Access form data from the Redux store
        console.log('Submitted Data:', form);

        // Add logic here to dispatch an action or perform any other necessary action
        // For example, you can dispatch an action to send the form data to a server.
    };

    return (
        <div style={{ backgroundColor: "white", borderWidth: "7px", borderColor: "red", color: "black" }}>
            <h1 className="page-title"
                style={{ fontSize: "24px", marginBottom: "20px" }}
            >Form</h1>

            <section>
                <div className="container"
                    style={{ maxWidth: "600px", margin: "0 auto", padding: "2-px", borderWidth: "3px", borderColor: "black", borderRadius: "10px" }}
                >

                    <form onSubmit={handleSubmit} className="needs-validation">

                        {/* Form fields */}
                        <div className="form-group"
                            style={{ marginBlock: "20px" }}
                        >
                            <input type="hidden" name="UUID" placeholder="User Id" className="form-control" required="" />
                        </div>
                        <div className="form-group" style={{ marginBlock: "20px" }}>
                            <input type="hidden" name="createdAt" placeholder="Created At" className="form-control" required="" />
                        </div>

                        {/* Name input field */}
                        <div className="form-group" style={{ marginBlock: "20px", width: "80%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", textAlign: "left" }}>
                            <input
                                type="text" // Change the type to "text" for name input
                                name="name"
                                placeholder="Name"
                                className="form-control"
                                required=""
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value); // Update the local component state
                                    updateFormField({ fieldName: 'name', fieldValue: e.target.value }); // Dispatch the action to update Redux state
                                }}
                            />
                        </div>


                        {/* Email input field */}
                        <div className="form-group" style={{ marginBlock: "20px", width: "80%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", textAlign: "left" }}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                required=""
                                value={form.email} // Access the email field from the Redux store
                                onChange={(e) => updateFormField({ email: e.target.value })} // Dispatch the action to update the email field
                            />
                        </div>

                        {/* Submit button */}
                        <div className="form-group" style={{ width: "80%", padding: '10px', backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                            <input type="submit" value="Submit" className="submit-button" required="" />
                        </div>

                        {/* Reset button */}
                        <br />
                        <div className="form-group" style={{ width: "80%", padding: '10px', backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                            <input type="reset" value="Reset" className="reset-button" required="" onClick={() => resetForm()} /> {/* Dispatch the action to reset the form */}
                        </div>

                    </form>
                </div>
            </section>

            <h2 className="totalCount">Total Items <span className="total">0</span></h2>

            <section className="tableSection">
                <div id="tableDiv">
                    <table className="table table-bordered table-striped"></table>
                </div>
            </section>
        </div>
    );
}

// Map Redux state to component props
const mapStateToProps = (state) => ({
    form: state.form,
});

// Map Redux actions to component props
const mapDispatchToProps = {
    updateFormField,
    resetForm,
};

// Connect your component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Starting);
