# FUNCTION DOCUMENTATION

## Toogle Nav

### This function is called `onToogleNav` and is used to toggle a navigation menu. If the `navRef` is not current, the function will return; if the `navRef` is current, it will add or remove the `NAV_OPEN` and `NAV_CLOSE` classes based on the current value of `toogleNav variable`. The toogleNav state will be set to the opposite of its current value.

```
  const onToogleNav = () => {
    const { current } = navRef;
    if (!current) return;
    const { classList } = current;
    if (toogleNav) {
      classList.remove(NAV_OPEN);
      classList.add(NAV_CLOSE);
    } else {
      classList.add(NAV_OPEN);
      classList.remove(NAV_CLOSE);
    }
    setToogleNav(!toogleNav);
  };
```

### Parameters

This function does not take any parameters.

### Return Value

The function onToogleNav returns itself.
