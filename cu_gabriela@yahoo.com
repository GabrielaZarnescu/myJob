[33mcommit 85abb78aa6c755600665bf937d9a904bac866d12[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m, [m[1;31morigin/idk[m[33m, [m[1;31morigin/HEAD[m[33m, [m[1;32midk[m[33m)[m
Author: GabrielaZarnescu <zarnescu_gabriela@yahoo.com>
Date:   Fri Jul 23 17:14:43 2021 +0300

    some cleanup

[1mdiff --git a/client/package-lock.json b/client/package-lock.json[m
[1mindex 4f7ee9a..054feae 100644[m
[1m--- a/client/package-lock.json[m
[1m+++ b/client/package-lock.json[m
[36m@@ -1283,6 +1283,15 @@[m
       "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-1.2.0.tgz",[m
       "integrity": "sha512-wdppn25U8z/2yiaT6YGquE6X8sSv7hNMWSXYSSU1jGv/yd6XqjXgTDJ8KP4NgjTXfJ3GbRjeeb8RTV7a/VpM+w=="[m
     },[m
[32m+[m[32m    "@hypnosphi/create-react-context": {[m
[32m+[m[32m      "version": "0.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@hypnosphi/create-react-context/-/create-react-context-0.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-V1klUed202XahrWJLLOT3EXNeCpFHCcJntdFGI15ntCwau+jfT386w7OFTMaCqOgXUH1fa0w/I1oZs+i/Rfr0A==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "gud": "^1.0.0",[m
[32m+[m[32m        "warning": "^4.0.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "@istanbuljs/load-nyc-config": {[m
       "version": "1.1.0",[m
       "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",[m
[36m@@ -3699,6 +3708,11 @@[m
       "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",[m
       "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24="[m
     },[m
[32m+[m[32m    "bootstrap": {[m
[32m+[m[32m      "version": "5.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-5.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-1Ge963tyEQWJJ+8qtXFU6wgmAVj9gweEjibUdbmcCEYsn38tVwRk8107rk2vzt6cfQcRr3SlZ8aQBqaD8aqf+Q=="[m
[32m+[m[32m    },[m
     "brace-expansion": {[m
       "version": "1.1.11",[m
       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",[m
[36m@@ -4090,6 +4104,11 @@[m
         }[m
       }[m
     },[m
[32m+[m[32m    "classnames": {[m
[32m+[m[32m      "version": "2.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/classnames/-/classnames-2.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-OlQdbZ7gLfGarSqxesMesDa5uz7KFbID8Kpq/SxIoNGDqY8lSYs0D+hhtBXhcdB3rcbXArFr7vlHheLk1voeNA=="[m
[32m+[m[32m    },[m
     "clean-css": {[m
       "version": "4.2.3",[m
       "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-4.2.3.tgz",[m
[36m@@ -4780,6 +4799,11 @@[m
         }[m
       }[m
     },[m
[32m+[m[32m    "csstype": {[m
[32m+[m[32m      "version": "3.0.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.0.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-jXKhWqXPmlUeoQnF/EhTtTl4C9SnrxSH/jZUih3jmO6lBKr99rP3/+FmrMj4EFpOXzMtXHAZkd3x0E6h6Fgflw=="[m
[32m+[m[32m    },[m
     "cyclist": {[m
       "version": "1.0.1",[m
       "resolved": "https://registry.npmjs.org/cyclist/-/cyclist-1.0.1.tgz",[m
[36m@@ -5101,6 +5125,15 @@[m
         "utila": "~0.4"[m
       }[m
     },[m
[32m+[m[32m    "dom-helpers": {[m
[32m+[m[32m      "version": "5.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/dom-helpers/-/dom-helpers-5.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-nRCa7CK3VTrM2NmGkIy4cbK7IZlgBE/PYMn55rrXefr5xXDP0LdtfPnblFDoVdcAfslJ7or6iqAUnx0CCGIWQA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/runtime": "^7.8.7",[m
[32m+[m[32m        "csstype": "^3.0.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "dom-serializer": {[m
       "version": "0.2.2",[m
       "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",[m
[36m@@ -6891,6 +6924,11 @@[m
       "integrity": "sha1-8QdIy+dq+WS3yWyTxrzCivEgwIE=",[m
       "optional": true[m
     },[m
[32m+[m[32m    "gud": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gud/-/gud-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-zGEOVKFM5sVPPrYs7J5/hYEw2Pof8KCyOwyhG8sAF26mCAeUFAcYPu1mwB7hhpIP29zOIBaDqwuHdLp0jvZXjw=="[m
[32m+[m[32m    },[m
     "gzip-size": {[m
       "version": "5.1.1",[m
       "resolved": "https://registry.npmjs.org/gzip-size/-/gzip-size-5.1.1.tgz",[m
[36m@@ -10835,6 +10873,11 @@[m
         "ts-pnp": "^1.1.6"[m
       }[m
     },[m
[32m+[m[32m    "popper.js": {[m
[32m+[m[32m      "version": "1.16.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/popper.js/-/popper.js-1.16.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-Wb4p1J4zyFTbM+u6WuO4XstYx4Ky9Cewe4DWrel7B0w6VVICvPwdOpotjzcf6eD8TsckVnIMNONQyPIUFOUbCQ=="[m
[32m+[m[32m    },[m
     "portfinder": {[m
       "version": "1.0.28",[m
       "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.28.tgz",[m
[36m@@ -12307,6 +12350,25 @@[m
       "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",[m
       "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="[m
     },[m
[32m+[m[32m    "react-lifecycles-compat": {[m
[32m+[m[32m      "version": "3.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-lifecycles-compat/-/react-lifecycles-compat-3.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-fBASbA6LnOU9dOU2eW7aQ8xmYBSXUIWr+UmF9b1efZBazGNO+rcXT/icdKnYm2pTwcRylVUYwW7H1PHfLekVzA=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "react-popper": {[m
[32m+[m[32m      "version": "1.3.11",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-popper/-/react-popper-1.3.11.tgz",[m
[32m+[m[32m      "integrity": "sha512-VSA/bS+pSndSF2fiasHK/PTEEAyOpX60+H5EPAjoArr8JGm+oihu4UbrqcEBpQibJxBVCpYyjAX7abJ+7DoYVg==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/runtime": "^7.1.2",[m
[32m+[m[32m        "@hypnosphi/create-react-context": "^0.3.1",[m
[32m+[m[32m        "deep-equal": "^1.1.1",[m
[32m+[m[32m        "popper.js": "^1.14.4",[m
[32m+[m[32m        "prop-types": "^15.6.1",[m
[32m+[m[32m        "typed-styles": "^0.0.7",[m
[32m+[m[32m        "warning": "^4.0.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "react-refresh": {[m
       "version": "0.8.3",[m
       "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.8.3.tgz",[m
[36m@@ -12378,6 +12440,50 @@[m
         "workbox-webpack-plugin": "5.1.4"[m
       }[m
     },[m
[32m+[m[32m    "react-transition-group": {[m
[32m+[m[32m      "version": "4.4.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-transition-group/-/react-transition-group-4.4.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-/RNYfRAMlZwDSr6z4zNKV6xu53/e2BuaBbGhbyYIXTrmgu/bGHzmqOs7mJSJBHy9Ud+ApHx3QjrkKSp1pxvlFg==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/runtime": "^7.5.5",[m
[32m+[m[32m        "dom-helpers": "^5.0.1",[m
[32m+[m[32m        "loose-envify": "^1.4.0",[m
[32m+[m[32m        "prop-types": "^15.6.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "reactstrap": {[m
[32m+[m[32m      "version": "8.9.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/reactstrap/-/reactstrap-8.9.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-pmf33YjpNZk1IfrjqpWCUMq9hk6GzSnMWBAofTBNIRJQB1zQ0Au2kzv3lPUAFsBYgWEuI9iYa/xKXHaboSiMkQ==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/runtime": "^7.12.5",[m
[32m+[m[32m        "classnames": "^2.2.3",[m
[32m+[m[32m        "prop-types": "^15.5.8",[m
[32m+[m[32m        "react-popper": "^1.3.6",[m
[32m+[m[32m        "react-transition-group": "^2.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "dom-helpers": {[m
[32m+[m[32m          "version": "3.4.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/dom-helpers/-/dom-helpers-3.4.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-LnuPJ+dwqKDIyotW1VzmOZ5TONUN7CwkCR5hrgawTUbkBGYdeoNLZo6nNfGkCrjtE1nXXaj7iMMpDa8/d9WoIA==",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "@babel/runtime": "^7.1.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "react-transition-group": {[m
[32m+[m[32m          "version": "2.9.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/react-transition-group/-/react-transition-group-2.9.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-+HzNTCHpeQyl4MJ/bdE0u6XRMe9+XG/+aL4mCxVN4DnPBQ0/5bfHWPDuOZUzYdMj94daZaZdCCc1Dzt9R/xSSg==",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "dom-helpers": "^3.4.0",[m
[32m+[m[32m            "loose-envify": "^1.4.0",[m
[32m+[m[32m            "prop-types": "^15.6.2",[m
[32m+[m[32m            "react-lifecycles-compat": "^3.0.4"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "read-pkg": {[m
       "version": "3.0.0",[m
       "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",[m
[36m@@ -14440,6 +14546,11 @@[m
         "mime-types": "~2.1.24"[m
       }[m
     },[m
[32m+[m[32m    "typed-styles": {[m
[32m+[m[32m      "version": "0.0.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/typed-styles/-/typed-styles-0.0.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-pzP0PWoZUhsECYjABgCGQlRGL1n7tOHsgwYv3oIiEpJwGhFTuty/YNeduxQYzXXa3Ge5BdT6sHYIQYpl4uJ+5Q=="[m
[32m+[m[32m    },[m
     "typedarray": {[m
       "version": "0.0.6",[m
       "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",[m
[36m@@ -14703,8 +14814,7 @@[m
     "uuid": {[m
       "version": "8.3.2",[m
       "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",[m
[31m-      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",[m
[31m-      "optional": true[m
[32m+[m[32m      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg=="[m
     },[m
     "v8-compile-cache": {[m
       "version": "2.3.0",[m
[36m@@ -14776,6 +14886,14 @@[m
         "makeerror": "1.0.x"[m
       }[m
     },[m
[32m+[m[32m    "warning": {[m
[32m+[m[32m      "version": "4.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/warning/-/warning-4.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-rpJyN222KWIvHJ/F53XSZv0Zl/accqHR8et1kpaMTD/fLCRxtV8iX8czMzY7sVZupTI3zcUTg8eycS2kNF9l6w==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "loose-envify": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "watchpack": {[m
       "version": "1.7.5",[m
       "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-1.7.5.tgz",[m
[1mdiff --git a/client/package.json b/client/package.json[m
[1mindex 7a94417..2dc7f14 100644[m
[1m--- a/client/package.json[m
[1m+++ b/client/package.json[m
[36m@@ -6,9 +6,13 @@[m
     "@testing-library/jest-dom": "^5.14.1",[m
     "@testing-library/react": "^11.2.7",[m
     "@testing-library/user-event": "^12.8.3",[m
[32m+[m[32m    "bootstrap": "^5.0.2",[m
     "react": "^17.0.2",[m
     "react-dom": "^17.0.2",[m
     "react-scripts": "4.0.3",[m
[32m+[m[32m    "react-transition-group": "^4.4.2",[m
[32m+[m[32m    "reactstrap": "^8.9.0",[m
[32m+[m[32m    "uuid": "^8.3.2",[m
     "web-vitals": "^1.1.2"[m
   },[m
   "scripts": {[m
[36m@@ -17,7 +21,7 @@[m
     "test": "react-scripts test",[m
     "eject": "react-scripts eject"[m
   },[m
[31m-  "proxy":"http://localhost:5000",[m
[32m+[m[32m  "proxy": "http://localhost:5000",[m
   "eslintConfig": {[m
     "extends": [[m
       "react-app",[m
[1mdiff --git a/client/src/App.css b/client/src/App.css[m
[1mindex 74b5e05..e69de29 100644[m
[1m--- a/client/src/App.css[m
[1m+++ b/client/src/App.css[m
[36m@@ -1,38 +0,0 @@[m
[31m-.App {[m
[31m-  text-align: center;[m
[31m-}[m
[31m-[m
[31m-.App-logo {[m
[31m-  height: 40vmin;[m
[31m-  pointer-events: none;[m
[31m-}[m
[31m-[m
[31m-@media (prefers-reduced-motion: no-preference) {[m
[31m-  .App-logo {[m
[31m-    animation: App-logo-spin infinite 20s linear;[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-.App-header {[m
[31m-  background-color: #282c34;[m
[31m-  min-height: 100vh;[m
[31m-  display: flex;[m
[31m-  flex-direction: column;[m
[31m-  align-items: center;[m
[31m-  justify-content: center;[m
[31m-  font-size: calc(10px + 2vmin);[m
[31m-  color: white;[m
[31m-}[m
[31m-[m
[31m-.App-link {[m
[31m-  color: #61dafb;[m
[31m-}[m
[31m-[m
[31m-@keyframes App-logo-spin {[m
[31m-  from {[m
[31m-    transform: rotate(0deg);[m
[31m-  }[m
[31m-  to {[m
[31m-    transform: rotate(360deg);[m
[31m-  }[m
[31m-}[m
[1mdiff --git a/client/src/App.js b/client/src/App.js[m
[1mindex 3784575..6671721 100644[m
[1m--- a/client/src/App.js[m
[1m+++ b/client/src/App.js[m
[36m@@ -1,23 +1,10 @@[m
[31m-import logo from './logo.svg';[m
[32m+[m[32mimport React, {Component} from 'react';[m
 import './App.css';[m
 [m
 function App() {[m
   return ([m
     <div className="App">[m
[31m-      <header className="App-header">[m
[31m-        <img src={logo} className="App-logo" alt="logo" />[m
[31m-        <p>[m
[31m-          Edit <code>src/App.js</code> and save to reload.[m
[31m-        </p>[m
[31m-        <a[m
[31m-          className="App-link"[m
[31m-          href="https://reactjs.org"[m
[31m-          target="_blank"[m
[31m-          rel="noopener noreferrer"[m
[31m-        >[m
[31m-          Learn React[m
[31m-        </a>[m
[31m-      </header>[m
[32m+[m[32m      <h1>hi</h1>[m
     </div>[m
   );[m
 }[m
[1mdiff --git a/client/src/index.css b/client/src/index.css[m
[1mdeleted file mode 100644[m
[1mindex ec2585e..0000000[m
[1m--- a/client/src/index.css[m
[1m+++ /dev/null[m
[36m@@ -1,13 +0,0 @@[m
[31m-body {[m
[31m-  margin: 0;[m
[31m-  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',[m
[31m-    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',[m
[31m-    sans-serif;[m
[31m-  -webkit-font-smoothing: antialiased;[m
[31m-  -moz-osx-font-smoothing: grayscale;[m
[31m-}[m
[31m-[m
[31m-code {[m
[31m-  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',[m
[31m-    monospace;[m
[31m-}[m
[1mdiff --git a/client/src/index.js b/client/src/index.js[m
[1mindex ef2edf8..7998135 100644[m
[1m--- a/client/src/index.js[m
[1m+++ b/client/src/index.js[m
[36m@@ -1,6 +1,5 @@[m
 import React from 'react';[m
 import ReactDOM from 'react-dom';[m
[31m-import './index.css';[m
 import App from './App';[m
 import reportWebVitals from './reportWebVitals';[m
 [m
[1mdiff --git a/client/src/logo.svg b/client/src/logo.svg[m
[1mdeleted file mode 100644[m
[1mindex 9dfc1c0..0000000[m
[1m--- a/client/src/logo.svg[m
[1m+++ /dev/null[m
[36m@@ -1 +0,0 @@[m
[31m-<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 1