# Documentation
## WiConvert
```
undefined
```
## WiCrypto
```
{
    "required": [
        "pairs"
    ],
    "properties": {
        "pairs": {
            "title": "Pairs",
            "type": "array",
            "items": {
                "title": "Pair",
                "type": "string"
            }
        }
    }
}
```
## WiDraw
```
undefined
```
## WiExample
```
{
    "required": [
        "example_text",
        "num"
    ],
    "properties": {
        "example_text": {
            "title": "example Text",
            "type": "string"
        },
        "num": {
            "title": "Example num",
            "type": "number"
        }
    }
}
```
## WiMarks
```
{
    "required": [
        "urls"
    ],
    "properties": {
        "urls": {
            "title": "Urls",
            "type": "array",
            "uniqueItems": true,
            "items": {
                "type": "object",
                "required": [
                    "label",
                    "icon",
                    "url"
                ],
                "properties": {
                    "label": {
                        "title": "Label",
                        "type": "string"
                    },
                    "url": {
                        "title": "Url",
                        "type": "string"
                    },
                    "icon": {
                        "title": "Icon",
                        "type": "string"
                    }
                }
            }
        }
    }
}
```
## WiNote
```
undefined
```
## WiOpenW
```
{
    "required": [
        "location",
        "apiKey"
    ],
    "properties": {
        "location": {
            "title": "Location",
            "type": "string"
        },
        "apiKey": {
            "title": "API key",
            "type": "string"
        }
    }
}
```
## WiRSS
```
{
    "required": [
        "url"
    ],
    "properties": {
        "url": {
            "type": "string"
        },
        "highlight": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    }
}
```
## WiSpacer
```
{
    "required": [
        "height"
    ],
    "properties": {
        "height": {
            "title": "Height in px",
            "type": "number"
        }
    }
}
```