# ExpoConfigDemo

## Project Overview

The **ExpoConfigDemo** is a demo Expo app designed to explore and understand the various configuration options available in the `app.json` file. This app demonstrates key configuration changes including app identity, platform-specific settings, icons, splash screens, and updates.

## Changes Made to `app.json`

The following changes were made to the `app.json` configuration file to customize and enhance the app’s identity, behavior, and appearance:

### 1. **App Identity Changes**

- **`name`**: Set to `"ExpoConfigDemo"`
  - This defines the name of the app and how it will appear on user devices.
- **`slug`**: Set to `"ExpoConfigDemo"`
  - This is a unique identifier for the app in the Expo ecosystem. It is used for linking the app in Expo's marketplace.
- **`version`**: Set to `"1.0.0"`

  - The initial version of the app.

- **`description`**: Set to `"A demo Expo app to explore app.json configuration options."`

  - Provides a brief description of what the app does. This is visible in the Expo Dashboard.

- **`owner`**: Set to `"itsvee0120"`

  - Indicates the owner of the project in the Expo ecosystem.

- **`privacy`**: Set to `"public"`
  - This setting makes the app public within the Expo ecosystem, meaning anyone can access and explore it.

### 2. **Platform-Specific Configurations**

- **iOS**:

  - **`supportsTablet`**: Set to `true`
    - This setting ensures the app is optimized for tablet devices.
  - **`bundleIdentifier`**: Set to `"com.itsvee0120.expoconfigdemo"`
    - A unique identifier required for iOS apps on the App Store.

- **Android**:
  - **`package`**: Set to `"com.itsvee0120.expoconfigdemo"`
    - A unique identifier for Android applications.
  - **`adaptiveIcon`**:
    - **`foregroundImage`**: Set to `"./assets/images/adaptive-icon.png"`
    - **`backgroundColor`**: Set to `"#ffffff"`
    - These settings ensure the app has an adaptive icon for Android, which adapts to various shapes on different devices.

### 3. **Icon and Splash Screen Customization**

- **App Icon**:
  - **`icon`**: Set to `"./assets/images/cox.png"`
    - Customizes the app’s icon, replacing the default Expo icon.
- **Web Favicon**:

  - **`favicon`**: Set to `"./assets/images/cox.png"`
    - Customizes the web favicon shown in the browser tab when the app is accessed in a web browser.

- **Splash Screen**:
  - **`image`**: Set to `"./assets/images/splash-icon.png"`
  - **`imageWidth`**: Set to `200`
  - **`resizeMode`**: Set to `"contain"`
  - **`backgroundColor`**: Set to `"#ffffff"`
    - These settings customize the splash screen, showing a branded image until the app loads completely.

### 4. **Runtime Version and Updates Configuration**

- **`runtimeVersion`**: Set to `"sdkVersion"`

  - Ensures that the app is tied to a specific version of the Expo SDK.

- **`updates`**:
  - **`enabled`**: Set to `true`
  - **`fallbackToCacheTimeout`**: Set to `0`
    - These settings enable over-the-air updates and specify that the app should fetch the latest updates immediately after launch.

### 5. **Plugins and Experiments**

- **`expo-router`**: Enables routing capabilities in the app.
- **`expo-splash-screen`**: Customizes the splash screen.
- **`typedRoutes`**: Enables type-safe routing to reduce errors and improve the developer experience.

---

## Observations

### **Icons and Splash Screen**

- **App Icon**: After updating the icon path to `"./assets/images/cox.png"`, the app displayed the new icon on the home screen as expected.
- **Splash Screen**: The custom splash screen with the image `"./assets/images/splash-icon.png"` appeared correctly when launching the app.

### **Platform-Specific Behavior**

- **iOS Configuration**: The app supports tablet devices as per the setting `"supportsTablet": true`.
- **Android Configuration**: The adaptive icon works well on various Android devices. The new foreground image and background color for the adaptive icon are rendered as specified.

### **Updates and Runtime Version**

- The `runtimeVersion` was set to use the SDK version, which ensures compatibility with the SDK. The app's updates are configured to be fetched immediately on launch, ensuring that users always have the latest version.

---

## Screenshots

(Note: Since we cannot provide real screenshots here, please follow these steps to capture screenshots.)

1. **App Icon**:
   ![alt text](<Screenshot_20250420_184153_Expo Go.jpg>)

2. **Splash Screen**:
   ![alt text](<Screenshot_20250420_183640_Expo Go.jpg>)
3. **Web Favicon**:
   ![alt text](image.png)

---

## Final Configuration in `app.json`

```json
{
  "expo": {
    "name": "ExpoConfigDemo",
    "slug": "ExpoConfigDemo",
    "version": "1.0.0",
    "description": "A demo Expo app to explore app.json configuration options.",
    "owner": "itsvee0120",
    "privacy": "public",
    "orientation": "portrait",
    "icon": "./assets/images/cox.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "runtimeVersion": {
      "policy": "sdkVersion"
    },
    "updates": {
      "enabled": true,
      "fallbackToCacheTimeout": 0
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.itsvee0120.expoconfigdemo"
    },
    "android": {
      "package": "com.itsvee0120.expoconfigdemo",
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/cox.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}
```
