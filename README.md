# Michael Jackson Ipsum Generator

[![StyleCI](https://github.styleci.io/repos/960221622/shield?branch=master)](https://github.styleci.io/repos/960221622?branch=master)
[![Composer Install](https://github.com/jeremykenedy/michael-jackson-ipsum/actions/workflows/php.yml/badge.svg)](https://github.com/jeremykenedy/michael-jackson-ipsum/actions/workflows/php.yml)
[![App Version](https://img.shields.io/github/v/tag/jeremykenedy/michael-jackson-ipsum.svg?sort=semver&label=App%20Version)](https://github.com/jeremykenedy/michael-jackson-ipsum/releases)
[![License: MIT](https://img.shields.io/static/v1?label=License&message=MIT&color=green&style=flat)](https://opensource.org/licenses/MIT)

### Table of contents
- [About](#about)
- [Features](#features)
- [Installation Instructions](#installation-instructions)
    - [Build the Front End Assets with Vite](#build-the-front-end-assets-with-vitejs)
    - [Optionally Build Cache](#optionally-build-cache)
- [Screenshots](#screenshots)
- [File Tree](#file-tree)
- [License](#license)

## About
A Laravel + Vite + Vue 3 + TailwindCSS Michael Jackson Ipsum Generator.
Uses official [TailwindCSS](https://tailwindcss.com/). While the front end is
part of this repository it is a completely separated Vue 3 front end compiled using ViteJS.

## App Features
##### Built on:
- [✅ Laravel 12](https://github.com/laravel/laravel)
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
    <img src="https://michael-jackson-ipsum.s3.us-west-2.amazonaws.com/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAQWAKMVFOHGSKB7I4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T080149Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXWaG0efwlX%2BxRERuQGKK835MHqMQZZyQnLoIegDxRYgIhALePu00T8IYHOK9S4MqyDkESLv28P4VcnRUbsMpTARvwKuwCCBEQABoMMDQ3MjY2NDQxNTY0Igy1VHyb1RYMlJPyoJUqyQKnopgYAVE8AgfHq%2Bh0XDmIuiDrVBI%2BBq45rHgXLlCkO8axfQ%2Fz3hJ7sq6YvFTNluuLjHFWopw9GObiP5xSFGUCKK%2F0SDo91eZxOgEQZzfdOkIHkh0dd1D8SFqaubQoysCkAhQU4KDD4v7WYcR%2B%2FETNjmldM%2FCtIyFg8yP9CuBEKhVr9iI9SylXjLr66GABDjPCQTaUIdByrABCXkIugXw98hVqKf0OSOQelwmU5dnOGa2a4dZL%2Fa9q0QOmSdT0GEMwV7pWYCzHwpMih9zSxa8J6tf8IaZJHzCLaXxWuo1W1GBEzCeajpSEBXZ2tYdIe4gEmcDaJSzXQYm0xxh8guY%2FDJyR5VCG9u0Jpesbosoq8klntPQcFXm0yh99SB38OFS8RhuzSbGr7iwyyhfj8%2Fd2%2F5cTvMOgolvGHBI8%2BqpJH0wvaJzn6Ph8dTDvob6%2FBjqyAn83%2BzH6kWdyBR1ghFl4MSOrgJqwnev5PKrkI6BcdQg7cKGLWDSjIJjUU97uoCXHafjS1rfDhVj8tM3%2BYw32GOIxZdbeNIeHIv8%2Fv124ALl8mSK2uIq4N%2Fa6GQw3%2BD%2FeMWigBz%2Fj3spZrQcnCEVlEdjB88rdncJdFtob%2BBZ78aF9RWwu019VZnK4GrI1wVkhuLy59%2F3PWB%2FJTDdUZunUwtVZ%2Fads%2ByNQ%2FYubh49iBS4Asr6quWgi5cgTBqI4bqRD4HstnjrwgLS36sFIUTuzKUn36GI1NgSLlvOV2yx2jRLhXEdW0df2jvAJLwQtsrYqFiJdBKg5Ec3uYTDoTc4KH6xzU%2BVHmRmi6pv4Ewecke33HnqhgE1VhfEPsw3mMLcbrTy8FF7hWWA%2FkYbmQYpM0UKedQ%3D%3D&X-Amz-Signature=5e5dde662dc560c4d7988802c0b752a49f1b5fe012db638a8bfdb34b8776ae1b&X-Amz-SignedHeaders=host&response-content-disposition=inline" title="Home Page Light Mode" alt="Home Page Light Mode" width="48%"/>
    <img src="https://michael-jackson-ipsum.s3.us-west-2.amazonaws.com/2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAQWAKMVFODNMJX7ZI%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T080152Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICezBL0dnX9CRSqnLFqiZq5jkp6eXzLS5Yz7oW2uodXxAiAq%2FGONkFjutnbMc51K3tgX1lrAROkfdUcWFbjJY8B8NirsAggREAAaDDA0NzI2NjQ0MTU2NCIMmTaP142qCcaB8%2FLAKskCk%2Bo3UKFOdl5GGJqIhJMxDjzRL%2BBfEtZGHI6vaeGkTCQsdgsfQK6r34%2FPjGcztW5aQpH4VyHoHcYWauUIVujgGda8pOIhfxEL2fy3AI3zHi9hmz94SKHRqwpHeCxv7S5xLzCjvI8o%2FAUSwcOcI%2FoCeOOBwaYU6OjvkmCp77jWEACSSH1L9Z4tb9vBjLtMwFrxTvf9D8uWbK1ViCZ0V8NMn7O01Y3EBv4v8%2FgcsPjoQ44%2FSLfYVPXkAv3AqJ5gnG1a1I87%2BN5eMSffgpw1w%2BciINR46gfMjGg4pqCrdlZp%2B0h1s8YTFz5ipOdGenRCvIH3SZC%2BfDg0AFfdjoO5wpD2B%2BO7HxZjrvzOKrRVDgcDY%2BNhsxUP3JioO1Y%2FeFbJdUn8nCJyBZIKM7nVdMBveoNrfFfeWfHCKQWWmpRUlhKQWow9CMacXeCmEnEw76G%2BvwY6tAJKHqy3peqr5UX3P71S80ybiNf%2FjQRa7A140LZviAYuFHL%2FgcLPW02FVeAQtEGQA%2BbdGDERbQBQVHIR8RZ0UW1jst6OCk4hMcCRC99SQLaS3JJVwoK%2BmHCBknxYUfcp7D1QR18tl7tPaZD7R5lWYMPoVKa%2F%2Fj3APvT2pNB%2FA6JoNI0tOff9PbsSTX2Y2q1ILp5%2FeE%2BgSPyiFIuMNeOJyV93ww7KV3vQIzglleOM1f5Idz47JhV7TRTPo5bkmjOMPL2FxQBsMgoTFVmF7D%2Fis6nmVMoyqYim%2FgJEm6muyHCCg2%2Fi0Ghgi0gIBuDCcO31yrVcaqa1oUfFd0mLA3fHZ8o3bOEfa0YhuFsFKPA85cnF6jPOtB7ECktZeAPh%2BTRN9hyVp%2FnpLEiWge6B83V70DsTTIlVYQ%3D%3D&X-Amz-Signature=2d69fd73cad47dd21051d244e3ce28bdac6e36c10081040d9701784a9cb93f58&X-Amz-SignedHeaders=host&response-content-disposition=inline" title="Home Page Dark Mode" alt="Home Page Dark Mode" width="48%"/>
    <img src="https://michael-jackson-ipsum.s3.us-west-2.amazonaws.com/3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAQWAKMVFOJPGE2VQZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T080156Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiOJUrp5vegRCFZujiHn9OuuOp%2BBoqyd9VgEomHZU6pAiEAzScDpuvJ%2BtdyKfQaDMdmgXwX9DjqS6fYCVvL3mtudyIq7AIIERAAGgwwNDcyNjY0NDE1NjQiDLGSG%2Fk6DnVNwNqjrirJAoVXv53vMvrd0eBygfBNFEJxBBRYEncR55MeoPWH3EK6b%2B9z4x89RRxIAoYWdfcfvzUzF9K8GFtElaZmFtw1cq%2FKNilQqnrLg7Ysy8rGwwYh97LwDCbsnIBKhHBKaPZsCI%2BrHUbq7218gvUn7QNzEe1ksrnl%2FPP%2FdeOwX9XZIVEY26wJTbI3JTKn%2Flmq6XP0NmtlUqES8mOv2ztno%2Fo%2B5EMPGHtt9Ww5SWF06suFx4%2Buc8eV3wr9euYjTHv3yQzo88ITW2oAHvpV4g%2Bx5SDw7SpQE71XkqoSetC4QlVTnmN8ZKZNkNjUFk8yfSRDuq8o7ad%2FJWKopAy4yvOlwRA7n1xgiHcMumlsiMUiXu0l24MymJORkiDxz1PpA0iZX5yENr7cXSibRl84wW9mIGUSdGVyl5f%2F6bWXsGmB%2Fec%2FvNF4FyRH%2Bh59u4aDMO%2Bhvr8GOrMCurx66NGs1V3u0dOAtj8P7PEGkwqzx285OGAeejRiW6ciDqEKmBWVxebnNOL3WLf5CxA78fPL9Rro%2FFM6BvtGzeEakLXLEoROkM7wOvN%2FhB7QkiR6vHQ1qj%2FXK6N2lEdARYAWoZJYy1W%2F1SO3SHeg73LD9EbTFgIjEwS6hA3CdyJFlXbndZ3l500245Y5kBo6CCWF8oYec8FQHUyWPYfpCAxP71uTgrNmFx8dRCSenoaPaIGxXbovIMgcX%2B5Xit221RyS2ESILg1IL0tiOo4NgG0JcYLZ1%2Bxox4devLzTjzF%2BBTZGT5tCba5whtT5H6TH%2FigUi%2F08jyy9a2VTBvp3QNnXuJfct07vcET7ySfBB268C7ar7GI0HRTJOul3UR%2B4TG6phlwDOb%2F4kMRvDM%2B1cex3yQ%3D%3D&X-Amz-Signature=c6f3cdf76ec5533117bf9491c4077d84029ba7e3aad669988f28ff26db7c826b&X-Amz-SignedHeaders=host&response-content-disposition=inline" title="404 Page Light Mode" alt="404 Page Light Mode" width="48%"/>
    <img src="https://michael-jackson-ipsum.s3.us-west-2.amazonaws.com/4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAQWAKMVFOAN36GNUJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T080154Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDu%2B4xbqlaT1V%2FKPsGtHd5rNWUjo6ZQiXgsnX%2Fl15fzBAiAVVdqEWV%2FMo5G0aDjPYNylu9tvWqPm7UvFmiubEhNefirsAggREAAaDDA0NzI2NjQ0MTU2NCIMFUE2JorU9FpT3bSyKskCkq%2FUO67FSt8oYbtfz4TVQRK5sz6IDtwlBc3mj5MtWoCEIUELTxvZmtnvnMBXNX4zilEjj57B1ovvefDT%2B7Amtgo1dM20W4I%2FNMN%2BdgrVidTWQRMX7q3THA4lBsWonsVqS4GNabzpvmYsZaU2kR4r%2FR1BgAkIh%2BPrjV3KaxtoyqTZJFniCvIuSl1BXGqJUQ9ZpQnYaGETiHKRn8ILYUeYqjCKnuzhynIoiqCOdFO3%2FS1D89G5iA0KSQQu%2F6GseUeA14vb%2F9wV%2BgSV6p2i%2FPo2fMaAE%2B9%2B7f5kGdYOVmCrS0y5VlIzLx7RM8tYvNUkaya8XfGLphdxhY%2BNFLuld8%2FAOiQUu9lOYTfmkHqrTjtiNRMgrH14CEvdi8tf8dFBJJWYOv9ucnUVkiSruwtJ6xG7x%2F7RAVxbvK30YHx4f6LdyxqNKybaP0HUHqUw76G%2BvwY6tAJOhG58ce8OYo91RkvIFYCogkCtaLcSnh3MD07I0i9EroHbySSNqLdCr%2FbPfdpxED0fSDNvMB18OMNm5za%2BqT1DaDjgl%2Bc%2BeWQ45VX3rR5Uhdwjc0QC%2BvHY34J4R5Zyj6SWDWjvh1CyQMy2rJII2XofcY0n5NRcC7%2Ba64Ksw8Xq3E23luhsb4YxDNBMX%2FL%2FXQxzCUdbK2zHiKcV1sJf%2BbJZkMM9dHVSf8PjYLQspJjdXsoM45TEGNZOUvaZCWzSf42jts%2BBmUMY7fpYVmtDgCQ%2B2dwD3IK1fNKvgSVyJVe6liXzS80R%2BWa%2FTHlkriLsRqZQ7PHmBctfx6dV4%2BwPOy65fhdpvePe3mGFo1RWcGxvkV4AWI6Xjsk2BJDCxuCJbCwoZjI8qGGZxO5OPf5B8H9BM57ViA%3D%3D&X-Amz-Signature=6be47c4f22c902ab748a3c4f6f312ef4f0f5af69d10755b47f0e2167161cbfb4&X-Amz-SignedHeaders=host&response-content-disposition=inline" title="404 Page Dark Mode" alt="404 Page Dark Mode" width="48%"/>
</p>

## File Tree
```
.
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
│       ├── dependency-review.yml
│       ├── deploy.yml
│       ├── greetings.yml
│       ├── labeler.yml
│       ├── laravel.yml
│       ├── node.js.yml
│       ├── php.yml
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
│   │   ├── Kernel.php
│   │   └── Middleware
│   │       ├── EncryptCookies.php
│   │       ├── PreventRequestsDuringMaintenance.php
│   │       ├── TrimStrings.php
│   │       ├── TrustHosts.php
│   │       ├── TrustProxies.php
│   │       └── VerifyCsrfToken.php
│   └── Providers
│       ├── AppServiceProvider.php
│       └── RouteServiceProvider.php
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
│   ├── logging.php
│   ├── services.php
│   └── settings.php
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
│   │   └── logo
│   │       ├── logo-dark.png
│   │       ├── logo-light.png
│   │       ├── main-dark.png
│   │       └── main-light.png
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
│   │   │       └── IpsumComponent.vue
│   │   ├── composables
│   │   │   └── darkmode.js
│   │   ├── layouts
│   │   │   └── GuestLayout.vue
│   │   ├── routes
│   │   │   ├── index.js
│   │   │   └── routes.js
│   │   ├── services
│   │   │   ├── analytics.js
│   │   │   └── words.js
│   │   ├── store
│   │   │   ├── index.js
│   │   │   └── toast.js
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

34 directories, 104 files

```

* Tree command can be installed using brew: `brew install tree`
* File tree generated using command `tree -a -I '.git|node_modules|vendor|build|storage|tests|.DS_Store|.env'`

## License
Michael Jackson Ipsum Generator is licensed under the [MIT license](https://opensource.org/licenses/MIT). Enjoy!
