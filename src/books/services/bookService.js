
import xml from "../../assets/data/ab.xml"

function bookService () {

    var self = this;

    self.get = get;
    self.getById = getById;

    function get() {

        if (window.DOMParser) {
            return allBooks = (new DOMParser()).parseFromString(xml, "application/xml");
        }

        throw "DOM Parse not work in your browser, please talk to your system administrator "
    }

    function getById(id) {

        try {

            let allBooks = self.get();
            let filter = allBooks.find(x => x.id == id);
    
            return filter;    

        } catch (error) {
            throw error;
        }
    }
}

export default bookService;
