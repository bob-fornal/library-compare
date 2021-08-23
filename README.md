# library-compare

![Cards Cover Image](Cover-Image.png)

## Concept

Basically, I want to explore the various:

1. Installation Processes
2. Setup Processes
3. Code Management

   * Routing
   * Binding Props
   * Binding Events
   * Services (API Access, etc.)
   * Referencing Assets

4. Unit Testing
5. Code Execution (Build Process and Size)

To do this, four separate builds of the same project were implemented. There were three "frameworks":

1. Angular
2. React
3. Vue

And, the fourth build was Vanilla JS.

The core logic was complex enough to use several parts of the frameworks, but simple enough I could build this in a reasonable time frame.

## Comparison

| Category      | Angular | React | Vue | Vanilla-JavaScript |
|---------------|---------|-------|-----|--------------------|
| SIZES | | | | |
| => Code (assets 4.2M) | 19k | 28k | 21k | 232k |
| => Build (assets 4.2M) | 273k + assets | 760k + assets | 1.3M + assets | --- |
| => Development Time | 8 Hours | 8 Hours | 8 Hours | 3 Hours |
| => Version | 12.2.0 | 17.0.2 | 4.5.3 | --- |
| LOADING | | | | |
| => Transferred | 25.7k | 19.9k | 16.5k | 4.3M |
| => Resources | 7M | 6.2M | 7.7M | 4.3M |
| => Load Time | 705-740ms | 750-826ms | 640-654ms | 859-872ms |
| => DOM Loaded | 411-441ms | 293-327ms | 403-424ms | 255-260ms |
| Setup Process | `ng new <project-name>` | `vue create <project-name>` | `npx create-react-app <project-name>` | Manual |
| CODE MANAGEMENT | | | | |
| => Routing | Angular Router | React Router | Vue Router | Folder / File Structure |
| => Binding Props | [attribute] | attribute={} | :attribute="" | Manual |
| => Binding Events | (click)="" | onClick={} | v-on:click=fn() | Manual (jQuery) |
| => Services | baked-in | import class | import class | import class |
| => Referencing Assets | http-get, import | http-get, import | http-get, import | Manual |
| Unit Testing | baked-in (`ng generate [type] [location]`) | simple example | Manual | Manual |

## Angular

VERSION: 12.2.0

### Installation Processes

Installation is via the Angular CLI (ng) ...

```script
npm install -g @angular/cli
```

The CLI can be updated via `ng update` ...

```script
ng update @angular/cli @angular/core
```

### Setup Processes

A new project is started with `ng new <project-name>`. There are various options provided (routing and/or CSS).

* `ng new <project-name>`
* `ng serve --open`
* `ng test`
* `ng build`

### Code Management

* Angular Router
* Binding of Props (via attributes)
* Binding of Events (via attributes)
* Services (built-in tooling)
* Using http-get process as well as imports to retrieve JSON

### Unit Testing

Built-in Unit Testing, as well as E2E testing. The CLI includes these as `ng generate <type> <location/name>` is used.

### Code Execution

Build and Size:

* Code: 19k
* Build: 273k + assets
* DEV Time: 8 Hours

## React

VERSION: 17.0.2

### Installation Process

There is no real installation since the setup is via NPM/NPX.

### Setup Process

Installation is via npx (installed with NPM) ... `npx create-react-app <project-name>`

* `npx create-react-app <project-name>`<sup>*</sup>
* `npm start`
* `npm run build`
* `npm test`

<sup>*</sup> `npx` -- runs a command from a local or remote npm package ([SEE HERE](https://docs.npmjs.com/cli/v7/commands/npx)).

### Code Management

* React Router
* Binding and passing of Props (via attributes or functional level)
* Binding of Events (via attributes using original attributes, e.g. onClick)
* Services (trained to use cleaner data-model)
* Using http-get process

### Unit Testing

Jest is included in the base-build with one simple test.

This configuration allows for a VERY clean Unit Test and E2E Testing environment.

### Code Execution

Build and Size

* Code: 28k
* Build: 760k + assets
* DEV Time: 8 Hours

## Vue

VERSION: 4.5.13

### Installation Process

Installation is via the Vue CLI (vue) ...

```script
npm install -g @vue/cli @vue/cli-service-global
```

The CLI can be updated via `npm update` ...

```script
npm update @vue/cli @vue/cli-service-global
```

### Setup Processes

A new project is started with `vue create <project-name>`.

* `vue create <project-name>`
* `npm run serve --open`
* `npm run test`
* `npm run build`

### Code Management

* Vue Router
* Binding of Props (via custom-attributes)
* Binding of Events (via custom-attributes)
* Services (simple, can handle)
* Using http-get process

### Unit Testing

No tests provided for the base installation.

### Code Execution

Build and Size

* Code: 21k
* Build: 1.3M + assets
* DEV Time: 8 Hours

## Vanilla JavaScript

VERSION: none

### Installation Process

none

### Setup Processes

Manual creation of all files and structure.

### Code Management

Manual.

### Unit Testing

No tests.

### Code Execution

Build and Size

* Code: 232k
* Build: ---
* DEV Time: 3 Hours
