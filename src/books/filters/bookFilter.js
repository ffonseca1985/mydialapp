
function bookFilter() {

    function filter(itens, text) {

        if (itens == undefined)
            return;

        if (text == undefined || text == "")
            return itens;

        let itensFiltered = [];

        itensFiltered = itens.filter(function (x) {

            if (x.ContactName[0].toUpperCase().includes(text.toUpperCase())) {
                return true;
            }
            return false;
        });
        return itensFiltered;
    }

    return filter;
}

export default bookFilter