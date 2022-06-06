import xml from "../../assets/data/ab.xml"

function bookService () {

    let self = this;

    self.get = get;
    self.getById = getById;

    function get() { return xml; }

    function getById(id) {

        try {

            let allBooks = self.get();
            let filter = allBooks.AddressBook.Contact.find(x => x.CustomerID == id);
    
            return filter;
        } 
        catch (error) {
            throw error;
        }
    }
}

export default bookService;
