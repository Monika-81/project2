Credit


https://stackoverflow.com/questions/1909648/stacking-divs-on-top-of-each-other
<br>
https://jsfiddle.net/qg70bfdt/
https://stackoverflow.com/users/3955557/mario-petrovic

```
.container {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  background-color: yellow;
  /* important part */
  display: grid;
  place-items: center;
  grid-template-areas: "inner-div";
}

.inner {
  height: 100px;
  width: 100px;
  /* important part */
  grid-area: inner-div;
}
```