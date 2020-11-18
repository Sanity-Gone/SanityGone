CMS.registerEditorComponent({
    id: "stats",
    label: "Stats Block",
    fields: [{
            name: "attack",
            label: "Regular Attack",
            widget: "string"
        },
    ],
    pattern: /{{< stats attack=(.*) >}}/,
    fromBlock: function(match) {
        return {
            attack: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< stats attack="${obj.attack}" >}}`;
    },
    toPreview: function(obj) {
        return `{{< stats attack="${obj.attack}" >}}`;
    },
});

CMS.registerEditorComponent({
    id: "header",
    label: "Section Header",
    fields: [{
            name: "header",
            label: "Header Name",
            widget: "string"
        },
    ],
    pattern: /{{< header (.*) >}}/,
    fromBlock: function(match) {
        return {
            header: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< header ${obj.header} >}}`;
    },
    toPreview: function(obj) {
        return `{{< header ${obj.header} >}}`;
    },
});

CMS.registerEditorComponent({
    id: "tabbed",
    label: "Tabbed Header",
    fields: [{
            name: "tabbed",
            label: "Header Name",
            widget: "string"
        },
    ],
    pattern: /{{< tabbed (.*) >}}/,
    fromBlock: function(match) {
        return {
            header: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< tabbed ${obj.header} >}}`;
    },
    toPreview: function(obj) {
        return `{{< tabbed ${obj.header} >}}`;
    },
});