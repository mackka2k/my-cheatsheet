# 1. [DEVELOPMENT ENVIRONMENT SET-UP] 🛠️

### 1.1. [EXPO] 📱
- **For beginners**
  - Simplifies the setup process.
  - Provides OTA updates.
- **Cons:**
  - Does not allow you to add custom native code.
  - Expo apps tend to have larger sizes.

### 1.2. [REACT NATIVE CLI] 💻
- **For Experienced Developers**
  - Supports integrating custom native modules.
  - Potentially better performance for complex applications.
- **Cons:**
  - Requires Xcode or Android Studio to get started.
  - No OTA updates.

## 2. [CREATING AN APP] 📲

### 2.1. [INITIALIZE A NEW PROJECT] 📝
```bash
npx create-expo-app@latest
```

### 2.2. [START DEVELOPMENT SERVER] 🌐
```bash
cd my-app
npm start
```

## 3. [RUNNING APP] 🏃‍♂️

### 3.1. [ANDROID] 📱
- Use the Expo Go app to scan the QR code from your terminal to open your project.

### 3.2. [IPHONE] 🍏
- Use the built-in QR code scanner of the default iOS Camera app.
- Connect to the same wireless network as your computer.

## 4. [METRO] 🔧
- When you run your app, the Expo CLI starts Metro Bundler. It’s a JavaScript bundler that takes all your JavaScript files and assets, bundles them, and transforms them using Babel. This process converts the code into a format that can be executed by the platform running the app (iOS or Android).

## 5. [EXPO] 📦
A set of tools and services to make development with React Native easier.

### 5.1. [EXPO SDK] 🧩
A modular set of packages that provides access to native APIs, like Camera or Notifications.

### 5.2. [EXPO CLI] 📂
A command-line tool that is the primary interface between a developer and other Expo tools.

### 5.3. [EXPO GO] 📲
An open-source sandbox app you can download on your phone to view your app in development.

### 5.4. [EXPO SNACK] 🍪
A web-based playground where you can write React Native snippets and run them in the browser.

### 5.5. [EXPO TUNNEL] 🌉
For establishing a connection that allows devices to access the app even if they’re not on the same wireless network.
```bash
npx expo start --tunnel
```

## 6. [FINDING LIBRARIES] 🔍
- **React Native Directory** is a searchable database of libraries built specifically for React Native.

## 7. [STYLE SHEET] 🎨
- An abstraction similar to CSS StyleSheets.
- Declare styles in a structured and optimized manner.
- You can use an array of styles to combine multiple style objects; the last style in the array has precedence, or mix predefined styles with inline styles.
- All of the core components accept a prop named `style`.

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={[styles.baseText, styles.boldText]}>
      This is bold and black text
    </Text>
    <Text style={[styles.baseText, { color: 'blue' }]}>
      This is blue and normal weight text
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#eaeaea' },
  baseText: { fontSize: 16, color: 'black' },
  boldText: { fontWeight: 'bold' },
});

export default App;
```

## 8. [USECOLORS SCHEME HOOK] 🌈
- Provides and subscribes to color scheme updates from the appearance module in React Native.
- It returns the current color scheme preference of the user's device.
- Supported color schemes: `"light"`, `"dark"`, `null`.

```javascript
import React from 'react';
import { Text, StyleSheet, useColorScheme, View } from 'react-native';

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text>useColorScheme(): {colorScheme}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default App;
```

## 9. [USEWINDOWDIMENSIONS HOOK] 📐
- Used to get the dimensions of the device window.
- Returns an object containing the window's width and height.
- Useful for creating responsive designs and layouts that adapt to different screen sizes.

```javascript
import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';

const App = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text>Window Dimension Data</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
      <Text>Font scale: {fontScale}</Text>
      <Text>Pixel ratio: {scale}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default App;
```

## 10. [BUTTON] 🔲
- A basic button component that should render on any platform.
- Supports a minimal level of customization.

```javascript
import React from 'react';
import { View, Button } from 'react-native';

const ExampleButton = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };
  return (
    <View>
      <Button title="Click Me" onPress={handlePress} color="#841584" />
    </View>
  );
};

export default ExampleButton;
```

### 10.1. [REQUIRED PROPS] 💬
- `title` and `onPress`

## 11. [PRESSABLE] 👆
- Used for user press interactions.
- Detects various stages of press interactions on any of its child components.
- Highly customizable and flexible way to handle touch-based input.
- Inherits all the styles of the `View` component.

```javascript
import React from 'react';
import { Pressable, Text } from 'react-native';

const ExamplePressable = () => {
  return (
    <Pressable
      onPress={() => console.log('Pressed!')}
      style={({ pressed }) => [
        { backgroundColor: pressed ? 'lightskyblue' : 'lightgray' },
        { padding: 10, alignItems: 'center' },
      ]}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      pressRetentionOffset={{ top: 20, bottom: 20, left: 20 }}
    >
      <Text>Press Me</Text>
    </Pressable>
  );
};

export default ExamplePressable;
```

### 11.1. [PRESSABLE PROPS] 🖱️
- `onPressIn`: Called when a press is activated.
- `onPressOut`: Called when the press gesture is deactivated.
- `onLongPress`: Called when the user holds their finger longer than 500 milliseconds before removing it.
- `pressed`: Boolean state that refers to the pressed state, used to style and control the component.
- `hitSlop`: Extends the area where touch gestures are recognized (interactive area).
- `pressRetentionOffset`: Defines the area where the press remains active during movement.

## 12. [NAVIGATION] 🧭

### 12.1. [REACT NAVIGATION] 📚
- React Native does not come with built-in navigation capabilities.
- **React Navigation** is the most popular third-party library.
- Enables developers to implement various navigation patterns.
- Provides a set of navigators: stack, tab, and drawer.

### 12.2. [STACK NAVIGATOR] 📊
- Allows transition between screens, with each new screen placed on top of the stack.

#### 12.2.1. [NAVIGATIONCONTAINER] 🧳
- Component container for your app's navigation structure.
- Manages the navigation tree and state.
- Should be used only once in the app, at the root.

#### 12.2.2. [CREATENATIVESTACKNAVIGATOR] 📑
- Returns an object with two properties:
  - `Navigator`: Takes `Screen` components as children to define route configurations.
  - `initialRouteName`: Defines the initial route in the stack.
  - `screenOptions`: Specifies common options for the navigator.

```javascript
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button title

="Go to Details" onPress={() => navigation.navigate('Details')} />
  </View>
);

const DetailsScreen = () => (
  <View>
    <Text>Details Screen</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
```
--- 
# 13. [NATIVEWIND] ⚡
- NativeWind is a utility-first CSS framework for React Native that uses Tailwind CSS conventions.
- With NativeWind, you write styles in your JSX instead of creating separate StyleSheet objects.
- **Installation**:
  ```bash
  npm install nativewind
  ```

- **Basic Usage**:
  - Define utility classes directly in the component’s `className` attribute.
  - NativeWind will convert these classes into native styles that React Native can understand.

```javascript
import React from 'react';
import { View, Text } from 'react-native';

const App = () => (
  <View className="flex-1 justify-center items-center bg-gray-100">
    <Text className="text-xl text-blue-500">Hello World</Text>
  </View>
);

export default App;
```
--- 
# 14. [EXPO ROUTER] 🌐
- The Expo Router provides an easy way to navigate between screens using file-based routing.
- **Installation**:
  ```bash
  npx create-expo-app@latest --template with-router
  ```
- **Basic Usage**:
  - Automatically creates screens based on the file structure under the `/pages` folder.
  - Navigation is handled automatically.

```javascript
import { Link } from 'expo-router';

const Home = () => (
  <View>
    <Text>Home Screen</Text>
    <Link href="/details">Go to Details</Link>
  </View>
);

export default Home;
```