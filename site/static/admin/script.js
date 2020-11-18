CMS.registerEditorComponent({
    id: "stats",
    label: "Stats Block",
    fields: [{
            name: "attack",
            label: "Regular Attack",
            widget: "string"
        },
    ],
    pattern: /{{< stats attack="([a-zA-Z0-9]+)" >}}/,
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
    pattern: /{{< header ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            header: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< header ${obj.attack} >}}`;
    },
    toPreview: function(obj) {
        return `{{< header ${obj.attack} >}}`;
    },
});