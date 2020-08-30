import React from 'react';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <Layout>
            <h2>Contact us at:</h2>
            <h6 style={{color: "gray"}}>28373<FontAwesomeIcon style={{color: "gray"}} icon={faAt} />students.hsrw</h6>
        </Layout>
    )
}

export default Contact;