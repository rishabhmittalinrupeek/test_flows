# Maestro_Testing_Framework

- Maestro is an open-source framework for mobile and web UI testing 
- GitHub Repository: https://github.com/mobile-dev-inc/maestro 
- Docs: https://docs.maestro.dev/ 

## Setup 

### Prerequisite 
- Maestro requires Java 17 or higher to be installed on your system 
- Run: ```java -version``` to check 

### Installation 

```bash
brew tap mobile-dev-inc/tap 
brew install maestro 
```

### Connection 
- “maestro test” will automatically detect and use any local emulator or USB connected 
Physical Device. 
- Run the Emulator on Android studio, install the QA application on emulator. 

## Studio
- maestro studio is a GUI tool to create and run test flows 
- Run: ```maestro studio``` 

## Flow Creation 
- Start simple in YAML and run it on an emulator or simulator 

```yaml
# flow.yaml 
appId: your.app.id 
--- 
- launchApp 
- tapOn: "Text on the screen" 
```

```yaml
# ex_rupeek.yaml
appId: "com.rupeek.customer.debug" 
--- 
- launchApp 
- assertVisible: "Get Started" 
- tapOn: "Get Started" 
```
- Run: ```maestro test flow.yaml``` 



## E2E Testing via Maestro 
- Maestro can cover both UI and API testing, ​​by combining these layers into a single 
end-to-end (E2E) workflow.

| Layer | Maestro's Approach  |
|:------|:---------------------|
| UI (Apex)| Navigates the app/web like a real user using YAML.   	|   
| API/Data | Uses runScript and http calls to validate data behind the scenes. |

```yaml
# flow.yaml 
appId: com.example.app 
--- 
- launchApp 
- runScript:  
    file: fetchUserData.js  # Script to call API 
- assertVisible: ${output.userName}  # Check if UI matches API response 
```

``` javascript
// fetchUserData.js
const response = http.get('https://api.example.com/user/123'); 
output.userName = json(response.body).name; 
```


- Maestro is best when the API test is directly serving a UI journey. 
- http.get(url, headers) 
- http.post(url, body, headers) 
- json(response.body) 
- output variable passes data from your API script back into UI YAML 
