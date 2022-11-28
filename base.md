# ⚡️ Iconify

A bunch of random icons, across various categories, designed to be used in React
/ Vue applications. All the icons have no height or width attributes by default
so you'll need to provide either of the two to the icons.

### Notes

1. How do I theme the icons? :: We're gonna use the `<AndroidIcon />` as an
   example. Add `color="rgb(var(--android))` to the component:
   `<AndroidIcon color="rgb(var(--android))" />` Now go to your stylesheet and
   add:

```css
:root {
	--android: #a4c439;
}
[data-theme="dark"] {
	--android: #fff;
}
```

Now when you toggle between the darkmode it will swap the color for the icon. If
you'd just wanna swap white/black (i.e. for mono icons) then you can just create
a `--background: #fff` and `--foreground: #000` variables to the root. Then add
`<GithubIcon color="rgb(var(--foreground))" />` to the component and now it will
swap for darkmode as long as you make sure the following is somewhere in your
css:

```css
:root {
	--background: #fff;
	--foreground: #000;
}
[data-theme="dark"] {
	--background: #000;
	--foreground: #fff;
}
```

### Table of Contents
