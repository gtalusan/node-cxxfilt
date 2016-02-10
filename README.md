# c++filt pipe for node

Make sure c++filt for your target platform is installed.

```
const cxxfilt = require('node-cxxfilt');
cxxfilt(process.stdin).pipe(process.stdout);
```

If you're familiar with cross compiling, node-cxxfilt also honours the usual `CROSS_COMPILE` environment variable for targeting different platforms.

```
process.env.CROSS_COMPILE = 'arm-linux-';
const cxxfilt = require('node-cxxfilt');
cxxfilt(process.stdin).pipe(process.stdout);
```
