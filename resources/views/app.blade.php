@php
    $config = [
        'appName' => config('app.name'),
        'locale' => $locale = app()->getLocale(),
        'locales' => config('app.locales'),
    ];
@endphp
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @if($ga_enabled)
            <script async src="https://www.googletagmanager.com/gtag/js?id={{$ga_key}}"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '{{ $ga_key }}');
            </script>
        @endif
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name') }}</title>
        <meta name="description" content="{{ config('settings.description') }}">
        <meta name="keywords" content="{{ config('settings.keywords') }}">
        <meta name="author" content="{{ config('settings.author') }}">
        <meta name="theme-color" content="#ffffff">
        <link rel="icon" href="{{ config('app.url') }}/favicon.png">
        <link rel="apple-touch-icon" sizes="180x180" href="{{ config('app.url') }}/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ config('app.url') }}/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ config('app.url') }}/favicon-16x16.png">
        <link rel="mask-icon" href="{{ config('app.url') }}/favicon-32x32.png" color="#FFFFFF">
        <link rel="manifest" href="{{ config('app.url') }}/site.webmanifest">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Leckerli+One&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
        <script>
            window.config = @json($config);
        </script>
        <script>
            const GA_ENABLED="{{ $ga_enabled }}"
            const GA_TAG="{{ $ga_key }}"
            const APP_URL="{{ config('app.url') }}"
            const APP_NAME="{{ config('app.name') }}"
        </script>
        @vite(['resources/css/app.css'])
    </head>
    <body class="bg-gray-50 dark:bg-gray-800 h-screen antialiased leading-none font-sans overflow-x-hidden overflow-y-auto">
        <div id="app" v-cloak>
            <router-view></router-view>
        </div>
        @vite(['resources/js/app.js'])
    </body>
</html>
