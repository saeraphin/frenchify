# frenchify
Convert .md French text to html compliant with [French typography rules](http://liberpedia.net/s/ponctuation.jpg) and some useful exta formatting

## rules

rules.json

### French typography

* thin non breaking space from normal space for ?!;
* non breaking space from normal space for :
* em dash from --
* French quotes with non breaking spaces from regular double quotes	

### Extra formatting

* footnotes expected format

>blabla(15)
>
>(15) note about blabla

## to use

* `node index.js yourfile.md`