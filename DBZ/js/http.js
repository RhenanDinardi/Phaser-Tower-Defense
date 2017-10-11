var http = (function () {
    
    'use strict';

    /**
     *
     * @param _data
     * @param _callback
     */
    function get(_data, _callback) {

        var xhr = new XMLHttpRequest();

        xhr.open('GET', _data.url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onreadystatechange = processState.bind(xhr, _callback);
        xhr.send(_data.body);
    }

    /**
     * Verifica o status da requisição e retorna o response
     * @param _callback
     */
    function processState(_callback) {

        var response = {};

        if (this.readyState === 4) {

            // success
            if (/200|201|202|204|304/.test(this.status)) {
                response = {
                    data: JSON.parse(this.responseText),
                    status: this.status,
                    statusText: this.statusText
                };

                _callback && _callback(null, response);
            }
            // error
            else {
                response = {
                    status: this.status,
                    statusText: this.statusText
                };

                _callback && _callback(response, null);
            }
        }
    }

    return {
        get: get
    }
})();