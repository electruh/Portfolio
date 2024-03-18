import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import summary from '../file/F23_T23_Project Summary.pdf';
import vision from '../file/F23_T23_Project Vision.pdf';
import requirements from '../file/F23_T23_High Level Requirements-2.pdf';
import plan from '../file/W24_T23_Project_Plan_V2.0.pdf';
import analysis from '../file/F23_T23_Requirements_Analysis_and_Design-2.pdf';
import status from '../file/W24_T23_COMP3078_Project_Status_Report_2.pdf';

const DocumentationPage = () => {
    const documents = [
        { name: 'Project Summary', link: summary },
        { name: 'Project Vision', link: vision },
        { name: 'Project/Business Requirements', link: requirements },
        { name: 'Project Plan', link: plan },
        { name: 'Requirements Analysis and Design', link: analysis },
        { name: 'Wireframes/Mockups', link: analysis },
        { name: 'Status Report', link: status },
        { name: 'System Implementation', link: status },
        // Add more documents with corresponding links
    ];

    return (
        <div className="documents-page">
            <h6>Capstone Project Documents</h6>
            <div className="documents-grid">
                {documents.map((document, index) => (
                    <div key={index} className="document-item">
                        <p className="document-title">{document.name}</p>
                        <div className="document-link">
                            <FontAwesomeIcon icon={faFile} className="document-icon" />
                            <a href={document.link} target="_blank" rel="noopener noreferrer">View PDF</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentationPage;
