<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb0d4c6f10bd69c10829761acce5ba8ea
{
    public static $prefixLengthsPsr4 = array (
        'L' => 
        array (
            'LifterLMS\\CLI\\' => 14,
            'LLMS\\' => 5,
        ),
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'LifterLMS\\CLI\\' => 
        array (
            0 => __DIR__ . '/../..' . '/libraries/lifterlms-cli/src',
        ),
        'LLMS\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'WP_Async_Request' => __DIR__ . '/..' . '/deliciousbrains/wp-background-processing/classes/wp-async-request.php',
        'WP_Background_Process' => __DIR__ . '/..' . '/deliciousbrains/wp-background-processing/classes/wp-background-process.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb0d4c6f10bd69c10829761acce5ba8ea::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb0d4c6f10bd69c10829761acce5ba8ea::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitb0d4c6f10bd69c10829761acce5ba8ea::$classMap;

        }, null, ClassLoader::class);
    }
}
