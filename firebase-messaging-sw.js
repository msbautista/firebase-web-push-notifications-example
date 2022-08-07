importScripts("https://www.gstatic.com/firebasejs/9.8.1/firebase-app-compat.js")
importScripts('https://www.gstatic.com/firebasejs/9.8.1//firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = firebase.initializeApp({
    "FIREBASE": "CONFIGURATION"
});

const messaging = firebaseApp.messaging();

//Enable receiving messages in the background
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Show notification in screen
  self.registration.showNotification(payload.data.title,
    {
      body: payload.data.message,
      data: payload.data
    });

});

//Execute code when the user opens the notification
self.addEventListener('notificationclick', (event) => {
  console.log("Notification opened")
});