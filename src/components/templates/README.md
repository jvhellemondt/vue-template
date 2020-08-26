Template componenten combineren pages met templates. Templates zouden componenten zoals headers, footers of sidebars moeten bevatten, die gebruikt worden over de gehele app.

Het zijn gewoon .vue componenten welke opgeslagen zijn in src/templates. Ze moeten gedeclareerd worden als globale componenten en geimporteerd worden per page om te gebruiken.

Daarnaast dient iedere template een <slot> component te hebben. Dit is waar de content van pages en templates ingevoegd wordt. Templates kunnen meerdere slots hebben.

###### Voorbeeld template

```
<!-- Template -->
<template>
  <div>
    <header />
    <slot></slot> <!-- Page content will be inserted here -->
    <footer />
  </div>
</template>
```

Meer informatie: https://gridsome.org/docs/layouts/

Now, friends, it’s time to say goodbye to our chemistry analogy. The language of atoms, molecules, and organisms carries with it a helpful hierarchy for us to deliberately construct the components of our design systems. But ultimately we must step into language that is more appropriate for our final output and makes more sense to our clients, bosses, and colleagues. Trying to carry the chemistry analogy too far might confuse your stakeholders and cause them to think you’re a bit crazy. Trust me.

Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure. To build on our previous example, we can take the header organism and apply it to a homepage template.

This homepage template displays all the necessary page components functioning together, which provides context for these relatively abstract molecules and organisms. When crafting an effective design system, it’s critical to demonstrate how components look and function together in the context of a layout to prove the parts add up to a well-functioning whole. We’ll discuss this more in a bit.

Another important characteristic of templates is that they focus on the page’s underlying content structure rather than the page’s final content. Design systems must account for the dynamic nature of content, so it’s very helpful to articulate important properties of components like image sizes and character lengths for headings and text passages.

Mark Boulton discusses the importance of defining the underlying content structure of a page:

> You can create good experiences without knowing the content. What you can’t do is create good experiences without knowing your content structure. What is your content made from, not what your content is. \
> -- Mark Boulton

By defining a page’s skeleton we’re able to create a system that can account for a variety of dynamic content, all while providing needed guardrails for the types of content that populate certain design patterns.

More info: https://atomicdesign.bradfrost.com/chapter-2/#templates
