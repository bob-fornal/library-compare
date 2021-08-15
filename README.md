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

To do this, four separate builds of the same project were done. There were three "frameworks":

1. Angular
2. React
3. Vue

And, the fourth build was Vanilla JS.

The core logic was complex enough to use several parts of the frameworks, but simple enough I could build this in a reasonable time frame.

### Angular

VERSION: 12.2.0

#### Installation Processes

Installation is via the Angular CLI (ng) ...

```script
npm install -g @angular/cli
```

The CLI can be updated via `ng update` ...

```script
ng update @angular/cli @angular/core
```

#### Setup Processes

A new project is started with `ng new <project-name>`. There are various options provided (routing and/or CSS).

* `ng new <project-name>`
* `ng serve --open`
* `ng test`
* `ng build`

#### Code Management

* Angular Router
* Binding of Props (via attributes)
* Binding of Events (via attributes)
* Services (built-in tooling)
* Using http-get process as well as imports to retrieve JSON

#### Unit Testing

Built-in Unit Testing, as well as E2E testing. The CLI includes these as `ng generate <type> <location/name>` is used.

#### Code Execution

Build and Size

### React

VERSION: 17.0.2

#### Installation Process

There is no real installation since the setup is via NPM/NPX.

#### Setup Process

Installation is via npx (installed with NPM) ... `npx create-react-app <project-name>`

* `npx create-react-app <project-name>`
* `npm start`
* `npm run build`
* `npm test`

#### Code Management

* React Router
* Binding and passing of Props (via attributes or functional level)
* Binding of Events (via attributes using original attributes, e.g. onClick)
* Services (trained to use cleaner data-model)
* Using http-get process

#### Unit Testing

Jest is included in the base-build with one simple test.

This configuration allows for a VERY clean Unit Test and E2E Testing environment.

#### Code Execution

Build and Size

### Vue

VERSION: 4.5.13

#### Installation Process

Installation is via the Vue CLI (vue) ...

```script
npm install -g @vue/cli @vue/cli-service-global
```

The CLI can be updated via `npm update` ...

```script
npm updatre @vue/cli @vue/cli-service-global
```

#### Setup Processes

A new project is started with `vue create <project-name>`.

* `vue create <project-name>`
* `npm run serve --open`
* `npm run test`
* `npm run build`

#### Code Management

* Vue Router
* Binding of Props (via custom-attributes)
* Binding of Events (via custom-attributes)
* Services (simple, can handle)
* Using http-get process

#### Unit Testing

No tests provided for the base installation.

#### Code Execution

Build and Size

### Vanilla JavaScript

VERSION: none

#### Installation Process

none

#### Setup Processes

Manual creation of all files and structure.

#### Code Management

Manual.

#### Unit Testing

No tests.

#### Code Execution

Build and Size
