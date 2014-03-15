rework-plugin-references
====================

[![Build Status](https://travis-ci.org/reworkcss/rework-plugin-references.png)](https://travis-ci
.org/reworkcss/rework-plugin-references)

Add property reference support.

```css
button {
  width: 120px;
}

button.round {
  width: 50px;
  height: @width;
  line-height: @height;
  background-size: @width @height;
}
```

yields:

```css
button {
  width: 120px
}

button.round {
  width: 50px;
  height: 50px;
  line-height: 50px;
  background-size: 50px 50px
}
```
