import autoTable from 'jspdf-autotable';
import jsPDF from "jspdf";
import { Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import "jspdf-autotable";



const PDF = ({ data , header, body}) => {

 


    const exportPDF = () => {
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "All Users";

        let content = {
            startY: 50,
            head: [header],
            body: body
        };



        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("allusers.pdf")

    }
    return <Text onClick={exportPDF}>PDF</Text>
}

export default PDF