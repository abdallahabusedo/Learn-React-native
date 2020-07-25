<img src="https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png" alt="logo"/>

# Learn React Native

- react native is built on top of react but instead of targeting the browser it target mobile platforms.

## What is react Native

a framework for building native apps using javascript.

## What is EXPO

EXPO is a set of tools and a framework that sits on top react native and hides a lot of complexity from us.

## How to set Up the development environment

1. open VS code.
2. Installing Expo CLI globally, you can do this by running the following command:
   `npm install -g expo-cli`.
3. instal EXPO client app in your phone.
4. From the Extensions instal.
   1. react native tool.
   2. React-Native/React/Redux snippets.
5. after installing EXPO write this command in the terminal `expo init My_App`.

to run it `npm start`

## TAGS

`<SafeAreaView>` The purpose of SafeAreaView is to render content within the safe area boundaries of a device.
`<Text` A React component for displaying text.

## Images

`<Image />` we use this tag to put images in our app.

to put a local image we use `require`

`<Image source={require("./assets/icon.png")}/>`

to put a online image we must use an object and we must write the width and hight to this image

```
<Image source={{
   width: 200,
   hight: 300,
   uri:"https://picsum.photos/200/300"
}}/>
```
