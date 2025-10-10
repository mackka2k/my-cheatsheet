# Every API Type Explained

## 🌐 REST API

**Definition:** Representational State Transfer (REST) is an architectural style for designing networked applications using HTTP methods.

**What it is:** REST APIs use standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources. They are stateless, meaning each request contains all the information needed to process it.

**Key Characteristics:**
- **Stateless**: Each request is independent
- **HTTP Methods**: GET, POST, PUT, DELETE, PATCH
- **Resource-based**: URLs represent resources
- **JSON/XML**: Common data formats
- **Cacheable**: Responses can be cached

**Example:**
```javascript
// GET - Retrieve user data
fetch('https://api.example.com/users/123')
  .then(response => response.json())
  .then(data => console.log(data));

// POST - Create new user
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
});

// PUT - Update user
fetch('https://api.example.com/users/123', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Smith',
    email: 'johnsmith@example.com'
  })
});

// DELETE - Remove user
fetch('https://api.example.com/users/123', {
  method: 'DELETE'
});
```

**HTTP Status Codes:**
```javascript
// Success responses
200 OK - Request successful
201 Created - Resource created
204 No Content - Request successful, no content returned

// Client errors
400 Bad Request - Invalid request
401 Unauthorized - Authentication required
403 Forbidden - Access denied
404 Not Found - Resource not found

// Server errors
500 Internal Server Error - Server error
502 Bad Gateway - Invalid response from upstream
503 Service Unavailable - Service temporarily unavailable
```

**Best for:**
- Web applications
- Mobile apps
- Public APIs
- CRUD operations
- Simple data exchange

---

## 📄 SOAP API

**Definition:** Simple Object Access Protocol (SOAP) is a protocol for exchanging structured information in web services using XML.

**What it is:** SOAP is a protocol that defines how web services communicate. It uses XML for message format and can work over various transport protocols (HTTP, SMTP, TCP).

**Key Characteristics:**
- **XML-based**: Uses XML for message format
- **Protocol**: Defines communication rules
- **Transport agnostic**: Works over HTTP, SMTP, TCP
- **Built-in error handling**: Comprehensive error reporting
- **Security**: Built-in security features

**Example:**
```xml
<!-- SOAP Request -->
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header>
    <Authentication>
      <Username>user123</Username>
      <Password>password123</Password>
    </Authentication>
  </soap:Header>
  <soap:Body>
    <GetUserInfo>
      <UserID>123</UserID>
    </GetUserInfo>
  </soap:Body>
</soap:Envelope>

<!-- SOAP Response -->
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetUserInfoResponse>
      <User>
        <ID>123</ID>
        <Name>John Doe</Name>
        <Email>john@example.com</Email>
      </User>
    </GetUserInfoResponse>
  </soap:Body>
</soap:Envelope>
```

**JavaScript Implementation:**
```javascript
// SOAP request using fetch
const soapRequest = `
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetUserInfo>
      <UserID>123</UserID>
    </GetUserInfo>
  </soap:Body>
</soap:Envelope>`;

fetch('https://api.example.com/soap', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/xml; charset=utf-8',
    'SOAPAction': 'GetUserInfo'
  },
  body: soapRequest
})
.then(response => response.text())
.then(data => {
  // Parse XML response
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(data, 'text/xml');
  const userName = xmlDoc.getElementsByTagName('Name')[0].textContent;
  console.log('User Name:', userName);
});
```

**Best for:**
- Enterprise applications
- Financial services
- Healthcare systems
- Legacy system integration
- High-security requirements

---

## ⚡ gRPC API

**Definition:** gRPC (Google Remote Procedure Call) is a high-performance, open-source RPC framework that uses HTTP/2 and Protocol Buffers.

**What it is:** gRPC allows you to define services and methods in a language-agnostic way using Protocol Buffers. It's designed for high-performance, low-latency communication between services.

**Key Characteristics:**
- **HTTP/2**: Uses HTTP/2 for transport
- **Protocol Buffers**: Binary serialization format
- **Language agnostic**: Works across different programming languages
- **Streaming**: Supports unary, server streaming, client streaming, and bidirectional streaming
- **High performance**: Faster than REST/JSON

**Protocol Buffer Definition (.proto):**
```protobuf
syntax = "proto3";

package user;

service UserService {
  rpc GetUser(GetUserRequest) returns (User);
  rpc CreateUser(CreateUserRequest) returns (User);
  rpc ListUsers(ListUsersRequest) returns (stream User);
  rpc UpdateUser(UpdateUserRequest) returns (User);
}

message User {
  int32 id = 1;
  string name = 2;
  string email = 3;
  int64 created_at = 4;
}

message GetUserRequest {
  int32 id = 1;
}

message CreateUserRequest {
  string name = 1;
  string email = 2;
}

message ListUsersRequest {
  int32 page_size = 1;
  string page_token = 2;
}

message UpdateUserRequest {
  int32 id = 1;
  string name = 2;
  string email = 3;
}
```

**JavaScript Client:**
```javascript
// gRPC client in Node.js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the proto file
const packageDefinition = protoLoader.loadSync('user.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const userProto = grpc.loadPackageDefinition(packageDefinition).user;

// Create client
const client = new userProto.UserService('localhost:50051', 
  grpc.credentials.createInsecure());

// Get user
client.GetUser({ id: 123 }, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('User:', response);
  }
});

// Create user
client.CreateUser({ 
  name: 'John Doe', 
  email: 'john@example.com' 
}, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Created user:', response);
  }
});

// Stream users
const stream = client.ListUsers({ page_size: 10 });
stream.on('data', (user) => {
  console.log('User:', user);
});
stream.on('end', () => {
  console.log('Stream ended');
});
```

**Best for:**
- Microservices communication
- High-performance applications
- Real-time systems
- Mobile applications
- Internal service communication

---

## 🔍 GraphQL API

**Definition:** GraphQL is a query language and runtime for APIs that allows clients to request exactly the data they need.

**What it is:** GraphQL provides a single endpoint where clients can specify exactly what data they want. It's strongly typed and allows for efficient data fetching with a single request.

**Key Characteristics:**
- **Single endpoint**: One endpoint for all operations
- **Client-specified queries**: Clients define what data they need
- **Strongly typed**: Schema defines available data and operations
- **Real-time subscriptions**: Live data updates
- **Introspection**: Self-documenting API

**Schema Definition:**
```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
  createdAt: String!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  createdAt: String!
}

type Query {
  user(id: ID!): User
  users(limit: Int, offset: Int): [User!]!
  post(id: ID!): Post
  posts(limit: Int, offset: Int): [Post!]!
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): Boolean!
  createPost(input: CreatePostInput!): Post!
}

type Subscription {
  userCreated: User!
  postCreated: Post!
}

input CreateUserInput {
  name: String!
  email: String!
}

input UpdateUserInput {
  name: String
  email: String
}

input CreatePostInput {
  title: String!
  content: String!
  authorId: ID!
}
```

**Client Queries:**
```javascript
// Query for specific user data
const GET_USER = `
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts {
        id
        title
        createdAt
      }
    }
  }
`;

// Mutation to create user
const CREATE_USER = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
      createdAt
    }
  }
`;

// Subscription for real-time updates
const USER_CREATED = `
  subscription UserCreated {
    userCreated {
      id
      name
      email
      createdAt
    }
  }
`;

// Execute query
fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: GET_USER,
    variables: { id: '123' }
  })
})
.then(response => response.json())
.then(data => console.log(data));

// Execute mutation
fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: CREATE_USER,
    variables: {
      input: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    }
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

**Best for:**
- Mobile applications
- Single-page applications
- APIs with complex data relationships
- Real-time applications
- APIs with varying client needs

---

## 🪝 WebHooks API

**Definition:** WebHooks are HTTP callbacks that allow one system to notify another system about events in real-time.

**What it is:** WebHooks are a way for applications to receive real-time notifications when specific events occur. Instead of polling for changes, the system pushes updates to your application.

**Key Characteristics:**
- **Event-driven**: Triggered by specific events
- **Real-time**: Immediate notifications
- **HTTP POST**: Uses standard HTTP POST requests
- **Configurable**: You can choose which events to receive
- **Retry mechanism**: Automatic retry on failure

**Example Implementation:**
```javascript
// WebHook endpoint to receive notifications
app.post('/webhook', (req, res) => {
  const { event, data, timestamp } = req.body;
  
  console.log(`Received event: ${event}`);
  console.log('Data:', data);
  console.log('Timestamp:', timestamp);
  
  // Process the event
  switch (event) {
    case 'user.created':
      handleUserCreated(data);
      break;
    case 'user.updated':
      handleUserUpdated(data);
      break;
    case 'user.deleted':
      handleUserDeleted(data);
      break;
    case 'payment.completed':
      handlePaymentCompleted(data);
      break;
    default:
      console.log('Unknown event:', event);
  }
  
  // Always respond with 200 to acknowledge receipt
  res.status(200).json({ received: true });
});

// Event handlers
function handleUserCreated(userData) {
  console.log('New user created:', userData);
  // Send welcome email, create user profile, etc.
}

function handleUserUpdated(userData) {
  console.log('User updated:', userData);
  // Update user profile, sync data, etc.
}

function handleUserDeleted(userData) {
  console.log('User deleted:', userData);
  // Clean up user data, send notification, etc.
}

function handlePaymentCompleted(paymentData) {
  console.log('Payment completed:', paymentData);
  // Process order, send confirmation, etc.
}
```

**WebHook Registration:**
```javascript
// Register WebHook with service
const webhookData = {
  url: 'https://yourapp.com/webhook',
  events: ['user.created', 'user.updated', 'payment.completed'],
  secret: 'your-webhook-secret'
};

fetch('https://api.example.com/webhooks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-api-token'
  },
  body: JSON.stringify(webhookData)
})
.then(response => response.json())
.then(data => {
  console.log('WebHook registered:', data);
});
```

**Security with WebHook Signatures:**
```javascript
const crypto = require('crypto');

// Verify WebHook signature
function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return signature === `sha256=${expectedSignature}`;
}

app.post('/webhook', (req, res) => {
  const signature = req.headers['x-webhook-signature'];
  const payload = JSON.stringify(req.body);
  
  if (!verifyWebhookSignature(payload, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }
  
  // Process WebHook
  console.log('Verified WebHook:', req.body);
  res.status(200).json({ received: true });
});
```

**Best for:**
- Real-time notifications
- Event-driven architectures
- Third-party integrations
- Payment processing
- User activity tracking

---

## 🔌 WebSockets API

**Definition:** WebSockets provide full-duplex communication channels over a single TCP connection, enabling real-time bidirectional communication.

**What it is:** WebSockets allow for persistent connections between client and server, enabling real-time communication without the overhead of HTTP requests.

**Key Characteristics:**
- **Full-duplex**: Bidirectional communication
- **Persistent connection**: No need to establish connection for each message
- **Low latency**: Real-time communication
- **Protocol upgrade**: Starts as HTTP, upgrades to WebSocket
- **Event-driven**: Message-based communication

**Server Implementation (Node.js):**
```javascript
const WebSocket = require('ws');
const http = require('http');

// Create HTTP server
const server = http.createServer();

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Handle WebSocket connections
wss.on('connection', (ws, req) => {
  console.log('New WebSocket connection');
  
  // Send welcome message
  ws.send(JSON.stringify({
    type: 'welcome',
    message: 'Connected to WebSocket server'
  }));
  
  // Handle incoming messages
  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);
      console.log('Received message:', message);
      
      // Handle different message types
      switch (message.type) {
        case 'chat':
          broadcastMessage(message);
          break;
        case 'ping':
          ws.send(JSON.stringify({ type: 'pong' }));
          break;
        case 'subscribe':
          subscribeToChannel(ws, message.channel);
          break;
        default:
          console.log('Unknown message type:', message.type);
      }
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });
  
  // Handle connection close
  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
  
  // Handle errors
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

// Broadcast message to all connected clients
function broadcastMessage(message) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        type: 'chat',
        data: message.data,
        timestamp: new Date().toISOString()
      }));
    }
  });
}

// Subscribe to specific channel
function subscribeToChannel(ws, channel) {
  ws.channel = channel;
  ws.send(JSON.stringify({
    type: 'subscribed',
    channel: channel
  }));
}

server.listen(8080, () => {
  console.log('WebSocket server running on port 8080');
});
```

**Client Implementation:**
```javascript
// WebSocket client
const ws = new WebSocket('ws://localhost:8080');

// Connection opened
ws.onopen = () => {
  console.log('Connected to WebSocket server');
  
  // Send initial message
  ws.send(JSON.stringify({
    type: 'subscribe',
    channel: 'general'
  }));
};

// Message received
ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log('Received message:', message);
  
  // Handle different message types
  switch (message.type) {
    case 'welcome':
      console.log('Welcome message:', message.message);
      break;
    case 'chat':
      displayChatMessage(message.data);
      break;
    case 'pong':
      console.log('Pong received');
      break;
    case 'subscribed':
      console.log('Subscribed to channel:', message.channel);
      break;
  }
};

// Connection closed
ws.onclose = () => {
  console.log('WebSocket connection closed');
};

// Error occurred
ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};

// Send chat message
function sendChatMessage(message) {
  ws.send(JSON.stringify({
    type: 'chat',
    data: {
      user: 'John Doe',
      message: message,
      timestamp: new Date().toISOString()
    }
  }));
}

// Send ping
function sendPing() {
  ws.send(JSON.stringify({
    type: 'ping'
  }));
}

// Display chat message
function displayChatMessage(data) {
  const chatContainer = document.getElementById('chat');
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `
    <strong>${data.user}:</strong> ${data.message}
    <small>${new Date(data.timestamp).toLocaleTimeString()}</small>
  `;
  chatContainer.appendChild(messageElement);
}
```

**Best for:**
- Real-time chat applications
- Live notifications
- Collaborative editing
- Gaming applications
- Live data feeds

---

## 📹 WebRTC API

**Definition:** Web Real-Time Communication (WebRTC) enables peer-to-peer communication for audio, video, and data sharing directly between browsers.

**What it is:** WebRTC allows direct communication between browsers without requiring plugins or additional software. It's commonly used for video calls, file sharing, and real-time data transfer.

**Key Characteristics:**
- **Peer-to-peer**: Direct communication between browsers
- **Real-time**: Low-latency audio/video
- **No plugins**: Built into modern browsers
- **Secure**: Encrypted communication
- **Cross-platform**: Works on different devices

**Basic Video Call Implementation:**
```javascript
// WebRTC configuration
const configuration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' }
  ]
};

// Create peer connection
const peerConnection = new RTCPeerConnection(configuration);

// Get user media (camera and microphone)
async function startVideoCall() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    
    // Display local video
    const localVideo = document.getElementById('localVideo');
    localVideo.srcObject = stream;
    
    // Add tracks to peer connection
    stream.getTracks().forEach(track => {
      peerConnection.addTrack(track, stream);
    });
    
    // Handle remote stream
    peerConnection.ontrack = (event) => {
      const remoteVideo = document.getElementById('remoteVideo');
      remoteVideo.srcObject = event.streams[0];
    };
    
    // Handle ICE candidates
    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        // Send ICE candidate to remote peer
        sendToRemotePeer({
          type: 'ice-candidate',
          candidate: event.candidate
        });
      }
    };
    
    // Handle connection state changes
    peerConnection.onconnectionstatechange = () => {
      console.log('Connection state:', peerConnection.connectionState);
    };
    
  } catch (error) {
    console.error('Error accessing media devices:', error);
  }
}

// Create offer for video call
async function createOffer() {
  try {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    
    // Send offer to remote peer
    sendToRemotePeer({
      type: 'offer',
      offer: offer
    });
  } catch (error) {
    console.error('Error creating offer:', error);
  }
}

// Handle incoming offer
async function handleOffer(offer) {
  try {
    await peerConnection.setRemoteDescription(offer);
    
    // Create answer
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    
    // Send answer to remote peer
    sendToRemotePeer({
      type: 'answer',
      answer: answer
    });
  } catch (error) {
    console.error('Error handling offer:', error);
  }
}

// Handle incoming answer
async function handleAnswer(answer) {
  try {
    await peerConnection.setRemoteDescription(answer);
  } catch (error) {
    console.error('Error handling answer:', error);
  }
}

// Handle ICE candidate
async function handleIceCandidate(candidate) {
  try {
    await peerConnection.addIceCandidate(candidate);
  } catch (error) {
    console.error('Error adding ICE candidate:', error);
  }
}

// Data channel for text chat
function createDataChannel() {
  const dataChannel = peerConnection.createDataChannel('chat', {
    ordered: true
  });
  
  dataChannel.onopen = () => {
    console.log('Data channel opened');
  };
  
  dataChannel.onmessage = (event) => {
    console.log('Received message:', event.data);
    displayChatMessage(event.data);
  };
  
  return dataChannel;
}

// Handle incoming data channel
peerConnection.ondatachannel = (event) => {
  const dataChannel = event.channel;
  
  dataChannel.onopen = () => {
    console.log('Data channel opened');
  };
  
  dataChannel.onmessage = (event) => {
    console.log('Received message:', event.data);
    displayChatMessage(event.data);
  };
};

// Send message through data channel
function sendMessage(message) {
  if (dataChannel && dataChannel.readyState === 'open') {
    dataChannel.send(message);
  }
}

// Display chat message
function displayChatMessage(message) {
  const chatContainer = document.getElementById('chat');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);
}

// File sharing through data channel
function sendFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    const arrayBuffer = reader.result;
    dataChannel.send(arrayBuffer);
  };
  reader.readAsArrayBuffer(file);
}

// Handle incoming file
dataChannel.onmessage = (event) => {
  if (event.data instanceof ArrayBuffer) {
    // Handle file data
    const blob = new Blob([event.data]);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'received-file';
    a.click();
  } else {
    // Handle text message
    displayChatMessage(event.data);
  }
};
```

**Best for:**
- Video conferencing
- Voice calls
- Screen sharing
- File sharing
- Real-time collaboration
- Gaming applications

---

## 📚 Quick Reference

### **API Type Comparison**

| API Type | Protocol | Data Format | Use Case | Complexity |
|----------|----------|-------------|----------|------------|
| **REST** | HTTP | JSON/XML | Web apps, CRUD operations | Low |
| **SOAP** | HTTP/SMTP/TCP | XML | Enterprise, legacy systems | High |
| **gRPC** | HTTP/2 | Protocol Buffers | Microservices, high performance | Medium |
| **GraphQL** | HTTP | JSON | Complex data relationships | Medium |
| **WebHooks** | HTTP POST | JSON/XML | Event notifications | Low |
| **WebSockets** | WebSocket | JSON/Binary | Real-time communication | Medium |
| **WebRTC** | UDP/TCP | Binary | Peer-to-peer communication | High |

### **When to Use Each API Type**

**REST API:**
- ✅ Simple CRUD operations
- ✅ Public APIs
- ✅ Web and mobile apps
- ✅ Standard HTTP operations

**SOAP API:**
- ✅ Enterprise applications
- ✅ High security requirements
- ✅ Legacy system integration
- ✅ Financial/healthcare systems

**gRPC API:**
- ✅ Microservices communication
- ✅ High-performance applications
- ✅ Internal service communication
- ✅ Real-time systems

**GraphQL API:**
- ✅ Complex data relationships
- ✅ Mobile applications
- ✅ APIs with varying client needs
- ✅ Real-time subscriptions

**WebHooks API:**
- ✅ Event-driven architectures
- ✅ Third-party integrations
- ✅ Real-time notifications
- ✅ Payment processing

**WebSockets API:**
- ✅ Real-time chat
- ✅ Live notifications
- ✅ Collaborative editing
- ✅ Gaming applications

**WebRTC API:**
- ✅ Video conferencing
- ✅ Voice calls
- ✅ Screen sharing
- ✅ Peer-to-peer communication

### **Performance Characteristics**

**Latency:**
- **WebRTC**: Lowest (peer-to-peer)
- **gRPC**: Low (HTTP/2, binary)
- **WebSockets**: Low (persistent connection)
- **REST**: Medium (HTTP overhead)
- **GraphQL**: Medium (single request)
- **WebHooks**: Medium (event-driven)
- **SOAP**: Highest (XML parsing)

**Throughput:**
- **gRPC**: Highest (HTTP/2, binary)
- **WebSockets**: High (persistent connection)
- **REST**: Medium (HTTP limitations)
- **GraphQL**: Medium (single endpoint)
- **WebRTC**: Medium (peer-to-peer)
- **WebHooks**: Low (event-driven)
- **SOAP**: Lowest (XML overhead)

---

*Last Updated: 2025*
*This comprehensive guide covers all major API types and their use cases, helping you choose the right one for your project.*
