

function bookFilter() {

    function filter(itens, text) {

        if (itens == undefined)
            return;

        if (text == undefined || text == "")
            return itens;

        let itensFiltered = [];

        debugger;

        itensFiltered = itens.filter(function (x) {

            debugger;

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