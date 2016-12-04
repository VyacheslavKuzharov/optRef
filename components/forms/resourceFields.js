module.exports = function (ngModule) {
    ngModule.factory('resourceFields', resourceFields);

    function resourceFields() {

        return {
            trafficSource: trafficSource,
            tracker: tracker
        };

        function trafficSource(sources){

            var fields = [
                {
                    className: 'row',
                    fieldGroup: [
                        {
                            key: 'host',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Host',
                                placeholder: 'Enter the host',
                                required: false
                            }
                        },
                        {
                            key: 'name',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Additional name',
                                placeholder: 'Enter the host',
                                required: true
                            }
                        }
                    ]
                },

                {
                    className: 'section-label',
                    template: '<h3>Enter your credentials</h3>'
                },
                {
                    key: 'login',
                    type: 'horizontalInput',
                    templateOptions: {
                        type: 'text',
                        label: 'Login',
                        placeholder: 'Enter login',
                        required: false
                    }
                },
                {
                    key: 'password',
                    type: 'horizontalInput',
                    templateOptions: {
                        type: 'password',
                        label: 'Password',
                        placeholder: 'Enter password',
                        required: false
                    }
                },
                {
                    className: 'section-label',
                    template: '<h3>Enter your API credentials</h3>'
                },
                {
                    key: 'apiLogin',
                    type: 'horizontalInput',
                    templateOptions: {
                        type: 'text',
                        label: 'API login',
                        placeholder: 'Enter API login',
                        required: false
                    }
                },
                {
                    key: 'apiPassword',
                    type: 'horizontalInput',
                    templateOptions: {
                        type: 'password',
                        label: 'API password',
                        placeholder: 'Enter API password',
                        required: false
                    }
                },
                {
                    key: 'apiKey',
                    type: 'horizontalInput',
                    templateOptions: {
                        type: 'text',
                        label: 'API Key',
                        placeholder: 'Enter API Key',
                        required: true
                    }
                }
            ];

            if(sources) {
                fields.unshift(
                    {
                        className: 'row',
                        fieldGroup: [
                            {
                                key: 'source',
                                type: 'horizontalSelect',
                                defaultValue: sources[0].id,
                                templateOptions: {
                                    label: 'Choose the source',
                                    valueProp: 'id',
                                    options: sources,
                                    required: false
                                }
                            }
                        ]
                    }
                );
                return fields
            }
            return fields
        }


        function tracker(sources){

            var fields = [
                {
                    className: 'row',
                    fieldGroup: [
                        {
                            key: 'host',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Host',
                                placeholder: 'Enter the host',
                                required: false
                            }
                        },
                        {
                            key: 'name',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Additional name',
                                placeholder: 'Enter the host',
                                required: true
                            }
                        }
                    ]
                },

                {
                    className: 'section-label',
                    template: '<h3>Enter your credentials</h3>'
                },
                {
                    key: 'login',
                    type: 'horizontalInput',
                    templateOptions: {
                        type: 'text',
                        label: 'Login',
                        placeholder: 'Enter login',
                        required: false
                    }
                },
                {
                    key: 'password',
                    type: 'horizontalInput',
                    templateOptions: {
                        type: 'password',
                        label: 'Password',
                        placeholder: 'Enter password',
                        required: false
                    }
                },
                {
                    className: 'section-label',
                    template: '<h3>Enter your API credentials</h3>'
                },
                {
                    key: 'apiLogin',
                    type: 'horizontalInput',
                    templateOptions: {
                        type: 'text',
                        label: 'API login',
                        placeholder: 'Enter API login',
                        required: false
                    }
                },
                {
                    key: 'apiPassword',
                    type: 'horizontalInput',
                    templateOptions: {
                        type: 'password',
                        label: 'API password',
                        placeholder: 'Enter API password',
                        required: false
                    }
                },
                {
                    key: 'apiKey',
                    type: 'horizontalInput',
                    templateOptions: {
                        type: 'text',
                        label: 'API Key',
                        placeholder: 'Enter API Key',
                        required: true
                    }
                }
            ];

            if(sources) {
                fields.unshift(
                    {
                        className: 'row',
                        fieldGroup: [
                            {
                                key: 'source',
                                type: 'horizontalSelect',
                                defaultValue: sources[0].id,
                                templateOptions: {
                                    label: 'Choose the source',
                                    valueProp: 'id',
                                    options: sources,
                                    required: false
                                }
                            }
                        ]
                    }
                );
                return fields
            }
            return fields
        }









    }
};