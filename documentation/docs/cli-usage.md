---
id: cli-usage
title: Usage
sidebar_label: Usage
---

After starting, an interactive menu will let you configure the component to be created. Firstly, you'll be asked for the type of the component whether it's a page or a functional component. Then you'll be prompted with the other options relevant to your selection.

For example, let's go through the steps of the creation of a new page component.

> Enter page name

-   Enter the desired filename for the page. _Spaces are not allowed!_
-   The tool will check for the existing filenames in the project and reject if finds any.
-   The interface files are going to be created under Interfaces/Pages directory.

> Do you want to add custom route or use default route name?,

-   You can define custom route for page which is specified in `server/routes.ts`
-   It will set filename as a route if you don't want to add custom route.

> Do you want to have a connection to store?

If you choose yes, the following store connection methods and imports will be generated:

-   Implement `getInitialProps` and appropriate imports in page component file,
-   An action file in the _Actions/{YourAwesomePage}_ folder,
-   Prepend export line into _Actions/index.ts_,
-   An action constants object in _Definitions/ActionConsts/ActionConsts.ts_,
-   Append component interface in _IStore_ interface file.

> Do you want to create a new reducer or use your own?

-   If you choose yes, a new reducer file for page will be created in src/Redux/Reducers/{yourAwesomePage} directory and reducer will be appended in combineReducers.

> What kind of css do you want to implement?

-   If you choose scss/sass, a style.scss file will be created right next to page file.
-   Otherwise a styled container element will be created with default styles.

Eventually, you'll end up with a page or component with style and test files in no time.
