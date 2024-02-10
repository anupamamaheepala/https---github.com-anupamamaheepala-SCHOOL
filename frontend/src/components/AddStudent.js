import React from "react";

export default function AddStudent(){

    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="name">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter student name"></input>           
                </div>
                <div className="form-group">
                    <label for="age">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter student age"></input>
                </div>
                <div className="form-group">
                    <label for="gender">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter student gender"></input>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}