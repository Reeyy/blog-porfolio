# **FUNCTION DOCUMENTATION**

# NAvAdmin.tsx

## onTogleNav

###

If the navRef is not null, then remove the NAV_OPEN class and add the NAV_CLOSE class, otherwise add
the NAV_OPEN class and remove the NAV_CLOSE class.
`@param {boolean}` visibility - boolean
`@returns` The function onToggleNav is being returned.

```
 const onToggleNav = (visibility: boolean) => {
    const { current } = navRef;
    if (!current) return;
    const { classList } = current;
    if (visibility) {
      classList.remove(NAV_OPEN);
      classList.add(NAV_CLOSE);
    } else {
      classList.add(NAV_OPEN);
      classList.remove(NAV_CLOSE);
    }
  };
```

### Parameters

This function need Boolean parameters

### Return Value

The function onToogleNav returns itself.

## UpdateNavState

###

UpDateNavState() is a function that calls onToggleNav() with toggleNav as an argument, then sets
`toggleNav` to the opposite of what it was, and then sets the localStorage item `NAV_VISIBLITY` to the opposite of what it was.

```
const upDateNavState = () => {
    onToggleNav(toggleNav);
    const newState = !toggleNav;
    localStorage.setItem('nav-toogle', JSON.stringify(newState));
  };
```

### Parameters

This function does not take any parameters.

### Return Value

The function onToogleNav returns itself.

## UseEffect

```
  useEffect(() => {
    const navState = localStorage.getItem(NAV_VISIBLITY);
    if (navState !== null) {
      const newState = JSON.parse(navState);
      setToggleNav(newState);
      onToggleNav(!newState);
    } else {
      setToggleNav(true);
    }
  }, []);
```

###

Checking if the nav is open or closed and then setting the state of the nav to open or closed.

# NExt
