import React, { Component } from "react";

class PersonalDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            pronouns: "",
            email: "",
            about: "",
        }
    }

    render() {
        return(
            <div>
                <h1>Personal Details</h1>
                <form>
                    <label htmlFor="nameInput">
                        Name
                    </label>
                    <input 
                        type="text"
                        id="nameInput"
                    />
                    <label htmlFor="pronounsInput">
                        Pronouns
                    </label>  
                    <input 
                        type="text"
                        id="pronounsInput"
                    />   
                    <label htmlFor="emailInput">
                        Email
                    </label> 
                    <input
                        type="email"
                        id="emailInput"
                    />
                    <label htmlFor="aboutInput">
                        About
                    </label> 
                    <textarea />
                </form>              
            </div>
        );
    }
}

export default PersonalDetails;