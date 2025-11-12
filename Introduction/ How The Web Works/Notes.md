##  Understanding URLs, HTTP, and Web Communication

###  **URL (Uniform Resource Locator)**

https://www.something.com/ [Resources after the /]


**Breakdown:**
- **`https:`** → Protocol  
- **`something.com`** → Domain Name  
- **`/` and beyond** → Resource path (specific location on the server)

---

### **How the Web Works**

https: Protocol 
something: Domain Name

Client ---------HTTP Request------------> Server
--
Client <-------HTTP Response------------- Server
--

- **Client:** Usually the browser or user device sending the request  
- **Server:** Responds with the requested web page, data, or resource  

###  **IP Address**
- Works like a **home address** for identifying a device on a network  
- Every device has its own **local IP address**

 ###  **DNS (Domain Name System)**
- Translates **domain names** (like `www.google.com`) into **IP addresses**  
- Operates on the **server side**
 

###  **HTTP (Hypertext Transfer Protocol)**
- Used for communication between **client** and **server**  
- Each request is **stateless** (independent of previous requests)  
- **Cookies** are used to store session data for maintaining communication

200(OK) -> a Successful response
400 (not found) -> that means the web page does not exist.

###  **Common HTTP Status Codes**
| **Code** | **Meaning** | **Description** |
|-----------|--------------|-----------------|
| `200 (OK)` | Success | The request was successful |
| `404 (Not Found)` | Error | The requested webpage or resource doesn’t exist |



###  **HTTP Request Methods**

| **Method** | **Purpose** | **Usage Example** |
|-------------|--------------|-------------------|
| `GET` | Retrieve data | Visiting a webpage |
| `POST` | Send data | Submitting a web form |
| `PUT` | Update data | Editing an existing record |
| `DELETE` | Remove data | Deleting a record |
