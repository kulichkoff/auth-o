# Material 3 Styles

This is a styles module. There are some basics of Material Design such as
palette, typography, elevations abd even breakpoints.

## Include to the components

```scss
@use '../../styles/index' as mat3; // path to index.scss file
```

## Typography

It is very simple to use.

```scss
.text {
  // use this to include mixin of a text preset
  @include mat3.display-large;
}

p {
  // using another mixin
  @include mat3.body-medium;
}

// etc.
```

We have many text presets. See the table below. All of them have **3** types
of the size - `large`, `medium`, `small`. So, you can use, for example, as
your general content preset **body large**. It will be `mat3.body-large` mixin.

| Text preset |
| ----------- |
| Display     |
| Headline    |
| Title       |
| Label       |
| Body        |

## Color palette

The beauty of this library is that you don't have to worry about the
entire color palette. It is **encapsulated** and you can use convenient
**functions** to get the color from the palette.

```scss
.sidebar {
  // Using color() function to get the color code from the palette
  // segment you need. The first argument is a palette segment, the
  // second one is a grade.
  background-color: mat3.color(primary. 80);
}

.surface {
  // mat3.surface() is a mixin to set background as a surface;
  // this works through the overlay of two colors
  //
  // mat3.surface() takes as an argument the degree
  // of surface (from 0 to 5)
  @include mat3.surface(3);
}
```

#### How the palette works

There are some palette grades in Material Design: 0, 10, 20, 30, ...,
90, 95, 99, 100. Also, we have tonal palettes: primary, secondary,
tertiary, error, neutral, neutral variant. They are used to
build a theme.

You use the theme palette using `mat3.color()` function. The whole
theme is below:

```scss
// from-palette is a entire function to get specific color
// from thet palaette (not from theme)

$theme: (
  primary: from-palette(primary, 40),
  on-primary: from-palette(primary, 100),
  primary-container: from-palette(primary, 90),
  on-primary-container: from-palette(primary, 10),

  secondary: from-palette(secondary, 40),
  on-secondary: from-palette(secondary, 100),
  secondary-container: from-palette(secondary, 90),
  on-secondary-container: from-palette(secondary, 10),

  tertiary: from-palette(tertiary, 40),
  on-tertiary: from-palette(tertiary, 100),
  tertiary-container: from-palette(tertiary, 90),
  on-tertiary-container: from-palette(tertiary, 10),

  error: from-palette(error, 40),
  on-error: from-palette(error, 100),
  error-container: from-palette(error, 90),
  on-error-container: from-palette(error, 10),

  background: from-palette(neutral, 99),
  on-background: from-palette(neutral, 10),

  surface: from-palette(neutral, 99),
  on-surface: from-palette(neutral, 10),

  surface-variant: from-palette(neutral-variant, 90),
  on-surface-variant: from-palette(neutral-variant, 30),

  outline: from-palette(neutral-variant, 50),
  outline-variant: from-palette(neutral-variant, 80),
);
```

## Elevations

Elevation is used to "level the component up". So you can highlight
some element in your design.

```scss
.product-card {
  // mixin mat3.elevation() takes as an argument the degree
  // of elevation (from 0 to 5).
  @include mat3.elevation(2);
}
```

In isolation, elevation is simply the degree of shadow under a
design element. It is often used with a degree of surface.

```scss
.product-card {
  @include mat3.elevation(2);

  // withou the surface, elevation is just a box-shadow,
  // but it is prettier now
  @include mat3.surface(2);
}
```

## Breakpoints

Here we are ready to provide you with pre-prepared mixins for
layout for different screens.

```scss
// from 1440px width
// this one can be omitted
@include mat3.media-desktop {
  // layout for desktop resolutions
  body {
    @include mat3.body-large;
  }
  // ...
}

// from 600px width
@include mat3.media-tablet {
  // layout for tablet resolutions
  // ...
}

// up to 599px width
@include mat3.media-mobile {
  // layout for mobile resolutions
  body {
    @include mat3.body-medium;
  }
  // ...
}
```

This module also provides a function that allows you to get the
width of the content for a specific type of screen

```scss
.container {
  width: 100%;
  max-width: mat3.content-width(desktop);
  // It has desktop, tablet and mobile widths
}
```
