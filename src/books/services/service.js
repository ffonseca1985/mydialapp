
import xml from "../../assets/data/ab.xml"

const get = () => {

    if ( window.DOMParser ){
        return source = (new DOMParser()).parseFromString( xml, "application/xml" );
    }

    throw "DOM Parse not work in your browser, please talk to your system administrator "
}

export default get;
