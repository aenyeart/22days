
# 22 Days

Double your max consecutive pullups in only three weeks with this mobile app.

[Project To-do List](./TODO.md)

## Acknowledgements

- Inspired by and built to accompany the [Double Your Max Pullups in 22 Days!](https://youtu.be/eb7tgP7Bla8) video by Jeff Cavaliere of [ATHLEAN-X](http://youtube.com/user/jdcav24).

## Usage/Examples

<!-- ```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
``` -->

## Component Hierarchy

index.js -> App.js -> Home.js ->
 StatusBar
 Report.js
 Today.js -> KeyboardAvoidingView -> ScrollView -> Workout.js
  -> Text.js, Input.js, CompleteButton
DevMenu.js -> Incrementer.js, Pressable


## Run Locally

See the React Native documentation for help with [Setting up the development environment to work on a React Native app.](https://reactnative.dev/docs/environment-setup)

Clone the project

```bash
  git clone git@github.com:aenyeart/22days.git
```

Go to the project directory

```bash
  cd 22days
```

Install dependencies

```bash
  npm install
```

Start the server *

```bash
  npx expo start
  # If you prefer a different command, this is configured via scripts in package.json to run by using the following command:
  npm start
```


 Note: Mobile device and local machine must be on same network, and unsecured networks (e.g. coffee shop) seem to cause problems for this.
 A workaround from Expo docs:
 > First, make sure you are on the same Wi-Fi network on your computer and your device.
>
> If it still doesn't work, it may be due to the router configuration — this is common for public networks. You can work around this by choosing the "Tunnel" connection type when starting the development server, then scanning the QR code again.
>
> `npx expo start --tunnel`

If you get the following response:

``` cl
✔ The package @expo/ngrok@^4.1.0 is required to use tunnels, would you like to install it globally? … yes
Installing @expo/ngrok@^4.1.0...
Installed @expo/ngrok@^4.1.0
CommandError: Please install @expo/ngrok@^4.1.0 and try again
```

...then try running this:

``` cl
npm i @expo/ngrok@^4.1.0
```

## Run on iOS device via side-loading

Requirements:

- iPhone, connected via USB to...
- a Mac computer with XCode installed

Source: [No bundle URL present fixed. Make sure you’re running a packager… | by Onexlab | Medium](https://onexlab-io.medium.com/no-bundle-url-present-fixed-ca2688a80f66)

Setup: `”build:ios”: "react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios'",` added to package.json.

1. In Terminal, go to the project directory and enter: `$ npm run build:ios`
2. XCode -> Build Phases -> Copy Bundle Resources: click on the **plus button**, then select the file **main.jsbundle**and click on the **Add button**
3. Try to re-run your app: `npx react-native run-ios`
4. Trust developer on device: [Invalid code signature due to inadequate entitlements - Stack Overflow](https://stackoverflow.com/questions/61865231/invalid-code-signature-due-to-inadequate-entitlements)

> You will see an Untrusted Developer message.
> To solve this issue on the device, go to Settings > General > VPN and Device Management in newer iOS versions and Settings > General > Profiles or Settings > General > Device Management in older iOS versions (depending on the device type and the iOS version).
> There, trust the developer and allow the apps to run.

## Using React Native Debugger

Shortened from [Debugging tools - Expo Documentation](https://docs.expo.dev/debugging/tools/#react-native-debugger) and [jhen0409/react-native-debugger: The standalone app based on official debugger of React Native, and includes React Inspector / Redux DevTools](https://github.com/jhen0409/react-native-debugger#documentation):

1. Install React Native Debugger (RND) on your machine. If you're on macOS you can run: `brew install react-native-debugger`
2. Open RND, then press [Command] + [T] to open a new tab.
3. In the new RND tab, specify the port that Expo is running on. After launching 22days (via `npx expo start`), you can find this information in the Terminal. For example, the following line in the Terminal indicates that the port number is `19000`:

  ``` bash
      Metro waiting on exp://192.168.68.66:19000"
  ```

4. After setting the port number in RND, ensure that 22days is running in Simulator.
5. In Terminal / Expo's CLI, press 'm' to toggle the Developer Menu in the Simulator. From that menu, select 'Debug Remote JS'.


## Building for Web

```shell
npx expo export:web
```

After running the above, the generated HTML, CSS, and JS files will be in the `web-build` directory.

To deploy to [22days.netlify.app](https://22days.netlify.app/), while in the `web-build` directory, run:

```shell
netlify deploy --prod
```

## Tech Stack

<!-- **Client:** React Native, Redux, TailwindCSS

**Server:** Node, Express -->

## Lessons Learned

<!-- What did you learn while building this project? What challenges did you face and how did you overcome them? -->

## Authors

- [@AEnyeart](https://www.github.com/AEnyeart)
- [@Gedimin45](https://www.github.com/Gedimin45)
