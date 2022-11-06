# crew

Für die Ausführung der Applikation muss nativescript auf einem Mac OS konfiguriert sein (https://docs.nativescript.org/environment-setup.html#macos-android).

Anschließend durch "ns run ios" auf einem iOS Simulator starten (auf Android wurde die Anwendung noch nicht getestet).


## Backend - Firebase with FireCMS

Die Config Token für Firebase sind in cms/src/App.tsx einzufügen (ein Todo ist an der Stelle als Kommentar eingefügt).

Link zur Docu von FireCMS: (https://firecms.co/docs)

### Dev Env
`yarn dev`

### Prod build
`yarn build`

### Models
Models sind in cms/src/App.tsx definiert.