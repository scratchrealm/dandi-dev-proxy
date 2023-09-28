Run this service locally when you want to develop the dandi-archive front-end with access to the production backend.

Also, I found I needed to add this line to web/package.json in dandi-archive source

```
"serve2": "HOST=localhost NODE_OPTIONS=--openssl-legacy-provider vue-cli-service serve",
```