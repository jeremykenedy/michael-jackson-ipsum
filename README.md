# Michael Jackson Ipsum Generator

[![StyleCI](https://github.styleci.io/repos/537735029/shield?branch=released&style=flat)](https://github.styleci.io/repos/537735029?branch=master)
[![CodeQL](https://github.com/jeremykenedy/laravel-spa/actions/workflows/codeql.yml/badge.svg?branch=master)](https://github.com/jeremykenedy/laravel-spa/actions/workflows/codeql.yml)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=jeremykenedy_laravel-spa&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jeremykenedy_laravel-spa)
[![GitGuardian scan](https://github.com/jeremykenedy/laravel-spa/actions/workflows/gitguardian.yml/badge.svg)](https://github.com/jeremykenedy/laravel-spa/actions/workflows/gitguardian.yml)
[![Composer Install](https://github.com/jeremykenedy/laravel-spa/actions/workflows/php.yml/badge.svg)](https://github.com/jeremykenedy/laravel-spa/actions/workflows/php.yml)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=jeremykenedy_laravel-spa&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=jeremykenedy_laravel-spa)
[![App Version](https://img.shields.io/github/v/tag/jeremykenedy/laravel-spa.svg?sort=semver&label=App%20Version)](https://github.com/jeremykenedy/laravel-spa/releases)
[![License: MIT](https://img.shields.io/static/v1?label=License&message=MIT&color=green&style=flat)](https://opensource.org/licenses/MIT)

### Table of contents
- [About](#about)
- [Features](#features)
- [Installation Instructions](#installation-instructions)
    - [Build the Front End Assets with Vite](#build-the-front-end-assets-with-vitejs)
    - [Optionally Build Cache](#optionally-build-cache)
- [Seeds](#seeds)
    - [Seeded Users](#seeded-users)
- [Socialite](#socialite)
    - [Get Socialite Login API Keys](#get-socialite-login-api-keys)
    - [Add More Socialite Logins](#add-more-socialite-logins)
- [Screenshots](#screenshots)
- [File Tree](#file-tree)
- [License](#license)

## About
A Laravel + Vite + Vue 3 + TailwindCSS Michael Jackson Ipsum Generator.
Uses official [TailwindCSS](https://tailwindcss.com/). While the front end is
part of this repository it is a completely separated Vue 3 front end compiled using ViteJS.

## App Features
##### Built on:
- [✅ Laravel 11](https://github.com/laravel/laravel)
- [✅ Vite](https://laravel.com/docs/9.x/vite)
- [✅ Vue 3](https://github.com/vuejs/vue)
- [✅ TailwindCSS (w/ `@tailwindcss/forms` and `@tailwindcss/aspect-ratio`)](https://tailwindcss.com/)
- [✅ VueRouter](https://router.vuejs.org/)
- [✅ Pinia](https://pinia.vuejs.org/)
- [✅ Headless UI](https://headlessui.com/)
- [✅ Heroicons](https://heroicons.com/)
- [✅ ESLint](https://eslint.org/) with [✅ Prettier](https://prettier.io/docs/en/index.html)

##### Features:
- Home Page
- 404 Page
- [Google Analytics (optional)](https://matteo-gabriele.gitbook.io/vue-gtag/v/next/)

## Installation Instructions
1. Run `git clone https://github.com/jeremykenedy/michael-jackson-ipsum.git michael-jackson-ipsum`
2. From the projects root run `cp .env.example .env`
3. Configure your `.env` file
4. Run `composer install` from the projects root folder
5. From the projects root folder run `sudo chmod -R 755 ../michael-jackson-ipsum`
6. From the projects root folder run `php artisan key:generate`
7. Compile the front end assets with [npm steps](#using-npm) or [yarn steps](#using-yarn).

#### Build the Front End Assets with ViteJs
##### Using NPM:
1. From the projects root folder run `npm install`
2. From the projects root folder run `npm run dev` or `npm run build`
  * You can lint assets with `npm run lint`
  * You can clean the syntax with `npm run clean`

##### Using Yarn:
1. From the projects root folder run `yarn install`
2. From the projects root folder run `yarn run dev` or `yarn run build`
  * You can lint assets with `yarn run lint`
  * You can clean the syntax with `yarn run clean`

###### And thats it with the caveat of setting up and configuring your development environment.

## Screenshots

<p float="left">
    <img src="https://laravel-spa.s3.us-west-2.amazonaws.com/v3/login-sm.png" title="Login Social Media" alt="Login Social Media" width="48%"/>
</p>

## File Tree
```
MichaelJacksonIpsum
├── .editorconfig
├── .env.example
├── .eslintrc.js
├── .eslintrc.json
├── .gitattributes
├── .github
│   ├── FUNDING.yml
│   ├── dependabot.yml
│   ├── labeler.yml
│   └── workflows
│       ├── build-changelog.yml
│       ├── codacy.yml
│       ├── codeql.yml
│       ├── dependency-review.yml
│       ├── deploy.yml
│       ├── gitguardian.yml
│       ├── greetings.yml
│       ├── labeler.yml
│       ├── laravel.yml
│       ├── node.js.yml
│       ├── php.yml
│       ├── sentry.yml
│       └── stale.yml
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── .scripts
│   └── deploy.sh
├── .styleci.yml
├── LICENSE
├── README.md
├── SECURITY.md
├── app
│   ├── Console
│   │   └── Kernel.php
│   ├── Exceptions
│   │   └── Handler.php
│   ├── Http
│   │   ├── Controllers
│   │   │   └── Controller.php
│   │   ├── Kernel.php
│   │   └── Middleware
│   │       ├── Authenticate.php
│   │       ├── EncryptCookies.php
│   │       ├── PreventRequestsDuringMaintenance.php
│   │       ├── RedirectIfAuthenticated.php
│   │       ├── TrimStrings.php
│   │       ├── TrustHosts.php
│   │       ├── TrustProxies.php
│   │       ├── ValidateSignature.php
│   │       └── VerifyCsrfToken.php
│   └── Providers
│       ├── AppServiceProvider.php
│       ├── AuthServiceProvider.php
│       ├── BroadcastServiceProvider.php
│       ├── EventServiceProvider.php
│       ├── RouteServiceProvider.php
│       └── ViewComposerServiceProvider.php
├── artisan
├── bootstrap
│   ├── app.php
│   └── cache
│       ├── .gitignore
│       ├── packages.php
│       └── services.php
├── composer.json
├── composer.lock
├── config
│   ├── app.php
│   ├── auth.php
│   ├── broadcasting.php
│   ├── cache.php
│   ├── cors.php
│   ├── database.php
│   ├── filesystems.php
│   ├── hashing.php
│   ├── logging.php
│   ├── mail.php
│   ├── queue.php
│   ├── request-docs.php
│   ├── services.php
│   ├── session.php
│   ├── settings.php
│   └── view.php
├── eslint.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettier.config.js
├── public
│   ├── .htaccess
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── favicon.png
│   ├── images
│   │   └── placeholder.jpg
│   ├── index.php
│   ├── robots.txt
│   ├── serviceworker.js
│   ├── site.webmanifest
│   └── sw.js
├── resources
│   ├── css
│   │   ├── app.css
│   │   └── normalize.css
│   ├── img
│   │   ├── 404-light.png
│   │   ├── 404.png
│   │   ├── favicon
│   │   │   ├── android-chrome-192x192.png
│   │   │   ├── android-chrome-512x512.png
│   │   │   ├── apple-touch-icon.png
│   │   │   ├── favicon-16x16.png
│   │   │   ├── favicon-32x32.png
│   │   │   ├── favicon.ico
│   │   │   ├── favicon.png
│   │   │   └── site.webmanifest
│   │   ├── fonts
│   │   │   ├── Leckerli_One
│   │   │   │   ├── LeckerliOne-Regular.ttf
│   │   │   │   └── OFL.txt
│   │   │   ├── Nunito
│   │   │   │   ├── Nunito-Italic-VariableFont_wght.ttf
│   │   │   │   ├── Nunito-VariableFont_wght.ttf
│   │   │   │   ├── OFL.txt
│   │   │   │   ├── README.txt
│   │   │   │   └── static
│   │   │   │       ├── Nunito-Black.ttf
│   │   │   │       ├── Nunito-BlackItalic.ttf
│   │   │   │       ├── Nunito-Bold.ttf
│   │   │   │       ├── Nunito-BoldItalic.ttf
│   │   │   │       ├── Nunito-ExtraBold.ttf
│   │   │   │       ├── Nunito-ExtraBoldItalic.ttf
│   │   │   │       ├── Nunito-ExtraLight.ttf
│   │   │   │       ├── Nunito-ExtraLightItalic.ttf
│   │   │   │       ├── Nunito-Italic.ttf
│   │   │   │       ├── Nunito-Light.ttf
│   │   │   │       ├── Nunito-LightItalic.ttf
│   │   │   │       ├── Nunito-Medium.ttf
│   │   │   │       ├── Nunito-MediumItalic.ttf
│   │   │   │       ├── Nunito-Regular.ttf
│   │   │   │       ├── Nunito-SemiBold.ttf
│   │   │   │       └── Nunito-SemiBoldItalic.ttf
│   │   │   └── Quicksand
│   │   │       ├── OFL.txt
│   │   │       ├── Quicksand-VariableFont_wght.ttf
│   │   │       ├── README.txt
│   │   │       └── static
│   │   │           ├── Quicksand-Bold.ttf
│   │   │           ├── Quicksand-Light.ttf
│   │   │           ├── Quicksand-Medium.ttf
│   │   │           ├── Quicksand-Regular.ttf
│   │   │           └── Quicksand-SemiBold.ttf
│   │   ├── mj
│   │   │   ├── mj-dark.png
│   │   │   ├── mj-head-dark.png
│   │   │   ├── mj-head-light.png
│   │   │   ├── mj-light.jpg
│   │   │   └── mj-light.png
│   │   └── plugs.png
│   ├── js
│   │   ├── app.js
│   │   ├── bootstrap.js
│   │   ├── components
│   │   │   ├── ToggleDarkMode.vue
│   │   │   ├── common
│   │   │   │   └── AppButton.vue
│   │   │   ├── includes
│   │   │   │   ├── AppFooter.vue
│   │   │   │   └── AppNav.vue
│   │   │   └── ipsums
│   │   │       └── MichaelIpsum.vue
│   │   ├── composables
│   │   │   └── darkmode.js
│   │   ├── lang
│   │   │   ├── bn.json
│   │   │   ├── en.json
│   │   │   ├── es.json
│   │   │   ├── fr.json
│   │   │   ├── pt-BR.json
│   │   │   └── zh-CN.json
│   │   ├── layouts
│   │   │   └── GuestLayout.vue
│   │   ├── plugins
│   │   │   └── i18n.js
│   │   ├── routes
│   │   │   ├── index.js
│   │   │   ├── middleware.js
│   │   │   └── routes.js
│   │   ├── services
│   │   │   ├── analytics.js
│   │   │   └── words.js
│   │   ├── store
│   │   │   ├── index.js
│   │   │   └── toast.js
│   │   ├── validation
│   │   │   └── rules.js
│   │   └── views
│   │       ├── errors
│   │       │   └── NotFound.vue
│   │       └── home
│   │           └── HomePage.vue
│   └── views
│       └── app.blade.php
├── routes
│   └── web.php
├── tailwind.config.js
├── tailwindcss-perspective.js
├── vite.config.js
└── vue.config.js

45 directories, 170 files

```

* Tree command can be installed using brew: `brew install tree`
* File tree generated using command `tree -a -I '.git|node_modules|vendor|build|storage|tests|.DS_Store|.env'`

## License
Michael Jackson Ipsum Generator is licensed under the [MIT license](https://opensource.org/licenses/MIT). Enjoy!
