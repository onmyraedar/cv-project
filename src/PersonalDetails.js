import React, { Component } from "react";

class PersonalDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            pronouns: "",
            email: "",
            about: "",
            isInEditMode: false,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        })
    }

    toggleEditMode() {
        this.setState((prevState) => ({
            isInEditMode: !prevState.isInEditMode,
        }));
    }

    render() {
        const { name, pronouns, email, about, isInEditMode } = this.state;

        let personalDetails;

        if (isInEditMode) {
            personalDetails =                 
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
        } else {
            personalDetails = 
            <div>
                <p>{name}</p>
                <p>{pronouns}</p>
                <p>{email}</p>          
                <p>{about}</p>
            </div>
        }

        return(
            <div>
                <h1>Personal Details</h1>  
                <button onClick={this.toggleEditMode}>Edit</button>
                <div>{personalDetails}</div>
            </div>
        );
    }
}

export default PersonalDetails;