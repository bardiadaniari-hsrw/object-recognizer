import React from "react";
import Layout from "../components/layout"
import { faAt } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <Layout>
            <h1>Welcome to the object recognizer</h1>
            <h6>Preface</h6>
            <p>
                In the beginning of the project not every member was familiar with coding and software development processes. Throughout the project experience has been gained. Also, during the development some activities seem to be inappropriate. To adept faster to changes the group has chosen to do a mixture of the plan-driven and agile process planning.
            </p>
            <p>
                During the project a requirements list has been created. This list has been updated throughout the project. For the project report this requirements document has been created. As mentioned, some activities have been followed in the beginning but didn’t lead to a proper solution. Therefore, the activities changed with development of the software. Activities that aren’t followed anymore are also listed in this document (to show input of each team member). 
            </p>
            <h6>Introduction</h6>
            <p>
                To develop a software system that recognizes objects a structured set of activities is required. That includes (known from the software process model):
            </p>
            <ul>
                <li>Specification</li>
                <li>Design and Implementation</li>
                <li>Validation</li>
                <li>Evolution</li>
            </ul>
            <p>
                The goal of this requirements documentation is to state the specification of the project. In general, the specification describes what the program should do. To define what the program should do the first thing is to get information from the customers. For this project the customer is asking for a software that recognizes objects.
            </p>
            <h6>Object recognition</h6>
            <p>
                Customers statement about object recognition: The customer wants “…An application that is able to recognize some objects, using machine learning”.
            </p>
            <p>
                In order to structure the requirements, it is important to define the problems of this project very well (reference to software development pyramid, in which the problem definition is the foundation of the programming process). According to the customers statement the following problems are given:
            </p>
            <ul>
                <li>No application that can be used by the customer</li>
                <li>No hint how the application should recognize the objects</li>
                <li>No description of which type of objects the application should recognize</li>
                <li>No specific information about the machine learning part</li>
                <li>No further restrictions performance, size, design, etc.</li>
            </ul>
        </Layout>
    )
}

export default About;