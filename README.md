# luke-marked-import-problem
Demonstrating a problem using `marked` through a library. This is a simple create-react-app to reproduce the problem, with an app (`my-app`) using a library (`my-lib`).

Within `my-app`, run `yarn && yarn start`. This tests using `marked` locally (within `my-app`) and through a library (in `my-lib`). The results are displayed in the web page:

<img width="532" alt="image" src="https://user-images.githubusercontent.com/43422748/159833124-0662e347-8f7b-43c1-a3ce-f29ca92bee7e.png">

That is, it fails _only_ when imported through a library, with `TypeError: Cannot read properties of undefined (reading 'parse')`.
