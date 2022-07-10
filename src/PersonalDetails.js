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

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        })
    }

    render() {
        const { name, pronouns, email, about } = this.state;

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
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="pronounsInput">
                        Pronouns
                    </label>  
                    <input 
                        type="text"
                        id="pronounsInput"
                        name="pronouns"
                        value={pronouns}
                        onChange={this.handleInputChange}
                    />   
                    <label htmlFor="emailInput">
                        Email
                    </label> 
                    <input
                        type="email"
                        id="emailInput"
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="aboutInput">
                        About
                    </label> 
                    <textarea 
                        id="aboutInput"
                        name="about"
                        value={about}
                        onChange={this.handleInputChange} 
                    />
                </form>    
                <p>{name}</p>
                <p>{pronouns}</p>
                <p>{email}</p>          
                <p>{about}</p>
            </div>
        );
    }
}

export default PersonalDetails;